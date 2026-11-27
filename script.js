/* ==========================================================================
   Al Fath Travel & Tourism — script.js
   No libraries. Content comes from data.js, text from i18n.js.
   ========================================================================== */
(function () {
  "use strict";

  const S = window.SITE, IMG = window.IMG, I18N = window.I18N;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Language ---------- */
  let lang = "en";
  try {
    const q = new URLSearchParams(location.search).get("lang");
    lang = q === "ar" || q === "en" ? q : (localStorage.getItem("lang") || "en");
  } catch (e) { /* storage blocked */ }
  if (lang !== "ar") lang = "en";

  const t = (k) => (I18N[lang] && I18N[lang][k] != null ? I18N[lang][k] : (I18N.en[k] != null ? I18N.en[k] : k));
  const L = (pair) => (Array.isArray(pair) ? (lang === "ar" ? pair[1] : pair[0]) : pair);
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const icon = (n, cls = "") => `<svg class="icon ${cls}" aria-hidden="true"><use href="#i-${n}"/></svg>`;
  const img = (key, w, h) => `https://images.unsplash.com/${IMG[key] || key}?auto=format&fit=crop&w=${w}${h ? "&h=" + h : ""}&q=70`;
  const srcset = (key, ws, ratio) => ws.map((w) => `${img(key, w, ratio ? Math.round(w * ratio) : 0)} ${w}w`).join(", ");
  const siteName = () => (lang === "ar" ? S.nameAr : S.name);

  /* ---------- Country codes (phone fields) ---------- */
  const CC = window.COUNTRY_CODES;
  const flag = (iso) => iso.replace(/./g, (c) => String.fromCodePoint(127397 + c.charCodeAt(0)));
  function fillCC(sel) {
    if (!sel || !CC) return;
    let names; try { names = new Intl.DisplayNames([lang], { type: "region" }); } catch (e) { names = null; }
    const nm = (iso) => { try { return (names && names.of(iso)) || iso; } catch (e) { return iso; } };
    const opt = ([iso, code]) => `<option value="${iso}" data-code="+${code}">${flag(iso)} ${esc(nm(iso))} (+${code})</option>`;
    const byIso = Object.fromEntries(CC.LIST.map((r) => [r[0], r]));
    const top = CC.TOP.filter((i) => byIso[i]).map((i) => byIso[i]);
    const all = CC.LIST.slice().sort((a, b) => nm(a[0]).localeCompare(nm(b[0]), lang));
    const cur = sel.value || CC.DEFAULT;
    sel.innerHTML = `<optgroup label="${esc(t("f.ccTop"))}">${top.map(opt).join("")}</optgroup><optgroup label="${esc(t("f.ccAll"))}">${all.map(opt).join("")}</optgroup>`;
    sel.value = cur;
    const upd = () => { const o = sel.selectedOptions[0]; sel.previousElementSibling.textContent = o ? flag(sel.value) + " " + o.dataset.code : ""; };
    if (!sel.dataset.bound) { sel.addEventListener("change", upd); sel.dataset.bound = "1"; }
    upd();
  }

  /* ---------- WhatsApp ---------- */
  function waLink(ctx) {
    let msg;
    if (lang === "ar") {
      msg = "السلام عليكم، الفتح للسفر والسياحة. ";
      if (ctx && ctx.type === "pkg") msg += `أرغب في الاستفسار عن برنامج: ${ctx.name} (${ctx.dur}).`;
      else if (ctx && ctx.type === "svc") msg += `أرغب في الاستفسار عن خدمة: ${ctx.name}.`;
      else if (ctx && ctx.type === "med") msg += `أرغب في الاستفسار عن السياحة العلاجية إلى كيرلا${ctx.name ? " (" + ctx.name + ")" : ""}. سأرسل التقارير الطبية هنا.`;
      else if (ctx && ctx.type === "flights") msg += "أرغب في الحصول على سعر تذكرة طيران.";
      else msg += "أرغب في الاستفسار عن رحلة.";
    } else {
      msg = "Hello Al Fath Travel & Tourism, ";
      if (ctx && ctx.type === "pkg") msg += `I would like to enquire about the "${ctx.name}" package (${ctx.dur}).`;
      else if (ctx && ctx.type === "svc") msg += `I would like to enquire about your ${ctx.name} service.`;
      else if (ctx && ctx.type === "med") msg += `I would like to enquire about medical tourism to Kerala${ctx.name ? " (" + ctx.name + ")" : ""}. I will share the medical reports here.`;
      else if (ctx && ctx.type === "flights") msg += "I would like a quote for flight tickets.";
      else msg += "I would like to enquire about a trip.";
    }
    return `https://wa.me/${S.whatsapp}?text=${encodeURIComponent(msg)}`;
  }

  /* ---------- Static text ---------- */
  function applyText() {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = t("meta.title");
    const md = $('meta[name="description"]'); if (md) md.content = t("meta.desc");
    const canon = $('link[rel="canonical"]'); if (canon) canon.href = S.domain + "/" + (lang === "ar" ? "?lang=ar" : "");

    $$("[data-i18n]").forEach((el) => { const v = t(el.dataset.i18n); if (typeof v === "string") el.textContent = v; });
    $$("[data-i18n-ph]").forEach((el) => (el.placeholder = t(el.dataset.i18nPh)));
    $$("[data-i18n-aria]").forEach((el) => el.setAttribute("aria-label", t(el.dataset.i18nAria)));
    $$("[data-i18n-title]").forEach((el) => el.setAttribute("title", t(el.dataset.i18nTitle)));
    $$(".js-lang").forEach((b) => b.setAttribute("aria-label", t("nav.langLabel")));
    $$("[data-i18n-addr-short]").forEach((el) => (el.textContent = lang === "ar" ? "قريات، مسقط" : "Quriyat, Muscat"));
    $$(".js-name").forEach((el) => (el.textContent = siteName()));
    $$(".js-name-alt").forEach((el) => (el.textContent = lang === "ar" ? S.name : S.nameAr));
    $$(".js-addr").forEach((el) => (el.textContent = L(S.address)));
    $("#hours").textContent = S.hours ? L(S.hours) : t("ct.hoursTbc");

    // months
    const months = t("months");
    $$(".js-months").forEach((sel) => {
      const cur = sel.value;
      sel.innerHTML = `<option value="">${esc(t("qq.monthAny"))}</option>` + months.map((m) => `<option value="${esc(m)}">${esc(m)}</option>`).join("");
      if (cur && Array.from(sel.options).some((o) => o.value === cur)) sel.value = cur;
    });

    // service select
    const svcSel = $("#f-service"), cur = svcSel.value;
    svcSel.innerHTML = `<option value="">${esc(t("f.selectService"))}</option>` + window.SERVICES.map((s) => `<option value="${s.id}">${esc(L(s.title))}</option>`).join("");
    svcSel.value = cur;

    $$(".js-cc").forEach(fillCC);

    // destinations datalist
    const dests = new Set();
    window.PACKAGES.forEach((p) => dests.add(L(p.name)));
    $("#destList").innerHTML = Array.from(dests).map((d) => `<option value="${esc(d)}">`).join("");
  }

  /* ---------- Contact wiring ---------- */
  function wireContacts() {
    $$(".js-tel").forEach((a) => (a.href = "tel:" + S.phone));
    $$(".js-phone").forEach((e) => (e.textContent = S.phoneDisplay));
    $$(".js-mail").forEach((a) => (a.href = "mailto:" + S.email));
    $$(".js-email").forEach((e) => (e.textContent = S.email));
    $$(".js-maps").forEach((a) => (a.href = S.mapsUrl));
    $$(".js-ig").forEach((a) => (a.href = S.instagram));
    $$(".js-review").forEach((a) => (a.href = S.reviewUrl));
    $$(".js-maps-reviews").forEach((a) => (a.href = S.reviewsListUrl || S.mapsUrl));
    $$(".js-wa").forEach((a) => (a.href = waLink(a.dataset.waCtx === "flights" ? { type: "flights" } : null)));
    $$(".js-wa-med").forEach((a) => (a.href = waLink({ type: "med" })));
    const mf = $("#mapFrame"); if (mf && !mf.src) mf.src = S.mapsEmbed;

    $("#phoneList").innerHTML = S.phones.map((p) => `<div class="phone-row"><a href="tel:${esc(p.tel)}" dir="ltr">${esc(p.display)}</a>${p.whatsapp ? `<a class="wa-mini" href="https://wa.me/${esc(p.tel.replace(/\D/g, ""))}" target="_blank" rel="noopener" aria-label="${esc(t("ct.waIcon"))}">${icon("wa")}</a>` : ""}</div>`).join("");

    const soc = [];
    if (S.instagram) soc.push(`<a class="soc" href="${esc(S.instagram)}" target="_blank" rel="noopener" aria-label="Instagram">${icon("ig")}</a>`);
    if (S.facebook) soc.push(`<a class="soc" href="${esc(S.facebook)}" target="_blank" rel="noopener" aria-label="Facebook">${icon("fb")}</a>`);
    soc.push(`<a class="soc" href="${esc(waLink())}" target="_blank" rel="noopener" aria-label="WhatsApp">${icon("wa")}</a>`);
    soc.push(`<a class="soc" href="mailto:${esc(S.email)}" aria-label="Email">${icon("mail")}</a>`);
    $$(".js-socials").forEach((el, i) => (el.innerHTML = (i === 0 ? `<span>${esc(t("ct.follow"))}</span>` : "") + soc.join("")));

    if (S.founded) { $("#since").hidden = false; $("#sinceYear").textContent = S.founded; }
    if (S.officePhoto) $("#officeImg").innerHTML = `<img src="${esc(S.officePhoto)}" alt="${esc(siteName())} office in Quriyat" loading="lazy">`;
  }

  /* ---------- Hero slideshow ---------- */
  let slideIdx = 0, slideTimer = null, playing = !reduceMotion;
  function buildHero() {
    const wrap = $("#heroSlides");
    wrap.innerHTML = window.HERO.map((s, i) => `<div class="hero-slide${i === 0 ? " active" : ""}"><img ${i === 0 ? `src="${img(s.img, 1920)}" fetchpriority="high"` : `data-src="${img(s.img, 1920)}"`} srcset="" sizes="100vw" alt="${esc(L(s.cap))}" width="1920" height="1080"></div>`).join("");
    // responsive srcset on first image
    const first = $(".hero-slide img", wrap);
    first.srcset = [800, 1280, 1920].map((w) => `${img(window.HERO[0].img, w)} ${w}w`).join(", ");
    $("#heroDots").innerHTML = window.HERO.map((s, i) => `<button type="button" aria-label="${esc(L(s.cap))}"${i === 0 ? ' class="active" aria-current="true"' : ""}></button>`).join("");
    $$("#heroDots button").forEach((b, i) => b.addEventListener("click", () => { goSlide(i); restart(); }));
    $("#heroCap").textContent = L(window.HERO[0].cap);
    preloadSlide(1);
  }
  function preloadSlide(i) {
    const el = $$(".hero-slide img")[i % window.HERO.length];
    if (el && el.dataset.src) {
      const key = window.HERO[i % window.HERO.length].img;
      el.srcset = [800, 1280, 1920].map((w) => `${img(key, w)} ${w}w`).join(", ");
      el.src = el.dataset.src; delete el.dataset.src;
    }
  }
  function goSlide(i) {
    const slides = $$(".hero-slide"), dots = $$("#heroDots button");
    slideIdx = (i + slides.length) % slides.length;
    preloadSlide(slideIdx); preloadSlide(slideIdx + 1);
    slides.forEach((s, k) => s.classList.toggle("active", k === slideIdx));
    dots.forEach((d, k) => { d.classList.toggle("active", k === slideIdx); d.toggleAttribute("aria-current", k === slideIdx); });
    const cap = $("#heroCap"); cap.style.opacity = 0;
    setTimeout(() => { cap.textContent = L(window.HERO[slideIdx].cap); cap.style.opacity = 1; }, 250);
  }
  function restart() { clearInterval(slideTimer); if (playing) slideTimer = setInterval(() => goSlide(slideIdx + 1), 6500); }
  function setPlayBtn() {
    const b = $("#heroPause");
    b.innerHTML = icon(playing ? "pause" : "play");
    b.setAttribute("aria-label", t(playing ? "hero.pause" : "hero.play"));
  }

  /* ---------- Chips ---------- */
  function buildChips() {
    const items = window.CHIPS.map((id) => window.PACKAGES.find((p) => p.id === id)).filter(Boolean);
    const html = items.map((p) => `<a class="chip" href="#packages" data-pkg="${p.id}"><img src="${img(p.img, 96, 96)}" alt="" width="46" height="46" loading="lazy"><span><b>${esc(L(p.name).split(":")[0])}</b><small>${esc(L(p.dur))}</small></span></a>`).join("");
    const track = $("#chips");
    track.innerHTML = html + html.replace(/<a class="chip"/g, '<a class="chip" aria-hidden="true" tabindex="-1"');
  }

  /* ---------- Services ---------- */
  function buildServices() {
    $("#svcGrid").innerHTML = window.SERVICES.map((s, i) => `
      <article class="card reveal reveal-d${i % 4}">
        <div class="card-img">
          <img src="${img(s.img, 600, 450)}" srcset="${srcset(s.img, [400, 600, 900], 0.75)}" sizes="(max-width:760px) 100vw, (max-width:1080px) 50vw, 25vw" alt="${esc(L(s.title))}" loading="lazy" width="600" height="450">
          ${s.flag ? `<span class="card-flag">${esc(L(s.flag))}</span>` : ""}
          <span class="card-badge${s.flag ? " gold" : ""}">${icon(s.icon)}</span>
        </div>
        <div class="card-body">
          <h3>${esc(L(s.title))}</h3>
          <p>${esc(L(s.short))}</p>
          <button class="link-btn" type="button" data-svc="${s.id}">${esc(t("svc.details"))} ${icon("arrow")}</button>
        </div>
      </article>`).join("");
  }
  function serviceModal(id) {
    const s = window.SERVICES.find((x) => x.id === id); if (!s) return;
    const name = L(s.title);
    openModal(`
      <div class="m-hero"><img src="${img(s.img, 1200, 600)}" alt="${esc(name)}">
        <div class="m-hero-body">
          <nav class="crumbs" aria-label="Breadcrumb"><a href="#top" data-close>${esc(t("crumb.home"))}</a><span class="sep">›</span><a href="#services" data-close>${esc(t("crumb.services"))}</a><span class="sep">›</span><span aria-current="page">${esc(name)}</span></nav>
          <h2 id="modalTitle">${esc(name)}</h2>
        </div>
      </div>
      <div class="m-body">
        <p class="m-intro">${esc(L(s.intro))}</p>
        <h3>${esc(t("svc.handle"))}</h3>
        <ul class="ticks" style="grid-template-columns:repeat(auto-fit,minmax(240px,1fr))">${s.handle.map((h) => `<li>${icon("check")}<span>${esc(L(h))}</span></li>`).join("")}</ul>
        <div style="display:flex;gap:12px;flex-wrap:wrap">
          ${s.id === "medical" ? `<button class="btn btn-gold js-medform-m" type="button">${icon("heart")}${esc(t("med.cta"))}</button>` : `<button class="btn btn-gold" type="button" data-enq-svc="${s.id}">${esc(t("pkg.quote"))} ${icon("arrow", "flip-rtl")}</button>`}
          <a class="btn btn-wa" href="${esc(s.id === "medical" ? waLink({ type: "med" }) : waLink({ type: "svc", name }))}" target="_blank" rel="noopener">${icon("wa")}${esc(t("pkg.wa"))}</a>
          ${s.link ? `<a class="btn btn-line" href="${s.link}" data-close>${esc(t(s.id === "holidays" ? "nav.packages" : s.id === "medical" ? "nav.medical" : "nav.flights"))}</a>` : ""}
        </div>
      </div>`, true);
  }

  /* ---------- Medical ---------- */
  function buildMedical() {
    const M = window.MEDICAL;
    $("#medDest").innerHTML = M.destinations.map((d, i) => `
      <article class="dest-card reveal reveal-d${i}">
        <img src="${img(d.img, 700, 900)}" srcset="${srcset(d.img, [400, 700], 1.28)}" sizes="(max-width:760px) 100vw, 33vw" alt="${esc(L(d.name))}" loading="lazy" width="700" height="900">
        <div class="dc-body"><span class="tag">${esc(L(d.tag))}</span><h3>${esc(L(d.name))}</h3><p>${esc(L(d.text))}</p></div>
      </article>`).join("");
    $("#medSteps").innerHTML = M.steps.map((s, i) => `
      <li class="tl-item reveal"><span class="tl-ico">${icon(s.icon)}<span class="tl-num">${i + 1}</span></span><div><h4>${esc(L(s.t))}</h4><p>${esc(L(s.d))}</p></div></li>`).join("");
    $("#medProg").innerHTML = M.programmes.map((p, i) => `
      <article class="prog-card reveal reveal-d${i}">
        <div class="pc-img"><img src="${img(p.img, 600, 410)}" alt="${esc(L(p.title))}" loading="lazy" width="600" height="410"></div>
        <div class="pc-body"><span class="dur">${icon("clock")} ${esc(L(p.dur))}</span><h4>${esc(L(p.title))}</h4><p>${esc(L(p.text))}</p>
          <button class="link-btn" type="button" data-med="${p.id}">${esc(t("svc.details"))} ${icon("arrow")}</button></div>
      </article>`).join("");
  }
  function medProgModal(id) {
    const p = window.MEDICAL.programmes.find((x) => x.id === id); if (!p) return;
    const name = L(p.title);
    openModal(`
      <div class="m-hero"><img src="${img(p.img, 1200, 600)}" alt="${esc(name)}">
        <div class="m-hero-body">
          <nav class="crumbs" aria-label="Breadcrumb"><a href="#top" data-close>${esc(t("crumb.home"))}</a><span class="sep">›</span><a href="#medical" data-close>${esc(t("crumb.medical"))}</a><span class="sep">›</span><span aria-current="page">${esc(name)}</span></nav>
          <h2 id="modalTitle">${esc(name)}</h2>
          <div class="m-meta"><span>${icon("clock")}${esc(L(p.dur))}</span></div>
        </div>
      </div>
      <div class="m-body">
        <p class="m-intro">${esc(L(p.text))}</p>
        <div class="m-cols">
          <div>
            <h3>${esc(t("med.journey"))}</h3>
            <ol class="itin">${p.phases.map((ph, i) => `<li><span class="dn">${i + 1}</span><h4>${esc(lang === "ar" ? ph[2] : ph[0])}</h4><p>${esc(lang === "ar" ? ph[3] : ph[1])}</p></li>`).join("")}</ol>
            <p class="med-note" style="color:var(--ink);background:var(--sand);border-color:var(--gold-l)">${icon("info")}<span>${esc(t("med.note"))}</span></p>
          </div>
          <aside>
            <div class="price-box"><small>${esc(t("med.programme"))}</small><b>${esc(t("pkg.price"))}</b>
              <button class="btn btn-gold js-medform-m" type="button" data-prog="${esc(name)}">${icon("heart")}${esc(t("med.cta"))}</button>
              <a class="btn btn-wa" href="${esc(waLink({ type: "med", name }))}" target="_blank" rel="noopener">${icon("wa")}${esc(t("med.wa"))}</a>
            </div>
          </aside>
        </div>
      </div>`);
  }
  function medFormModal(prog) {
    const cities = [["Kochi (Cochin)", "كوتشي (كوشين)"], ["Kottakkal", "كوتاكال"], ["Perinthalmanna", "بيرينتالمانا"]];
    openModal(`
      <div class="m-body">
        <p class="eyebrow">${esc(t("med.eyebrow"))}</p>
        <h2 id="modalTitle" style="font-size:2.2rem">${esc(t("med.formTitle"))}</h2>
        <p class="m-intro" style="font-size:1rem">${esc(t("med.formLead"))}</p>
        <form id="medForm" novalidate>
          <input type="text" name="_honey" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true">
          <input type="hidden" name="programme" value="${esc(prog || "")}">
          <div class="form-grid">
            <div class="field"><label for="m-name">${esc(t("med.patient"))} *</label><input id="m-name" name="patient_name" required></div>
            <div class="field"><label for="m-age">${esc(t("med.age"))}</label><input id="m-age" name="patient_age" type="number" min="0" max="120" inputmode="numeric"></div>
            <div class="field"><label for="m-phone">${esc(t("f.phone"))} *</label><div class="phone-field" dir="ltr"><span class="cc-wrap"><span class="cc-label" aria-hidden="true"></span><select name="country_code" class="js-cc" aria-label="${esc(t("f.cc"))}"></select></span><input id="m-phone" name="phone" type="tel" required autocomplete="tel-national" inputmode="tel" placeholder="${esc(t("f.phonePh"))}"></div></div>
            <div class="field"><label for="m-email">${esc(t("f.email"))}</label><input id="m-email" name="email" type="email" dir="ltr" autocomplete="email"></div>
            <div class="field full"><label for="m-cond">${esc(t("med.condition"))} *</label><textarea id="m-cond" name="condition" required style="min-height:90px"></textarea></div>
            <div class="field"><label for="m-city">${esc(t("med.city"))}</label><select id="m-city" name="preferred_city"><option value="">${esc(t("med.cityAny"))}</option>${cities.map((c) => `<option value="${esc(c[0])}">${esc(L(c))}</option>`).join("")}</select></div>
            <div class="field"><label for="m-month">${esc(t("med.month"))}</label><select id="m-month" name="travel_month"><option value="">${esc(t("qq.monthAny"))}</option>${t("months").map((m) => `<option>${esc(m)}</option>`).join("")}</select></div>
            <div class="field"><label for="m-att">${esc(t("med.attendants"))}</label><input id="m-att" name="attendants" type="number" min="0" max="10" value="1" inputmode="numeric"></div>
            <div class="field"><span class="lbl">${esc(t("med.reports"))}</span><label class="check"><input type="checkbox" name="reports_on_whatsapp" value="yes" id="m-wa"> ${esc(t("med.sendWa"))}</label></div>
            <div class="field full"><label for="m-file">${esc(t("med.upload"))}</label><input id="m-file" name="attachment" type="file" accept=".pdf,image/*"></div>
          </div>
          <p class="med-note" style="color:var(--ink);background:var(--sand);border-color:var(--gold-l);margin:20px 0 0">${icon("info")}<span>${esc(t("med.note"))}</span></p>
          <div class="form-foot"><small>${esc(t("f.privacy"))}</small><button class="btn btn-gold btn-lg" type="submit">${esc(t("med.submit"))} ${icon("arrow", "flip-rtl")}</button></div>
          <div class="form-msg" role="status" aria-live="polite"></div>
        </form>
      </div>`, true);
    const f = $("#medForm");
    fillCC($(".js-cc", f));
    f.addEventListener("submit", (e) => submitForm(e, f, "medical"));
  }

  /* ---------- Packages ---------- */
  let activeCat = window.CATEGORIES[0].id;
  function buildTabs() {
    $("#tabs").innerHTML = window.CATEGORIES.map((c) => `<button class="tab" role="tab" type="button" id="tab-${c.id}" aria-selected="${c.id === activeCat}" aria-controls="pkgGrid" data-cat="${c.id}" tabindex="${c.id === activeCat ? 0 : -1}">${esc(L(c.label))}</button>`).join("");
  }
  function buildPackages() {
    const list = window.PACKAGES.filter((p) => p.cat === activeCat);
    $("#pkgGrid").setAttribute("aria-labelledby", "tab-" + activeCat);
    $("#pkgGrid").innerHTML = list.map((p, i) => `
      <a class="pkg reveal reveal-d${i % 4}" href="#packages" role="button" data-pkg="${p.id}" aria-label="${esc(t("pkg.view"))}: ${esc(L(p.name))}">
        <img src="${img(p.img, 600, 860)}" srcset="${srcset(p.img, [400, 600, 800], 1.43)}" sizes="(max-width:760px) 100vw, (max-width:1080px) 50vw, 25vw" alt="${esc(L(p.name))} · ${esc(L(p.route))}" loading="lazy" width="600" height="860">
        <span class="pkg-dur">${icon("clock")}${esc(L(p.dur))}</span>
        <span class="pkg-body">
          <span class="pkg-route" style="display:block">${esc(L(p.route))}</span>
          <span class="h3" role="heading" aria-level="3">${esc(L(p.name))}</span>
          <span class="pkg-tag" style="display:block">${esc(L(p.tag))}</span>
          <span class="pkg-hl">${p.hl.slice(0, 3).map((h) => `<span class="li">${esc(L(h))}</span>`).join("")}</span>
          <span class="pkg-foot"><span class="price">${esc(p.price ? L(p.price) : t("pkg.price"))}</span><span class="go">${esc(t("pkg.view"))} ${icon("arrow", "flip-rtl")}</span></span>
        </span>
      </a>`).join("");
    observeReveal();
  }
  function pkgModal(id) {
    const p = window.PACKAGES.find((x) => x.id === id); if (!p) return;
    const cat = window.CATEGORIES.find((c) => c.id === p.cat);
    const name = L(p.name), dur = L(p.dur);
    openModal(`
      <div class="m-hero"><img src="${img(p.img, 1400, 700)}" srcset="${srcset(p.img, [700, 1000, 1400], 0.5)}" sizes="(max-width:980px) 100vw, 980px" alt="${esc(name)} · ${esc(L(p.route))}">
        <div class="m-hero-body">
          <nav class="crumbs" aria-label="Breadcrumb"><a href="#top" data-close>${esc(t("crumb.home"))}</a><span class="sep">›</span><a href="#packages" data-close data-cat-link="${p.cat}">${esc(t("crumb.packages"))}</a><span class="sep">›</span><a href="#packages" data-close data-cat-link="${p.cat}">${esc(L(cat.label))}</a><span class="sep">›</span><span aria-current="page">${esc(name)}</span></nav>
          <h2 id="modalTitle">${esc(name)}</h2>
          <div class="m-meta"><span>${icon("clock")}${esc(dur)}</span><span>${icon("route")}${esc(L(p.route))}</span></div>
        </div>
      </div>
      <div class="m-body">
        <p class="m-intro">${esc(L(p.tag))}.</p>
        <div class="m-cols">
          <div>
            <h3>${esc(t("pkg.itinerary"))}</h3>
            <ol class="itin">${p.days.map((d, i) => `<li><span class="dn">${String(i + 1).padStart(2, "0")}</span><h4>${esc(t("pkg.day"))} ${i + 1}: ${esc(lang === "ar" ? d[2] : d[0])}</h4><p>${esc(lang === "ar" ? d[3] : d[1])}</p></li>`).join("")}</ol>
            <p class="m-disclaimer">${esc(t("pkg.disclaimer"))}</p>
          </div>
          <aside>
            <div class="price-box"><small>${esc(dur)}</small><b>${esc(p.price ? L(p.price) : t("pkg.price"))}</b>
              <button class="btn btn-gold" type="button" data-enq-pkg="${p.id}">${esc(t("pkg.enquire"))}</button>
              <a class="btn btn-wa" href="${esc(waLink({ type: "pkg", name, dur }))}" target="_blank" rel="noopener">${icon("wa")}${esc(t("pkg.wa"))}</a>
            </div>
            <h3>${esc(t("pkg.highlights"))}</h3>
            <ul class="ticks">${p.hl.map((h) => `<li>${icon("sparkle")}<span>${esc(L(h))}</span></li>`).join("")}</ul>
            <h3>${esc(t("pkg.included"))}</h3>
            <ul class="ticks">${p.inc.map((k) => `<li>${icon("check")}<span>${esc(t("inc." + k))}</span></li>`).join("")}</ul>
            <h3>${esc(t("pkg.notes"))}</h3>
            <div class="notes">${p.notes.map((k) => `<span>${icon("leaf")}${esc(t("note." + k))}</span>`).join("")}</div>
          </aside>
        </div>
      </div>`);
  }

  /* ---------- FAQ ---------- */
  function buildFaq() {
    $("#faqList").innerHTML = window.FAQ.map((f, i) => `
      <div class="faq-item reveal">
        <button class="faq-q" type="button" aria-expanded="false" aria-controls="faq-a${i}" id="faq-q${i}"><span>${esc(lang === "ar" ? f[2] : f[0])}</span><span class="pm">${icon("plus")}</span></button>
        <div class="faq-a" id="faq-a${i}" role="region" aria-labelledby="faq-q${i}"><div><p>${esc(lang === "ar" ? f[3] : f[1])}</p></div></div>
      </div>`).join("");
  }

  /* ---------- Google reviews slider ---------- */
  let revIdx = 0, revTimer = null;
  const G_ICON = '<svg viewBox="0 0 48 48" aria-hidden="true"><path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.6-.4-3.9z"/><path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2A11.9 11.9 0 0 1 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3a12 12 0 0 1-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.6-.4-3.9z"/></svg>';
  const stars = (n) => Array.from({ length: 5 }, (_, i) => `<svg class="icon${i < Math.round(n) ? "" : " off"}" aria-hidden="true"><use href="#i-star"/></svg>`).join("");
  const initials = (n) => String(n).trim().split(/\s+/).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  function revPerView() { return window.innerWidth <= 760 ? 1 : window.innerWidth <= 1080 ? 2 : 3; }
  function buildReviews() {
    const R = window.REVIEWS, wrap = $("#revWrap"), cta = $(".review-cta");
    if (!R || !R.items || !R.items.length) { wrap.hidden = true; return; }
    wrap.hidden = false;
    if (cta) cta.style.display = "none";
    $("#gSummary").innerHTML = `${G_ICON}<div><div class="g-score"><b>${esc(R.rating != null ? Number(R.rating).toFixed(1) : "")}</b><span class="stars">${stars(R.rating || 5)}</span></div><small>${R.count != null ? esc(R.count) + " " + esc(t("rev.based")) : "Google"}</small></div>`;
    $("#revTrack").innerHTML = R.items.map((r, i) => `
      <figure class="rev-card" role="group" aria-roledescription="slide" aria-label="${i + 1} / ${R.items.length}">
        <div class="rev-top"><span class="rev-av" aria-hidden="true">${esc(initials(r.name))}</span><div><figcaption><b>${esc(r.name)}</b></figcaption><small>${esc(r.date || "")}</small></div><span class="rev-g">${G_ICON}</span></div>
        <div class="stars" role="img" aria-label="${esc(r.stars)} / 5">${stars(r.stars)}</div>
        <blockquote dir="auto">${esc(r.text)}</blockquote>
      </figure>`).join("");
    revIdx = Math.min(revIdx, Math.max(0, R.items.length - revPerView()));
    renderRev();
    revRestart();
  }
  function renderRev() {
    const R = window.REVIEWS; if (!R || !R.items.length) return;
    const pages = Math.max(1, R.items.length - revPerView() + 1);
    revIdx = (revIdx + pages) % pages;
    const card = $(".rev-card"); if (!card) return;
    const step = card.getBoundingClientRect().width + 24;
    $("#revTrack").style.transform = `translateX(${(lang === "ar" ? 1 : -1) * revIdx * step}px)`;
    $("#revDots").innerHTML = Array.from({ length: pages }, (_, i) => `<button type="button" aria-label="${i + 1}"${i === revIdx ? ' class="active" aria-current="true"' : ""}></button>`).join("");
    const hide = pages < 2; ["#revPrev", "#revNext", "#revDots"].forEach((q) => ($(q).style.visibility = hide ? "hidden" : ""));
  }
  function revRestart() { clearInterval(revTimer); if (!reduceMotion) revTimer = setInterval(() => { revIdx++; renderRev(); }, 5500); }
  $("#revPrev").addEventListener("click", () => { revIdx--; renderRev(); revRestart(); });
  $("#revNext").addEventListener("click", () => { revIdx++; renderRev(); revRestart(); });
  $("#revDots").addEventListener("click", (e) => { const b = e.target.closest("button"); if (!b) return; revIdx = [...b.parentNode.children].indexOf(b); renderRev(); revRestart(); });
  $("#revSlider").addEventListener("mouseenter", () => clearInterval(revTimer));
  $("#revSlider").addEventListener("mouseleave", revRestart);
  window.addEventListener("resize", () => renderRev());

  /* ---------- Instagram + footer ---------- */
  function buildIg() {
    $("#igRow").innerHTML = window.INSTAGRAM.map((k) => `<a class="ig-tile" href="${esc(S.instagram)}" target="_blank" rel="noopener" aria-label="Instagram ${esc(S.instagramHandle)}"><img src="${img(k, 400, 400)}" alt="" loading="lazy" width="400" height="400">${icon("ig")}</a>`).join("");
    $("#footPk").innerHTML = window.CATEGORIES.map((c) => `<li><a href="#packages" data-cat-link="${c.id}">${esc(L(c.label))}</a></li>`).join("");
    $("#statPk").textContent = window.PACKAGES.length;
    $("#year").textContent = new Date().getFullYear();
  }

  /* ---------- Modal ---------- */
  const modal = $("#modal"), modalBox = $(".modal-box", modal), modalContent = $("#modalContent");
  let lastFocus = null;
  function openModal(html, narrow) {
    lastFocus = document.activeElement;
    modalContent.innerHTML = html;
    modalBox.classList.toggle("narrow", !!narrow);
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    modalBox.scrollTop = 0;
    setTimeout(() => { const f = modalContent.querySelector("input:not(.hp):not([type=hidden]), button, a[href]"); (modalBox.querySelector(".modal-close") || f).focus(); }, 30);
  }
  function closeModal() {
    if (!modal.classList.contains("open")) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    modalContent.innerHTML = "";
    if (lastFocus && document.contains(lastFocus)) lastFocus.focus();
  }
  modal.addEventListener("click", (e) => { if (e.target.closest("[data-close]")) closeModal(); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { closeModal(); closeMenu(); }
    if (e.key === "Tab" && modal.classList.contains("open")) {
      const f = $$('button, a[href], input:not(.hp):not([type=hidden]), select, textarea, [tabindex]:not([tabindex="-1"])', modalBox).filter((el) => el.offsetParent !== null);
      if (!f.length) return;
      if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
    }
  });

  /* ---------- Fill enquiry form ---------- */
  function goEnquire(opts = {}) {
    closeModal(); closeMenu();
    const f = $("#enqForm");
    if (opts.service) f.service.value = opts.service;
    if (opts.pkg != null) f.package.value = opts.pkg;
    if (opts.month != null) f.travel_month.value = opts.month;
    if (opts.trav) f.travellers.value = opts.trav;
    if (opts.message) f.message.value = opts.message;
    $("#contact").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    setTimeout(() => f.name.focus({ preventScroll: true }), reduceMotion ? 0 : 700);
  }

  /* ---------- Forms (FormSubmit) ---------- */
  async function submitForm(e, form, kind) {
    e.preventDefault();
    const msg = $(".form-msg", form), btn = $('button[type="submit"]', form);
    msg.className = "form-msg"; msg.innerHTML = "";
    if (form._honey && form._honey.value) return; // bot
    const req = $$("[required]", form).filter((el) => !el.value.trim());
    if (req.length) { req[0].focus(); req.forEach((el) => el.setAttribute("aria-invalid", "true")); msg.className = "form-msg err"; msg.textContent = t("f.required") + ": " + req.map((el) => (form.querySelector(`label[for="${el.id}"]`) || {}).textContent || el.name).join(", ").replace(/\*/g, ""); return; }
    $$("[aria-invalid]", form).forEach((el) => el.removeAttribute("aria-invalid"));

    const data = new FormData(form);
    const ccSel = $(".js-cc", form);
    if (ccSel) {
      const o = ccSel.selectedOptions[0], num = String(data.get("phone") || "").trim();
      data.set("phone", num.startsWith("+") ? num : `${o ? o.dataset.code : ""} ${num.replace(/^0+/, "")}`.trim());
      data.delete("country_code");
    }
    const who = data.get("name") || data.get("patient_name") || "";
    let label;
    if (kind === "medical") label = "Medical tourism" + (data.get("programme") ? " – " + data.get("programme") : "");
    else {
      const svc = window.SERVICES.find((s) => s.id === data.get("service"));
      label = [svc ? svc.title[0] : "General", data.get("package")].filter(Boolean).join(" – ");
    }
    data.append("_subject", `New website enquiry: ${label} (${who})`);
    data.append("_template", "table");
    data.append("_captcha", "false");
    data.append("site_language", lang === "ar" ? "Arabic" : "English");
    data.delete("_honey");

    // File upload: FormSubmit's AJAX endpoint does not accept attachments, so post the form normally.
    const file = form.attachment && form.attachment.files && form.attachment.files[0];
    if (file) {
      const hf = document.createElement("form");
      hf.method = "POST"; hf.action = "https://formsubmit.co/" + S.email; hf.enctype = "multipart/form-data"; hf.style.display = "none";
      data.append("_next", location.origin + location.pathname + "?sent=1" + (lang === "ar" ? "&lang=ar" : "") + "#medical");
      for (const [k, v] of data.entries()) {
        if (k === "attachment") continue;
        const i = document.createElement("input"); i.type = "hidden"; i.name = k; i.value = v; hf.appendChild(i);
      }
      const fi = form.attachment.cloneNode(); fi.files = form.attachment.files; fi.name = "attachment"; hf.appendChild(fi);
      document.body.appendChild(hf); btn.disabled = true; btn.textContent = t("f.sending"); hf.submit();
      return;
    }
    data.delete("attachment");

    const old = btn.innerHTML; btn.disabled = true; btn.textContent = t("f.sending");
    try {
      const res = await fetch("https://formsubmit.co/ajax/" + S.email, { method: "POST", headers: { Accept: "application/json" }, body: data });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || String(json.success) === "false") throw new Error(json.message || "Failed");
      msg.className = "form-msg ok"; msg.textContent = t("f.ok");
      form.reset(); $$(".js-cc", form).forEach((x) => (x.value = CC.DEFAULT)); applyText();
    } catch (err) {
      const body = Array.from(data.entries()).filter(([k]) => !k.startsWith("_")).map(([k, v]) => `${k}: ${v}`).join("\n");
      msg.className = "form-msg err";
      msg.innerHTML = `${esc(t("f.fail"))}<br><a class="btn btn-sm btn-teal" href="mailto:${esc(S.email)}?subject=${encodeURIComponent("Website enquiry: " + label)}&body=${encodeURIComponent(body)}">${icon("mail")}${esc(t("f.emailUs"))}</a><a class="btn btn-sm btn-wa" href="https://wa.me/${S.whatsapp}?text=${encodeURIComponent(body)}" target="_blank" rel="noopener">${icon("wa")}${esc(t("f.waUs"))}</a>`;
    } finally { btn.disabled = false; btn.innerHTML = old; }
  }

  /* ---------- Header, menu, scroll ---------- */
  const header = $("#header");
  const onScroll = () => header.classList.toggle("solid", window.scrollY > 40);
  window.addEventListener("scroll", onScroll, { passive: true });

  const mnav = $("#mnav"), burger = $(".js-burger");
  function openMenu() { mnav.hidden = false; requestAnimationFrame(() => mnav.classList.add("open")); burger.setAttribute("aria-expanded", "true"); document.body.style.overflow = "hidden"; $(".js-mclose").focus(); }
  function closeMenu() { if (mnav.hidden) return; mnav.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); document.body.style.overflow = ""; setTimeout(() => (mnav.hidden = true), 350); }
  burger.addEventListener("click", openMenu);
  $(".js-mclose").addEventListener("click", closeMenu);
  $$("#mnav nav a").forEach((a) => a.addEventListener("click", closeMenu));

  // Active nav link
  if ("IntersectionObserver" in window) {
    const links = $$(".nav a");
    const io = new IntersectionObserver((ents) => ents.forEach((en) => {
      if (en.isIntersecting) links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
    }), { rootMargin: "-45% 0px -50% 0px" });
    ["services", "medical", "packages", "flights", "about", "contact"].forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
  }

  // Reveal on scroll
  let revealIO = null;
  function observeReveal() {
    if (reduceMotion || !("IntersectionObserver" in window)) { $$(".reveal").forEach((el) => el.classList.add("in")); return; }
    if (!revealIO) revealIO = new IntersectionObserver((ents) => ents.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); revealIO.unobserve(en.target); } }), { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    $$(".reveal:not(.in)").forEach((el) => revealIO.observe(el));
  }

  /* ---------- Global click delegation ---------- */
  document.addEventListener("click", (e) => {
    const el = e.target.closest("[data-pkg],[data-svc],[data-med],[data-enq-pkg],[data-enq-svc],.js-medform,.js-medform-m,.js-enquire,.js-lang,[data-cat-link],.faq-q,.tab,#heroPrev,#heroNext,#heroPause");
    if (!el) return;
    if (el.matches(".tab")) { activeCat = el.dataset.cat; buildTabs(); buildPackages(); $("#tab-" + activeCat).focus(); return; }
    if (el.matches(".faq-q")) { const item = el.parentElement, open = !item.classList.contains("open"); item.classList.toggle("open", open); el.setAttribute("aria-expanded", open); return; }
    if (el.id === "heroPrev") { goSlide(slideIdx - 1); restart(); return; }
    if (el.id === "heroNext") { goSlide(slideIdx + 1); restart(); return; }
    if (el.id === "heroPause") { playing = !playing; setPlayBtn(); restart(); return; }
    if (el.matches(".js-lang")) { setLang(lang === "ar" ? "en" : "ar"); return; }
    if (el.dataset.catLink) { activeCat = el.dataset.catLink; buildTabs(); buildPackages(); if (!el.closest(".modal")) return; }
    if (el.dataset.pkg) { e.preventDefault(); const p = window.PACKAGES.find((x) => x.id === el.dataset.pkg); if (p && p.cat !== activeCat && el.classList.contains("chip")) { activeCat = p.cat; buildTabs(); buildPackages(); } pkgModal(el.dataset.pkg); return; }
    if (el.dataset.svc) { serviceModal(el.dataset.svc); return; }
    if (el.dataset.med) { medProgModal(el.dataset.med); return; }
    if (el.dataset.enqPkg) { const p = window.PACKAGES.find((x) => x.id === el.dataset.enqPkg); goEnquire({ service: "holidays", pkg: L(p.name) + " (" + L(p.dur) + ")" }); return; }
    if (el.dataset.enqSvc) { goEnquire({ service: el.dataset.enqSvc, pkg: "" }); return; }
    if (el.matches(".js-medform, .js-medform-m")) { medFormModal(el.dataset.prog || ""); return; }
    if (el.matches(".js-enquire")) { e.preventDefault(); goEnquire({ service: el.dataset.service || undefined }); return; }
  });

  // Tabs keyboard (arrow keys)
  $("#tabs").addEventListener("keydown", (e) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) return;
    const ids = window.CATEGORIES.map((c) => c.id); let i = ids.indexOf(activeCat);
    const fwd = (e.key === "ArrowRight") !== (lang === "ar");
    if (e.key === "Home") i = 0; else if (e.key === "End") i = ids.length - 1; else i = (i + (fwd ? 1 : -1) + ids.length) % ids.length;
    e.preventDefault(); activeCat = ids[i]; buildTabs(); buildPackages(); $("#tab-" + activeCat).focus();
  });

  // Quick quote
  $("#qq").addEventListener("submit", (e) => {
    e.preventDefault();
    const f = e.target;
    goEnquire({ service: "holidays", pkg: f.dest.value.trim(), month: f.month.value, trav: f.trav.value });
  });

  $("#enqForm").addEventListener("submit", (e) => submitForm(e, e.target, "general"));

  // Pause hero when tab hidden
  document.addEventListener("visibilitychange", () => { if (document.hidden) clearInterval(slideTimer); else restart(); });

  /* ---------- Render all ---------- */
  function renderDynamic() {
    applyText();
    wireContacts();
    buildChips();
    buildServices();
    buildMedical();
    buildTabs();
    buildPackages();
    buildFaq();
    buildReviews();
    buildIg();
    $("#heroCap").textContent = L(window.HERO[slideIdx].cap);
    $$(".hero-slide img").forEach((im, i) => (im.alt = L(window.HERO[i].cap)));
    $$("#heroDots button").forEach((b, i) => b.setAttribute("aria-label", L(window.HERO[i].cap)));
    setPlayBtn();
    observeReveal();
  }
  function setLang(l) {
    lang = l;
    try { localStorage.setItem("lang", l); } catch (e) { /* ignore */ }
    try { const u = new URL(location.href); if (l === "ar") u.searchParams.set("lang", "ar"); else u.searchParams.delete("lang"); history.replaceState(null, "", u); } catch (e) { /* ignore */ }
    closeModal();
    renderDynamic();
    $$(".reveal").forEach((el) => el.classList.add("in"));
  }

  buildHero();
  renderDynamic();
  onScroll();
  restart();

  // Message after a normal (file) form post redirect
  if (/[?&]sent=1/.test(location.search)) {
    setTimeout(() => { medFormModal(""); const m = $("#medForm .form-msg"); m.className = "form-msg ok"; m.textContent = t("f.ok"); }, 400);
    try { const u = new URL(location.href); u.searchParams.delete("sent"); history.replaceState(null, "", u); } catch (e) { /* ignore */ }
  }
})();
