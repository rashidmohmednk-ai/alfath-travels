/* ==========================================================================
   data.js — EDIT YOUR BUSINESS CONTENT HERE
   - SITE: contact details, social links, form email
   - IMG: photo library (Unsplash photo ids, free to use)
   - SERVICES, MEDICAL, PACKAGES, FAQ: each text is a pair ["English", "Arabic"]
   Prices: none are shown on purpose ("Price on request"). To show a price,
   add  price: ["From 450 OMR", "ابتداءً من 450 ر.ع"]  to any package.
   ========================================================================== */

window.SITE = {
  name: "Al Fath Travel & Tourism",
  nameAr: "الفتح للسفر والسياحة",
  domain: "https://alfathtravels.com",
  phone: "+96894892023",              // used for tel: links
  phoneDisplay: "+968 9489 2023",
  phones: [                          // add more numbers here if needed
    { tel: "+96894892023", display: "+968 9489 2023", whatsapp: true }
  ],
  whatsapp: "96894892023",           // country code + number, no + or spaces
  email: "info@alfathtravels.com",   // enquiry forms are delivered here (FormSubmit)
  instagram: "https://www.instagram.com/alfath_travels/",
  instagramHandle: "@alfath_travels",
  facebook: "",                      // TODO: paste the Facebook page URL when confirmed
  tiktok: "",
  snapchat: "",
  address: ["Al Hosn Street, Quriyat, Muscat, Sultanate of Oman", "شارع الحصن، قريات، مسقط، سلطنة عُمان"],
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=23.2505,58.9065",   // "Get directions" link. TODO: replace with the office's own Google Maps share link
  mapsEmbed: "https://maps.google.com/maps?q=23.2505,58.9065&hl=en&z=15&output=embed", // map on the Contact section (pin on Al Husn Street, Quriyat)
  reviewUrl: "https://www.google.com/maps/search/?api=1&query=Al+Fath+Travel+%26+Tourism+Quriyat+Oman", // TODO: replace with the "Ask for reviews" link from Google Business Profile
  geo: { lat: 23.2505, lng: 58.9065 }, // Al Husn Street, Quriyat (OpenStreetMap). TODO: confirm exact office pin
  founded: null,                     // e.g. 2019 — shows "Since 2019" in About when filled
  hours: null,                       // e.g. ["Sat–Thu: 9:00 am – 1:00 pm, 4:00 pm – 9:00 pm", "السبت–الخميس: ..."]
  officePhoto: ""                    // e.g. "assets/img/office.jpg" — leave empty to show the logo card
};

/* Photo library: free Unsplash photos (unsplash.com/license). */
window.IMG = {
  wahiba: "photo-1582617305594-33359380b310",
  wahibaCamel: "photo-1579193219623-8ef5f1baa518",
  mosque: "photo-1596891347912-212c389463b9",
  mosque2: "photo-1699855803432-17f4ab468b2d",
  muttrah: "photo-1595785615464-e7189026b359",
  lawatiya: "photo-1599743777555-e362a2feab39",
  jebel: "photo-1642896704644-715c83d6a065",
  jebel2: "photo-1723883892911-77075ad9ff0d",
  wadiShab: "photo-1784496087205-0234e00935bb",
  salalah: "photo-1758714751869-3a39fbca20e4",
  salalahCoast: "photo-1682197291565-2231d4b4f616",
  muscatCoast: "photo-1585134339424-0fc98d0bfe86",
  muscatBay: "photo-1634198402204-86f773ed851d",
  wadiBaniKhalid: "photo-1784749464824-60bfeb7a7d40",
  nizwa: "photo-1596891348113-d687419b252a",
  alleppey: "photo-1593693411515-c20261bcad6e",
  alleppey2: "photo-1720445821834-1db9c765cb82",
  backwaters: "photo-1783068293579-ef1c7fe73eb9",
  munnar: "photo-1782580358831-647066d75f5a",
  munnar2: "photo-1637066742971-726bee8d9f56",
  kochi: "photo-1590123732197-e7079d2ceb89",
  kumarakom: "photo-1654530050931-3b02b28570c1",
  kumarakomSunset: "photo-1624554305378-0f440dd3a8c1",
  wayanad: "photo-1691342538271-5a97b7c1c089",
  kashmir: "photo-1761387829550-d4b6af443008",
  kashmir2: "photo-1778918027232-ee2527f92946",
  taj: "photo-1587135941948-670b381f08ce",
  goa: "photo-1614082242765-7c98ca0f3df3",
  manali: "photo-1630303449525-01901c3f65c0",
  manali2: "photo-1619344901057-d4dbeced24af",
  maldivesVilla: "photo-1758717152007-6a2eb7299409",
  maldivesVilla2: "photo-1743356174408-a4d2dd23230e",
  maldivesFamily: "photo-1590523277543-a94d2e4eb00b",
  maldivesLocal: "photo-1759676015346-a2ea5f4a3caa",
  maldivesLux: "photo-1787143061724-21dbe51822bf",
  bangkok: "photo-1528181304800-259b08848526",
  phiphi: "photo-1587691254941-bbd1faa13154",
  kl: "photo-1592723905426-1181bf431d3a",
  petronas: "photo-1566914447826-bf04e54bf1be",
  singapore: "photo-1765886177901-dc0660c078b7",
  bali: "photo-1774960693655-33ca35130bbd",
  nusaPenida: "photo-1532254497630-c74966e79621",
  halong: "photo-1643029891412-92f9a81a8c16",
  sriLanka: "photo-1566296314736-6eaac1ca0cb9",
  kazbegi: "photo-1563284223-333497472e88",
  kazbegi2: "photo-1577701122197-c9607038bd90",
  tbilisi: "photo-1603698873304-b052340d9719",
  almaty: "photo-1600255531849-9edcc7c3d115",
  samarkand: "photo-1733586092622-1b3201e802a5",
  baku: "photo-1785608150289-99a740c68e4f",
  swiss: "photo-1593186344142-ef775a6e596f",
  swiss2: "photo-1521292270410-a8c4d716d518",
  jungfrau: "photo-1773997777374-6f1df5c6b9c9",
  lucerne: "photo-1565005356519-03a035b899e7",
  paris: "photo-1604175287072-b5e71423060c",
  cappadocia: "photo-1631152282084-b8f1b380ccab",
  venice: "photo-1520175480921-4edfa2983e0f",
  ayurveda: "photo-1514733670139-4d87a1941d55",
  ayurveda2: "photo-1780756817394-9a5414ce47a1",
  stethoscope: "photo-1576091160550-2173dba999ef",
  doctor: "photo-1758691462430-81160850496c",
  plane: "photo-1591536813111-b6dccb6f67e0",
  planeSunset: "photo-1506012787146-f92b2d7d6d96",
  passport: "photo-1581553672347-95d9444c0d2c",
  hotel: "photo-1783667711521-aaf123ca2f55",
  car: "photo-1781440312665-1d0704995f0d",
  insurance: "photo-1772751320776-fb98dfba127a",
  group: "photo-1511632765486-a01980e01a18"
};

/* Hero slideshow (order = display order) */
window.HERO = [
  { img: "wahiba", cap: ["Wahiba Sands, Oman", "رمال الشرقية (وهيبة)، عُمان"] },
  { img: "mosque", cap: ["Sultan Qaboos Grand Mosque, Muscat", "جامع السلطان قابوس الأكبر، مسقط"] },
  { img: "alleppey", cap: ["Alleppey houseboat, Kerala", "القوارب المنزلية في أليبي، كيرلا"] },
  { img: "maldivesVilla", cap: ["Overwater villas, Maldives", "الفلل المائية، المالديف"] },
  { img: "jebel", cap: ["Jebel Akhdar, Oman", "الجبل الأخضر، عُمان"] },
  { img: "munnar", cap: ["Munnar tea hills, Kerala", "تلال الشاي في مونار، كيرلا"] },
  { img: "wadiShab", cap: ["Wadi Shab, Oman", "وادي شاب، عُمان"] },
  { img: "kazbegi", cap: ["Kazbegi, Georgia", "كازبيجي، جورجيا"] },
  { img: "salalah", cap: ["Salalah in Khareef season, Oman", "صلالة في موسم الخريف، عُمان"] },
  { img: "bali", cap: ["Bali, Indonesia", "بالي، إندونيسيا"] },
  { img: "swiss", cap: ["Swiss Alps, Switzerland", "جبال الألب، سويسرا"] },
  { img: "muttrah", cap: ["Muttrah Corniche, Muscat", "كورنيش مطرح، مسقط"] }
];

/* Destination chips under the hero (package ids) */
window.CHIPS = ["kerala-classic", "maldives-honeymoon", "georgia", "kashmir", "munnar", "thailand-bkk", "switzerland", "turkey", "bali", "azerbaijan", "salalah-khareef", "kazakhstan", "alleppey-kumarakom", "uzbekistan", "singapore"];

/* Instagram strip photos */
window.INSTAGRAM = ["maldivesVilla2", "kazbegi2", "munnar2", "cappadocia", "wahibaCamel", "lucerne"];

/* --------------------------------------------------------------------------
   SERVICES (icon names are defined in script.js)
   -------------------------------------------------------------------------- */
window.SERVICES = [
  {
    id: "holidays", icon: "palm", img: "backwaters", link: "#packages",
    title: ["Holiday Packages", "البرامج السياحية"],
    short: ["Tailor-made holidays for families, couples and friends.", "رحلات مصمّمة للعائلات والأزواج والأصدقاء."],
    intro: ["From Kerala and the Maldives to Georgia, Europe and our own Oman, we plan complete holidays around your dates, budget and family, with halal food and comfortable pacing.", "من كيرلا والمالديف إلى جورجيا وأوروبا وربوع عُمان، نصمّم رحلات متكاملة حسب مواعيدكم وميزانيتكم وعائلتكم، مع طعام حلال وبرنامج مريح."],
    handle: [["Personalised itinerary", "برنامج مصمّم لكم"], ["Flights and hotels", "الطيران والفنادق"], ["Private transfers and sightseeing", "التنقلات والجولات الخاصة"], ["Visa and travel insurance", "التأشيرة وتأمين السفر"], ["Halal meals and prayer-friendly days", "وجبات حلال وبرنامج يراعي أوقات الصلاة"], ["WhatsApp support during the trip", "دعم عبر واتساب أثناء الرحلة"]]
  },
  {
    id: "flights", icon: "plane", img: "plane", link: "#flights",
    title: ["Flight Tickets", "تذاكر الطيران"],
    short: ["International and domestic tickets at the best fares.", "تذاكر دولية وداخلية بأفضل الأسعار."],
    intro: ["We search across airlines and routes to find the right balance of price, timing and comfort, then look after every change until you fly.", "نبحث بين شركات الطيران والمسارات لنجد التوازن الأفضل بين السعر والتوقيت والراحة، ونتابع أي تغيير حتى موعد سفركم."],
    handle: [["International and domestic tickets", "تذاكر دولية وداخلية"], ["Group and family fares", "أسعار المجموعات والعائلات"], ["Date changes, cancellations and refunds", "تغيير المواعيد والإلغاء والاسترداد"], ["Extra baggage and seat selection", "الأمتعة الإضافية واختيار المقاعد"], ["Wheelchair and special assistance", "الكرسي المتحرك والمساعدة الخاصة"], ["Student and medical travel tickets", "تذاكر الطلاب والسفر العلاجي"]]
  },
  {
    id: "medical", icon: "heart", img: "ayurveda2", link: "#medical", flag: ["Flagship", "خدمة مميزة"],
    title: ["Medical Tourism to India", "السياحة العلاجية إلى الهند"],
    short: ["Complete treatment journeys to Kochi, Kottakkal and Perinthalmanna.", "رحلات علاجية متكاملة إلى كوتشي وكوتاكال وبيرينتالمانا."],
    intro: ["A complete solution for patients and families travelling from Oman to Kerala: hospital coordination, medical visa, flights, accommodation and an Arabic-speaking coordinator on the ground.", "حلّ متكامل للمرضى وعائلاتهم المسافرين من عُمان إلى كيرلا: التنسيق مع المستشفى، التأشيرة الطبية، الطيران، السكن، ومنسّق يتحدث العربية هناك."],
    handle: [["Free first consultation of your reports", "مراجعة أولية مجانية للتقارير"], ["Hospital and doctor coordination", "التنسيق مع المستشفيات والأطباء"], ["Indian medical visa for patient and attendants", "التأشيرة الطبية الهندية للمريض والمرافقين"], ["Flights, airport pick-up and stay near the hospital", "الطيران والاستقبال والسكن قرب المستشفى"], ["Arabic-speaking coordinator and interpreter", "منسّق ومترجم يتحدث العربية"], ["Recovery stays and follow-up from Oman", "إقامة للنقاهة ومتابعة من عُمان"]]
  },
  {
    id: "visa", icon: "passport", img: "passport",
    title: ["Visa Assistance", "مساعدة التأشيرات"],
    short: ["Tourist, visit and medical visas, handled correctly.", "تأشيرات سياحية وزيارة وعلاجية بإجراءات صحيحة."],
    intro: ["Visa rules change often. We check the latest requirements for your passport and residency, prepare your documents and follow up until the visa is issued.", "تتغيّر شروط التأشيرات باستمرار. نتحقق من أحدث المتطلبات حسب جوازكم وإقامتكم، ونجهّز المستندات ونتابع حتى صدور التأشيرة."],
    handle: [["Tourist and visit visas", "التأشيرات السياحية وتأشيرات الزيارة"], ["Indian medical and medical-attendant visas", "التأشيرة الطبية الهندية وتأشيرة المرافق"], ["Schengen and UK visa appointments", "مواعيد تأشيرة شنغن والمملكة المتحدة"], ["Document checklist and form filling", "قائمة المستندات وتعبئة النماذج"], ["Hotel and flight reservations for applications", "حجوزات الفندق والطيران لطلب التأشيرة"], ["Guidance for Oman residents of all nationalities", "إرشاد للمقيمين في عُمان من جميع الجنسيات"]]
  },
  {
    id: "hotels", icon: "bed", img: "hotel",
    title: ["Hotels & Resorts", "الفنادق والمنتجعات"],
    short: ["Trusted hotels, resorts and serviced apartments worldwide.", "فنادق ومنتجعات وشقق فندقية موثوقة حول العالم."],
    intro: ["Whether you need a family suite, a quiet resort or an apartment near a hospital, we book places we trust, at good rates, with clear cancellation terms.", "سواء احتجتم جناحاً عائلياً أو منتجعاً هادئاً أو شقة قرب المستشفى، نحجز أماكن نثق بها بأسعار جيدة وشروط إلغاء واضحة."],
    handle: [["Hotels, resorts and villas", "الفنادق والمنتجعات والفلل"], ["Serviced apartments for long stays", "شقق فندقية للإقامات الطويلة"], ["Family rooms and connecting rooms", "غرف عائلية وغرف متصلة"], ["Halal dining options", "خيارات طعام حلال"], ["Hotel bookings for visa applications", "حجوزات فندقية لطلبات التأشيرة"], ["Special requests and early check-in", "الطلبات الخاصة وتسجيل الدخول المبكر"]]
  },
  {
    id: "transfers", icon: "car", img: "car",
    title: ["Airport Transfers & Car Hire", "الاستقبال من المطار وتأجير السيارات"],
    short: ["Comfortable private cars with reliable drivers.", "سيارات خاصة مريحة مع سائقين موثوقين."],
    intro: ["Arrive relaxed. We arrange meet-and-greet at the airport, private cars with drivers for sightseeing, and self-drive car hire where it makes sense.", "اوصلوا براحة. نرتّب الاستقبال في المطار، وسيارات خاصة مع سائق للجولات، وتأجير السيارات عند الحاجة."],
    handle: [["Airport meet and greet", "الاستقبال في المطار"], ["Private car with driver", "سيارة خاصة مع سائق"], ["Family vans and wheelchair-friendly vehicles", "حافلات عائلية ومركبات مناسبة للكراسي المتحركة"], ["Self-drive car hire", "تأجير سيارات بدون سائق"], ["Inter-city transfers", "التنقل بين المدن"], ["Hospital transfers for medical travellers", "التنقل إلى المستشفى للمسافرين للعلاج"]]
  },
  {
    id: "insurance", icon: "shield", img: "insurance",
    title: ["Travel Insurance", "تأمين السفر"],
    short: ["Peace of mind for medical needs, delays and lost bags.", "راحة بال تغطي الطوارئ الطبية والتأخير وفقدان الأمتعة."],
    intro: ["We help you choose suitable travel insurance for your destination, including the cover required for Schengen visas, and explain clearly what is included.", "نساعدكم في اختيار تأمين السفر المناسب لوجهتكم، بما في ذلك التغطية المطلوبة لتأشيرة شنغن، ونوضّح ما تشمله بوضوح."],
    handle: [["Single-trip and family cover", "تغطية لرحلة واحدة وللعائلة"], ["Schengen-compliant policies", "وثائق مطابقة لمتطلبات شنغن"], ["Emergency medical cover", "تغطية الطوارئ الطبية"], ["Trip delay and cancellation", "تأخير الرحلة وإلغاؤها"], ["Baggage loss and delay", "فقدان الأمتعة وتأخرها"], ["Help with claims", "المساعدة في المطالبات"]]
  },
  {
    id: "groups", icon: "users", img: "group",
    title: ["Group & Corporate Travel", "سفر المجموعات والشركات"],
    short: ["Family groups, teams, events and business trips.", "رحلات العائلات الكبيرة والفرق والمناسبات والأعمال."],
    intro: ["From a large family holiday to a company trip or conference, we coordinate flights, rooms, transport and schedules so everyone travels together, smoothly.", "من رحلة عائلية كبيرة إلى رحلة شركة أو مؤتمر، ننسّق الطيران والغرف والتنقلات والمواعيد ليسافر الجميع معاً بسلاسة."],
    handle: [["Group air fares", "أسعار طيران للمجموعات"], ["Room blocks and group rates", "حجز مجموعة غرف بأسعار خاصة"], ["Private coaches and guides", "حافلات ومرشدون خاصون"], ["Corporate travel accounts", "حسابات سفر للشركات"], ["Conferences and events", "المؤتمرات والفعاليات"], ["One point of contact", "جهة تواصل واحدة"]]
  }
];

/* --------------------------------------------------------------------------
   MEDICAL TOURISM
   -------------------------------------------------------------------------- */
window.MEDICAL = {
  banner: "backwaters",
  destinations: [
    { img: "kochi", name: ["Kochi (Cochin)", "كوتشي (كوشين)"], tag: ["Multi-speciality care", "رعاية متعددة التخصصات"],
      text: ["Kerala’s main city, with advanced multi-speciality hospitals. Cochin International Airport (COK) has direct flights from Muscat.", "المدينة الرئيسية في كيرلا، وتضم مستشفيات متقدمة متعددة التخصصات. ويرتبط مطار كوتشي الدولي (COK) برحلات مباشرة من مسقط."] },
    { img: "ayurveda", name: ["Kottakkal", "كوتاكال"], tag: ["Traditional Ayurveda", "الأيورفيدا التقليدية"],
      text: ["In Malappuram district, known worldwide for traditional Ayurveda treatments and wellness programmes.", "في منطقة مالابورام، وتشتهر عالمياً بعلاجات الأيورفيدا التقليدية وبرامج العافية."] },
    { img: "doctor", name: ["Perinthalmanna", "بيرينتالمانا"], tag: ["Hospital town", "مدينة المستشفيات"],
      text: ["A well-known hospital town in Malappuram district, popular with patients from the Gulf. Close to Calicut airport (CCJ).", "مدينة معروفة بمستشفياتها في منطقة مالابورام، ويقصدها كثير من المرضى من الخليج. وهي قريبة من مطار كاليكوت (CCJ)."] }
  ],
  steps: [
    { icon: "chat", t: ["Free first consultation", "استشارة أولى مجانية"], d: ["Share medical reports by WhatsApp or email.", "أرسلوا التقارير الطبية عبر واتساب أو البريد الإلكتروني."] },
    { icon: "hospital", t: ["Hospital & doctor coordination", "التنسيق مع المستشفى والطبيب"], d: ["We obtain an estimated treatment plan and cost from the hospital.", "نحصل لكم على خطة علاج وتكلفة تقديرية من المستشفى."] },
    { icon: "passport", t: ["Indian medical visa", "التأشيرة الطبية الهندية"], d: ["Assistance for the patient and attendants.", "المساعدة للمريض والمرافقين."] },
    { icon: "plane", t: ["Flights to Kochi or Calicut", "الطيران إلى كوتشي أو كاليكوت"], d: ["From Muscat or Salalah, with wheelchair or special assistance on request.", "من مسقط أو صلالة، مع كرسي متحرك أو مساعدة خاصة عند الطلب."] },
    { icon: "car", t: ["Airport pick-up & drop", "الاستقبال والتوديع في المطار"], d: ["In a comfortable vehicle, straight to your accommodation.", "بسيارة مريحة مباشرة إلى مكان الإقامة."] },
    { icon: "bed", t: ["Stay near the hospital", "سكن قرب المستشفى"], d: ["Hotels or serviced apartments for patient and family.", "فنادق أو شقق فندقية للمريض وعائلته."] },
    { icon: "lang", t: ["Arabic-speaking coordinator", "منسّق يتحدث العربية"], d: ["Interpreter support at appointments and day to day.", "مترجم يرافقكم في المواعيد وفي احتياجاتكم اليومية."] },
    { icon: "food", t: ["Halal food, SIM & currency", "طعام حلال، شريحة اتصال وعملة"], d: ["Halal meals arranged, a local SIM card and currency help.", "ترتيب الوجبات الحلال، وشريحة اتصال محلية، والمساعدة في صرف العملة."] },
    { icon: "calendar", t: ["Appointments & follow-ups", "المواعيد والمتابعة"], d: ["Hospital appointments, admission and follow-up visits.", "مواعيد المستشفى والتنويم وزيارات المتابعة."] },
    { icon: "leaf", t: ["Recovery stays", "إقامة النقاهة"], d: ["An Ayurveda wellness retreat or a quiet Kerala resort.", "منتجع أيورفيدا للعافية أو منتجع هادئ في كيرلا."] },
    { icon: "home", t: ["Return & follow-up from Oman", "العودة والمتابعة من عُمان"], d: ["Return travel and continued support after you are home.", "ترتيب العودة ومواصلة الدعم بعد وصولكم إلى البيت."] }
  ],
  programmes: [
    { id: "med-ayurveda", img: "ayurveda2", dur: ["14 / 21 / 28 days", "14 / 21 / 28 يوماً"],
      title: ["Ayurveda Healing Retreat, Kottakkal", "برنامج الأيورفيدا للعافية، كوتاكال"],
      text: ["Traditional Ayurveda programmes prescribed by Ayurveda physicians, with a calm stay and halal meals.", "برامج أيورفيدا تقليدية يحددها أطباء الأيورفيدا، مع إقامة هادئة ووجبات حلال."],
      phases: [["Arrival & consultation", "Fly Muscat to Calicut (CCJ), transfer to Kottakkal (about 1 hour) and meet the Ayurveda physician, who decides the programme.", "الوصول والاستشارة", "الطيران من مسقط إلى كاليكوت (CCJ)، ثم الانتقال إلى كوتاكال (نحو ساعة)، ومقابلة طبيب الأيورفيدا الذي يحدد البرنامج."],
               ["Treatment days", "Daily therapies as prescribed, rest, light walks and simple, wholesome food. Our coordinator checks in every day.", "أيام العلاج", "جلسات يومية حسب وصف الطبيب، مع الراحة والمشي الخفيف والطعام الصحي البسيط. ويتواصل منسّقنا معكم يومياً."],
               ["Review & return", "Final review with the physician, advice for home, and transfer to the airport for your flight to Muscat.", "المراجعة والعودة", "مراجعة أخيرة مع الطبيب، ونصائح للمنزل، ثم التوجه إلى المطار للعودة إلى مسقط."]] },
    { id: "med-kochi", img: "stethoscope", dur: ["Flexible length", "مدة مرنة"],
      title: ["Specialist Treatment & Recovery, Kochi", "العلاج التخصصي والنقاهة، كوتشي"],
      text: ["Coordination with leading multi-speciality hospitals in Kochi, plus accommodation and recovery support.", "تنسيق مع مستشفيات رائدة متعددة التخصصات في كوتشي، مع السكن ودعم فترة النقاهة."],
      phases: [["Before you travel", "We share your reports with the hospital and send you the estimated treatment plan and cost, then arrange the medical visa.", "قبل السفر", "نرسل تقاريركم إلى المستشفى ونوافيكم بخطة العلاج والتكلفة التقديرية، ثم نرتّب التأشيرة الطبية."],
               ["In Kochi", "Direct flight Muscat to Kochi, airport pick-up, stay near the hospital, and an Arabic-speaking coordinator for appointments and admission.", "في كوتشي", "رحلة مباشرة من مسقط إلى كوتشي، استقبال في المطار، سكن قرب المستشفى، ومنسّق يتحدث العربية للمواعيد والتنويم."],
               ["Recovery & return", "Recovery stay as advised by the doctors, follow-up visits, and return travel with special assistance if needed.", "النقاهة والعودة", "إقامة للنقاهة حسب توصية الأطباء، وزيارات المتابعة، ثم العودة مع مساعدة خاصة عند الحاجة."]] },
    { id: "med-checkup", img: "doctor", dur: ["7–10 days", "7–10 أيام"],
      title: ["Medical Visit & Check-up, Perinthalmanna", "زيارة طبية وفحص شامل، بيرينتالمانا"],
      text: ["Consultations, tests and check-ups in Perinthalmanna, close to Calicut airport.", "استشارات وتحاليل وفحوصات في بيرينتالمانا، القريبة من مطار كاليكوت."],
      phases: [["Day 1", "Fly Muscat to Calicut (CCJ); transfer to Perinthalmanna and check in near the hospital.", "اليوم الأول", "الطيران من مسقط إلى كاليكوت (CCJ)، ثم الانتقال إلى بيرينتالمانا والإقامة قرب المستشفى."],
               ["Days 2–8", "Consultations, tests and results with your coordinator by your side.", "الأيام 2–8", "الاستشارات والتحاليل والنتائج، ومنسّقكم بجانبكم."],
               ["Final day", "Collect reports and prescriptions, then return to Muscat.", "اليوم الأخير", "استلام التقارير والوصفات الطبية، ثم العودة إلى مسقط."]] },
    { id: "med-family", img: "munnar2", dur: ["Treatment + 4–6 days", "العلاج + 4–6 أيام"],
      title: ["Treatment + Family Holiday", "العلاج مع رحلة عائلية"],
      text: ["Combine treatment or recovery with gentle days in Munnar’s tea hills or on an Alleppey houseboat.", "اجمعوا بين العلاج أو النقاهة وأيام هادئة في تلال الشاي في مونار أو على القوارب المنزلية في أليبي."],
      phases: [["Treatment phase", "Hospital or Ayurveda programme arranged as above, with your family staying close by.", "مرحلة العلاج", "برنامج المستشفى أو الأيورفيدا كما سبق، مع إقامة العائلة بالقرب منكم."],
               ["Munnar", "Two quiet nights in the cool tea hills when the doctors say the patient is fit to travel.", "مونار", "ليلتان هادئتان في تلال الشاي الباردة، عندما يسمح الأطباء بالسفر."],
               ["Alleppey & home", "A private houseboat night on the backwaters, then transfer to Kochi airport for Muscat.", "أليبي والعودة", "ليلة في قارب منزلي خاص في المياه الهادئة، ثم إلى مطار كوتشي للعودة إلى مسقط."]] }
  ]
};

/* --------------------------------------------------------------------------
   PACKAGE CATEGORIES (tabs) and PACKAGES
   Each day: ["Title (EN)", "Description (EN)", "Title (AR)", "Description (AR)"]
   inc / notes use keys from i18n.js ("inc.*" and "note.*")
   -------------------------------------------------------------------------- */
window.CATEGORIES = [
  { id: "india", label: ["India & Kerala", "الهند وكيرلا"] },
  { id: "maldives", label: ["Maldives", "المالديف"] },
  { id: "sea", label: ["South-East Asia", "جنوب شرق آسيا"] },
  { id: "caucasus", label: ["Central Asia & Caucasus", "آسيا الوسطى والقوقاز"] },
  { id: "europe", label: ["Europe", "أوروبا"] },
  { id: "oman", label: ["Discover Oman", "اكتشف عُمان"] }
];

window.PACKAGES = [
  /* ===================== INDIA & KERALA ===================== */
  {
    id: "kerala-classic", cat: "india", img: "alleppey2",
    name: ["Kerala Classic", "كيرلا الكلاسيكية"],
    tag: ["Hills, spice gardens and a night on the backwaters", "تلال وحدائق توابل وليلة في المياه الهادئة"],
    dur: ["6 Nights / 7 Days", "6 ليالٍ / 7 أيام"],
    route: ["Kochi · Munnar · Thekkady · Alleppey", "كوتشي · مونار · تيكادي · أليبي"],
    hl: [["Fort Kochi & Chinese fishing nets", "فورت كوتشي وشباك الصيد الصينية"], ["Munnar tea plantations", "مزارع الشاي في مونار"], ["Thekkady spice garden & Periyar lake", "حديقة التوابل في تيكادي وبحيرة بيريار"], ["Private houseboat in Alleppey", "قارب منزلي خاص في أليبي"], ["Waterfalls and viewpoints", "شلالات ومطلات"]],
    inc: ["flights", "hotel", "breakfast", "houseboat", "car", "transfers", "visa"],
    notes: ["direct", "halal", "family", "prayer"],
    days: [
      ["Muscat → Kochi", "Direct flight from Muscat to Kochi (about 4 hours). Meet your driver and visit Fort Kochi, the Chinese fishing nets and Marine Drive.", "مسقط ← كوتشي", "رحلة مباشرة من مسقط إلى كوتشي (نحو 4 ساعات). استقبال من السائق وزيارة فورت كوتشي وشباك الصيد الصينية والكورنيش."],
      ["Kochi → Munnar", "Scenic drive into the hills, stopping at Cheeyappara and Valara waterfalls. Evening at leisure in cool Munnar.", "كوتشي ← مونار", "طريق جبلي خلاب مع التوقف عند شلالات تشييابارا وفالارا. أمسية حرة في أجواء مونار الباردة."],
      ["Munnar sightseeing", "Tea Museum, Mattupetty Dam, Echo Point and Eravikulam National Park (seasonal).", "جولة في مونار", "متحف الشاي، سد ماتوبيتي، نقطة الصدى، ومحمية إرافيكولام (حسب الموسم)."],
      ["Munnar → Thekkady", "Drive to Thekkady. Guided spice-garden walk and an optional boat ride on Periyar lake.", "مونار ← تيكادي", "الانتقال إلى تيكادي، وجولة في حديقة التوابل، ورحلة اختيارية بالقارب في بحيرة بيريار."],
      ["Thekkady → Alleppey houseboat", "Board a private houseboat and cruise the palm-lined backwaters, with lunch, dinner and an overnight on board.", "تيكادي ← قارب أليبي", "الصعود إلى قارب منزلي خاص والإبحار بين أشجار النخيل، مع الغداء والعشاء والمبيت على متنه."],
      ["Alleppey → Kochi", "Breakfast on board, disembark and return to Kochi. Time for shopping at Lulu Mall.", "أليبي ← كوتشي", "الإفطار على القارب ثم العودة إلى كوتشي، مع وقت للتسوق في لولو مول."],
      ["Kochi → Muscat", "Transfer to Cochin airport for your direct flight home.", "كوتشي ← مسقط", "التوجه إلى مطار كوتشي للعودة برحلة مباشرة."]
    ]
  },
  {
    id: "munnar", cat: "india", img: "munnar",
    name: ["Munnar Hills Escape", "استراحة تلال مونار"],
    tag: ["Cool air, tea gardens and misty mornings", "هواء بارد وحدائق شاي وصباحات ضبابية"],
    dur: ["3 Nights / 4 Days", "3 ليالٍ / 4 أيام"],
    route: ["Kochi · Munnar", "كوتشي · مونار"],
    hl: [["Rolling tea estates", "مزارع الشاي الممتدة"], ["Eravikulam National Park", "محمية إرافيكولام"], ["Mattupetty Dam & Echo Point", "سد ماتوبيتي ونقطة الصدى"], ["Waterfalls on the way up", "شلالات على الطريق"], ["Relaxed, family pace", "برنامج عائلي مريح"]],
    inc: ["flights", "hotel", "breakfast", "car", "transfers"],
    notes: ["direct", "halal", "family"],
    days: [
      ["Muscat → Kochi → Munnar", "Direct flight to Kochi, then a 4-hour scenic drive to Munnar with waterfall stops.", "مسقط ← كوتشي ← مونار", "رحلة مباشرة إلى كوتشي، ثم طريق جبلي جميل لمدة 4 ساعات إلى مونار مع التوقف عند الشلالات."],
      ["Munnar highlights", "Eravikulam National Park, Tea Museum and the town viewpoints.", "معالم مونار", "محمية إرافيكولام، متحف الشاي، ومطلات المدينة."],
      ["Lakes and dams", "Mattupetty Dam, Kundala Lake and Echo Point; evening at leisure.", "البحيرات والسدود", "سد ماتوبيتي وبحيرة كوندالا ونقطة الصدى، مع أمسية حرة."],
      ["Munnar → Kochi → Muscat", "Drive back to Kochi airport for your flight home.", "مونار ← كوتشي ← مسقط", "العودة إلى مطار كوتشي والسفر إلى مسقط."]
    ]
  },
  {
    id: "alleppey-kumarakom", cat: "india", img: "kumarakom",
    name: ["Alleppey Houseboat & Kumarakom", "قوارب أليبي وكوماراكوم"],
    tag: ["Slow days on Kerala’s calm backwaters", "أيام هادئة في مياه كيرلا الساكنة"],
    dur: ["4 Nights / 5 Days", "4 ليالٍ / 5 أيام"],
    route: ["Kochi · Kumarakom · Alleppey", "كوتشي · كوماراكوم · أليبي"],
    hl: [["Overnight private houseboat", "ليلة في قارب منزلي خاص"], ["Lakeside resort in Kumarakom", "منتجع على البحيرة في كوماراكوم"], ["Village canoe ride", "جولة بالقارب الصغير في القرى"], ["Vembanad Lake sunsets", "غروب الشمس على بحيرة فيمباناد"], ["Fort Kochi heritage walk", "جولة تراثية في فورت كوتشي"]],
    inc: ["flights", "hotel", "breakfast", "houseboat", "car", "transfers"],
    notes: ["direct", "halal", "family", "honeymoon"],
    days: [
      ["Muscat → Kochi → Kumarakom", "Direct flight to Kochi and a 2-hour drive to a lakeside resort in Kumarakom.", "مسقط ← كوتشي ← كوماراكوم", "رحلة مباشرة إلى كوتشي ثم ساعتان بالسيارة إلى منتجع على البحيرة في كوماراكوم."],
      ["Kumarakom at leisure", "Morning canoe ride through village canals; afternoon by the pool.", "يوم حر في كوماراكوم", "جولة صباحية بالقارب الصغير في قنوات القرى، وفترة مسائية بجانب المسبح."],
      ["Alleppey houseboat", "Board your private houseboat for a full day and night on the backwaters, all meals on board.", "قارب أليبي", "يوم وليلة كاملة على قارب منزلي خاص، مع جميع الوجبات على متنه."],
      ["Alleppey → Kochi", "Disembark and drive to Kochi. Fort Kochi walk and Marine Drive in the evening.", "أليبي ← كوتشي", "النزول من القارب والانتقال إلى كوتشي، مع جولة في فورت كوتشي والكورنيش مساءً."],
      ["Kochi → Muscat", "Transfer to the airport for your flight home.", "كوتشي ← مسقط", "التوجه إلى المطار والعودة إلى مسقط."]
    ]
  },
  {
    id: "wayanad", cat: "india", img: "wayanad",
    name: ["Wayanad Nature Retreat", "طبيعة وايناد"],
    tag: ["Green hills, waterfalls and forest lodges", "تلال خضراء وشلالات ونُزل وسط الغابات"],
    dur: ["4 Nights / 5 Days", "4 ليالٍ / 5 أيام"],
    route: ["Calicut · Wayanad", "كاليكوت · وايناد"],
    hl: [["Banasura Sagar Dam", "سد باناسورا ساغار"], ["Soochipara waterfalls", "شلالات سوتشيبارا"], ["Edakkal caves", "كهوف إيداكال"], ["Tea and coffee estates", "مزارع الشاي والقهوة"], ["Resort with valley views", "منتجع بإطلالة على الوادي"]],
    inc: ["flights", "hotel", "breakfast", "car", "transfers"],
    notes: ["direct", "halal", "family", "prayer"],
    days: [
      ["Muscat → Calicut → Wayanad", "Direct flight to Calicut (CCJ) and a scenic drive up the Thamarassery ghat to Wayanad.", "مسقط ← كاليكوت ← وايناد", "رحلة مباشرة إلى كاليكوت (CCJ) ثم طريق جبلي جميل عبر منحدرات تاماراسيري إلى وايناد."],
      ["Lakes and dams", "Pookode Lake and Banasura Sagar Dam, with an optional speedboat ride.", "البحيرات والسدود", "بحيرة بوكود وسد باناسورا ساغار، مع جولة اختيارية بالقارب السريع."],
      ["Waterfalls and caves", "Soochipara waterfalls and the ancient Edakkal caves (moderate walk).", "الشلالات والكهوف", "شلالات سوتشيبارا وكهوف إيداكال القديمة (مشي متوسط)."],
      ["Estates and leisure", "Tea and coffee estate visit, then a relaxed afternoon at your resort.", "المزارع والاستجمام", "زيارة مزارع الشاي والقهوة، ثم فترة مسائية مريحة في المنتجع."],
      ["Wayanad → Calicut → Muscat", "Drive down to Calicut airport for your flight home.", "وايناد ← كاليكوت ← مسقط", "النزول إلى مطار كاليكوت والعودة إلى مسقط."]
    ]
  },
  {
    id: "kashmir", cat: "india", img: "kashmir",
    name: ["Kashmir Paradise", "جنة كشمير"],
    tag: ["Lakes, meadows and snow peaks", "بحيرات ومروج وقمم مكسوّة بالثلوج"],
    dur: ["6 Nights / 7 Days", "6 ليالٍ / 7 أيام"],
    route: ["Srinagar · Gulmarg · Pahalgam", "سريناغار · غولمارغ · باهالغام"],
    hl: [["Shikara ride on Dal Lake", "جولة بالشيكارا في بحيرة دال"], ["Houseboat night in Srinagar", "ليلة في قارب منزلي في سريناغار"], ["Gulmarg Gondola", "تلفريك غولمارغ"], ["Betaab & Aru valleys", "وادي بيتاب ووادي آرو"], ["Mughal gardens", "الحدائق المغولية"]],
    inc: ["flights", "hotel", "halfboard", "car", "transfers", "sightseeing"],
    notes: ["halal", "family", "prayer", "snow"],
    days: [
      ["Muscat → Delhi → Srinagar", "Fly Muscat to Delhi and connect to Srinagar. Check in to a traditional houseboat on Dal Lake.", "مسقط ← دلهي ← سريناغار", "الطيران من مسقط إلى دلهي ثم إلى سريناغار، والإقامة في قارب منزلي تقليدي على بحيرة دال."],
      ["Srinagar", "Mughal gardens (Nishat and Shalimar), Hazratbal shrine and a sunset shikara ride.", "سريناغار", "الحدائق المغولية (نشاط وشاليمار)، ومسجد حضرة بل، وجولة بالشيكارا عند الغروب."],
      ["Srinagar → Gulmarg", "Drive to Gulmarg, the “meadow of flowers”. Ride the Gondola (subject to weather).", "سريناغار ← غولمارغ", "الانتقال إلى غولمارغ «مرج الزهور»، وركوب التلفريك (حسب الطقس)."],
      ["Gulmarg → Pahalgam", "Drive to Pahalgam along the Lidder River.", "غولمارغ ← باهالغام", "الانتقال إلى باهالغام على ضفاف نهر ليدر."],
      ["Pahalgam valleys", "Betaab Valley, Aru Valley and Chandanwari by local vehicle.", "وديان باهالغام", "وادي بيتاب ووادي آرو وتشانداناواري بالسيارات المحلية."],
      ["Pahalgam → Srinagar", "Return to Srinagar; evening shopping for Kashmiri shawls and dry fruits.", "باهالغام ← سريناغار", "العودة إلى سريناغار وتسوّق مسائي للشالات الكشميرية والمكسرات."],
      ["Srinagar → Delhi → Muscat", "Fly back to Muscat via Delhi.", "سريناغار ← دلهي ← مسقط", "العودة إلى مسقط عبر دلهي."]
    ]
  },
  {
    id: "golden-triangle", cat: "india", img: "taj",
    name: ["Golden Triangle", "المثلث الذهبي"],
    tag: ["Delhi, the Taj Mahal and the Pink City", "دلهي وتاج محل والمدينة الوردية"],
    dur: ["5 Nights / 6 Days", "5 ليالٍ / 6 أيام"],
    route: ["Delhi · Agra · Jaipur", "دلهي · أغرا · جايبور"],
    hl: [["Taj Mahal at sunrise", "تاج محل عند الشروق"], ["Jama Masjid & Old Delhi", "المسجد الجامع ودلهي القديمة"], ["Agra Fort & Fatehpur Sikri", "قلعة أغرا وفاتح بور سيكري"], ["Amber Fort, Jaipur", "قلعة أمبر في جايبور"], ["Hawa Mahal & bazaars", "قصر الرياح والأسواق"]],
    inc: ["flights", "hotel", "breakfast", "car", "guide", "transfers"],
    notes: ["direct", "halal", "family", "prayer"],
    days: [
      ["Muscat → Delhi", "Direct flight to Delhi (about 3 hours). Evening at India Gate.", "مسقط ← دلهي", "رحلة مباشرة إلى دلهي (نحو 3 ساعات)، وزيارة بوابة الهند مساءً."],
      ["Delhi", "Jama Masjid, Red Fort (outside), Qutub Minar and Humayun’s Tomb.", "دلهي", "المسجد الجامع، القلعة الحمراء (من الخارج)، قطب منار، وضريح همايون."],
      ["Delhi → Agra", "Expressway drive to Agra; Agra Fort and sunset view of the Taj from Mehtab Bagh.", "دلهي ← أغرا", "الطريق السريع إلى أغرا، وزيارة قلعة أغرا، ومشاهدة تاج محل عند الغروب من حديقة مهتاب باغ."],
      ["Taj Mahal → Jaipur", "Sunrise at the Taj Mahal (closed Fridays), then Fatehpur Sikri on the way to Jaipur.", "تاج محل ← جايبور", "زيارة تاج محل عند الشروق (مغلق يوم الجمعة)، ثم فاتح بور سيكري في الطريق إلى جايبور."],
      ["Jaipur", "Amber Fort, City Palace, Hawa Mahal and the colourful bazaars.", "جايبور", "قلعة أمبر، قصر المدينة، قصر الرياح، والأسواق الملوّنة."],
      ["Jaipur → Delhi → Muscat", "Drive to Delhi airport for your flight home.", "جايبور ← دلهي ← مسقط", "الانتقال إلى مطار دلهي والعودة إلى مسقط."]
    ]
  },
  {
    id: "goa", cat: "india", img: "goa",
    name: ["Goa Beach Holiday", "عطلة شواطئ غوا"],
    tag: ["Sun, sea and Portuguese charm", "شمس وبحر وطابع برتغالي"],
    dur: ["4 Nights / 5 Days", "4 ليالٍ / 5 أيام"],
    route: ["North Goa · South Goa", "شمال غوا · جنوب غوا"],
    hl: [["Beach resort stay", "إقامة في منتجع شاطئي"], ["Old Goa heritage", "تراث غوا القديمة"], ["Dudhsagar falls (seasonal)", "شلالات دودساغار (موسمية)"], ["Boat trip & dolphin spotting", "رحلة بالقارب ومشاهدة الدلافين"], ["Fort Aguada sunset", "الغروب من قلعة أغوادا"]],
    inc: ["flights", "hotel", "breakfast", "transfers", "sightseeing"],
    notes: ["halal", "family", "honeymoon"],
    days: [
      ["Muscat → Goa", "Fly to Goa (one stop via Mumbai, or direct when available). Check in to your beach resort.", "مسقط ← غوا", "الطيران إلى غوا (توقف واحد عبر مومباي، أو مباشر عند توفره)، والإقامة في منتجع شاطئي."],
      ["North Goa", "Fort Aguada, Calangute and Baga beaches, and the evening sunset.", "شمال غوا", "قلعة أغوادا وشاطئا كالانغوت وباغا، ومشاهدة الغروب."],
      ["South Goa & Old Goa", "Old Goa’s heritage churches, Panjim Latin Quarter and quiet South Goa beaches.", "جنوب غوا وغوا القديمة", "معالم غوا القديمة التراثية، والحي اللاتيني في بانجيم، وشواطئ جنوب غوا الهادئة."],
      ["Leisure or Dudhsagar", "Free day at the beach, or an optional trip to Dudhsagar waterfalls (monsoon season).", "يوم حر أو دودساغار", "يوم حر على الشاطئ، أو رحلة اختيارية إلى شلالات دودساغار (موسم الأمطار)."],
      ["Goa → Muscat", "Transfer to the airport for your flight home.", "غوا ← مسقط", "التوجه إلى المطار والعودة إلى مسقط."]
    ]
  },
  {
    id: "manali", cat: "india", img: "manali",
    name: ["Kullu Manali Snow Trip", "رحلة الثلوج في كولو منالي"],
    tag: ["Snow, pine forests and mountain air", "ثلوج وغابات صنوبر وهواء جبلي"],
    dur: ["6 Nights / 7 Days", "6 ليالٍ / 7 أيام"],
    route: ["Delhi · Manali · Solang · Kullu", "دلهي · منالي · سولانغ · كولو"],
    hl: [["Solang Valley snow activities", "أنشطة الثلج في وادي سولانغ"], ["Atal Tunnel & Sissu", "نفق أتال وسيسو"], ["Hadimba Temple & Old Manali", "معبد هيديمبا ومنالي القديمة"], ["Kullu river rafting (seasonal)", "التجديف في نهر كولو (موسمي)"], ["Cosy mountain hotels", "فنادق جبلية دافئة"]],
    inc: ["flights", "hotel", "halfboard", "car", "transfers", "sightseeing"],
    notes: ["halal", "family", "snow"],
    days: [
      ["Muscat → Delhi", "Direct flight to Delhi; overnight in Delhi (or an overnight Volvo coach to Manali).", "مسقط ← دلهي", "رحلة مباشرة إلى دلهي والمبيت فيها (أو حافلة فولفو ليلية إلى منالي)."],
      ["Delhi → Manali", "Drive or fly (to Kullu–Bhuntar) to Manali. Evening on Mall Road.", "دلهي ← منالي", "الانتقال برّاً أو جواً (إلى مطار كولو-بونتار) إلى منالي، وأمسية في شارع مول رود."],
      ["Solang Valley", "Snow play, skiing and the Solang ropeway (weather permitting).", "وادي سولانغ", "اللعب بالثلج والتزلج وتلفريك سولانغ (حسب الطقس)."],
      ["Atal Tunnel & Sissu", "Through the Atal Tunnel to the snowy Lahaul valley at Sissu.", "نفق أتال وسيسو", "العبور عبر نفق أتال إلى وادي لاهول المكسو بالثلوج في سيسو."],
      ["Manali sightseeing", "Hadimba Temple, Vashisht hot springs and Old Manali cafés.", "معالم منالي", "معبد هيديمبا، وينابيع فاشيشت الحارة، ومقاهي منالي القديمة."],
      ["Manali → Kullu → Delhi", "Kullu shawl factories on the way, then onward to Delhi.", "منالي ← كولو ← دلهي", "زيارة مصانع شالات كولو في الطريق، ثم الانتقال إلى دلهي."],
      ["Delhi → Muscat", "Transfer to Delhi airport for your flight home.", "دلهي ← مسقط", "التوجه إلى مطار دلهي والعودة إلى مسقط."]
    ]
  },

  /* ===================== MALDIVES ===================== */
  {
    id: "maldives-honeymoon", cat: "maldives", img: "maldivesVilla",
    name: ["Overwater Villa Honeymoon", "شهر عسل في فيلا مائية"],
    tag: ["Your own villa above the lagoon", "فيلتكم الخاصة فوق البحيرة الزرقاء"],
    dur: ["4 Nights / 5 Days", "4 ليالٍ / 5 أيام"],
    route: ["Malé · Private island resort", "ماليه · منتجع على جزيرة خاصة"],
    hl: [["Overwater villa with lagoon access", "فيلا مائية مع نزول مباشر إلى البحر"], ["Private dinner on the beach", "عشاء خاص على الشاطئ"], ["Snorkelling on the house reef", "الغطس السطحي في الشعاب المرجانية"], ["Sunset cruise", "رحلة بحرية عند الغروب"], ["Spa time for two", "جلسة سبا لشخصين"]],
    inc: ["flights", "hotel", "halfboard", "seaplane", "visa"],
    notes: ["honeymoon", "halal", "visaFree"],
    days: [
      ["Muscat → Malé → Resort", "Fly to Malé (one stop). Seaplane or speedboat to your island resort; settle into your overwater villa.", "مسقط ← ماليه ← المنتجع", "الطيران إلى ماليه (توقف واحد)، ثم طائرة مائية أو قارب سريع إلى المنتجع والإقامة في الفيلا المائية."],
      ["Island at leisure", "Snorkel the house reef, swim from your deck and enjoy the spa.", "يوم حر في الجزيرة", "الغطس في الشعاب المرجانية، والسباحة من شرفة الفيلا، والاستمتاع بالسبا."],
      ["Sunset cruise", "Relaxed morning, then a sunset dolphin cruise (resort excursion).", "رحلة الغروب", "صباح هادئ، ثم رحلة بحرية لمشاهدة الدلافين عند الغروب."],
      ["Private beach dinner", "A day of your choice, ending with a candle-lit dinner on the sand.", "عشاء خاص على الشاطئ", "يوم حسب رغبتكم، يُختتم بعشاء على ضوء الشموع على الرمال."],
      ["Resort → Malé → Muscat", "Transfer back to Malé for your flight home.", "المنتجع ← ماليه ← مسقط", "العودة إلى ماليه والسفر إلى مسقط."]
    ]
  },
  {
    id: "maldives-family", cat: "maldives", img: "maldivesFamily",
    name: ["Maldives Family Resort Holiday", "عطلة عائلية في منتجعات المالديف"],
    tag: ["Kids’ clubs, beach villas and gentle lagoons", "نوادٍ للأطفال وفلل شاطئية وبحيرات هادئة"],
    dur: ["5 Nights / 6 Days", "5 ليالٍ / 6 أيام"],
    route: ["Malé · Family resort", "ماليه · منتجع عائلي"],
    hl: [["Beach villa or family suite", "فيلا شاطئية أو جناح عائلي"], ["Kids’ club and shallow lagoon", "نادي أطفال وبحيرة ضحلة"], ["Glass-bottom boat or submarine trip", "رحلة بقارب زجاجي أو غواصة"], ["Sandbank picnic", "نزهة على جزيرة رملية"], ["Fishing at sunset", "صيد السمك عند الغروب"]],
    inc: ["flights", "hotel", "fullboard", "seaplane", "visa"],
    notes: ["family", "halal", "prayer", "visaFree"],
    days: [
      ["Muscat → Malé → Resort", "Fly to Malé and transfer by speedboat or seaplane to a family-friendly resort.", "مسقط ← ماليه ← المنتجع", "الطيران إلى ماليه والانتقال بالقارب السريع أو الطائرة المائية إلى منتجع عائلي."],
      ["Lagoon day", "Swimming in the shallow lagoon, kids’ club activities and beach games.", "يوم البحيرة", "السباحة في البحيرة الضحلة، وأنشطة نادي الأطفال، وألعاب الشاطئ."],
      ["Under the sea", "Glass-bottom boat or a submarine trip (excursion) to see the reef without getting wet.", "تحت البحر", "رحلة بقارب زجاجي القاع أو غواصة لمشاهدة الشعاب دون نزول الماء."],
      ["Sandbank picnic", "Boat to a private sandbank for a picnic and snorkelling.", "نزهة على جزيرة رملية", "رحلة بالقارب إلى جزيرة رملية خاصة للنزهة والغطس."],
      ["Leisure & sunset fishing", "Free day, then traditional line fishing at sunset.", "يوم حر وصيد عند الغروب", "يوم حر، ثم صيد تقليدي بالخيط عند الغروب."],
      ["Resort → Malé → Muscat", "Return transfer and flight home.", "المنتجع ← ماليه ← مسقط", "العودة والسفر إلى مسقط."]
    ]
  },
  {
    id: "maldives-budget", cat: "maldives", img: "maldivesLocal",
    name: ["Maldives Local Island Stay", "إقامة في جزر المالديف المحلية"],
    tag: ["The same turquoise sea, at a gentler budget", "البحر الفيروزي نفسه بميزانية أخف"],
    dur: ["4 Nights / 5 Days", "4 ليالٍ / 5 أيام"],
    route: ["Malé · Maafushi or Thulusdhoo", "ماليه · مافوشي أو ثولوسدو"],
    hl: [["Guesthouse on a local island", "دار ضيافة في جزيرة محلية"], ["Snorkelling trip with turtles", "رحلة غطس مع السلاحف"], ["Sandbank excursion", "رحلة إلى جزيرة رملية"], ["Bikini-free local beaches, family atmosphere", "شواطئ محلية بأجواء عائلية محافظة"], ["Optional resort day pass", "يوم اختياري في منتجع"]],
    inc: ["flights", "hotel", "breakfast", "ferry", "visa"],
    notes: ["family", "halal", "prayer", "visaFree"],
    days: [
      ["Muscat → Malé → Local island", "Fly to Malé and take a speedboat to your guesthouse on a local island.", "مسقط ← ماليه ← الجزيرة", "الطيران إلى ماليه ثم قارب سريع إلى دار الضيافة في الجزيرة المحلية."],
      ["Snorkelling trip", "Half-day boat trip to snorkel with turtles and colourful fish.", "رحلة الغطس", "رحلة بالقارب لنصف يوم للغطس مع السلاحف والأسماك الملوّنة."],
      ["Sandbank & leisure", "Morning sandbank visit; afternoon on the island’s beach.", "الجزيرة الرملية والاستجمام", "زيارة صباحية لجزيرة رملية، وفترة مسائية على شاطئ الجزيرة."],
      ["Optional resort day", "Spend a day at a nearby resort (day pass, optional), or relax on the island.", "يوم اختياري في منتجع", "قضاء يوم في منتجع قريب (اختياري)، أو الاسترخاء في الجزيرة."],
      ["Island → Malé → Muscat", "Speedboat to Malé and flight home.", "الجزيرة ← ماليه ← مسقط", "قارب سريع إلى ماليه والعودة إلى مسقط."]
    ]
  },
  {
    id: "maldives-luxury", cat: "maldives", img: "maldivesLux",
    name: ["Maldives Luxury All-Inclusive", "المالديف الفاخرة الشاملة"],
    tag: ["Pool villas, fine dining and nothing to plan", "فلل بمسابح وتجارب طعام راقية ودون أي عناء"],
    dur: ["5 Nights / 6 Days", "5 ليالٍ / 6 أيام"],
    route: ["Malé · Luxury resort", "ماليه · منتجع فاخر"],
    hl: [["Pool villa (beach or overwater)", "فيلا بمسبح (شاطئية أو مائية)"], ["All-inclusive dining", "وجبات شاملة"], ["Seaplane arrival", "الوصول بالطائرة المائية"], ["Spa and wellness", "سبا وعافية"], ["Butler service", "خدمة الخادم الشخصي"]],
    inc: ["flights", "hotel", "allinc", "seaplane", "visa"],
    notes: ["honeymoon", "halal", "family", "visaFree"],
    days: [
      ["Muscat → Malé → Resort", "Fly to Malé; scenic seaplane flight to your luxury resort and pool villa.", "مسقط ← ماليه ← المنتجع", "الطيران إلى ماليه ثم رحلة خلابة بالطائرة المائية إلى المنتجع الفاخر والفيلا ذات المسبح."],
      ["Resort discovery", "Explore the island, restaurants and spa; snorkel the house reef.", "استكشاف المنتجع", "استكشاف الجزيرة والمطاعم والسبا، والغطس في الشعاب القريبة."],
      ["Ocean day", "Dolphin cruise or a guided snorkelling safari.", "يوم البحر", "رحلة لمشاهدة الدلافين أو جولة غطس بصحبة مرشد."],
      ["Wellness day", "Spa treatments, yoga and a private dinner.", "يوم العافية", "جلسات سبا، ويوغا، وعشاء خاص."],
      ["At leisure", "A day to simply enjoy your villa and the lagoon.", "يوم حر", "يوم للاستمتاع بالفيلا والبحيرة."],
      ["Resort → Malé → Muscat", "Seaplane back to Malé and flight home.", "المنتجع ← ماليه ← مسقط", "العودة بالطائرة المائية إلى ماليه والسفر إلى مسقط."]
    ]
  },

  /* ===================== SOUTH-EAST ASIA ===================== */
  {
    id: "thailand-bkk", cat: "sea", img: "bangkok",
    name: ["Thailand: Bangkok & Pattaya", "تايلاند: بانكوك وباتايا"],
    tag: ["Temples, shopping and the Gulf of Thailand", "معابد وتسوّق وخليج تايلاند"],
    dur: ["5 Nights / 6 Days", "5 ليالٍ / 6 أيام"],
    route: ["Bangkok · Pattaya", "بانكوك · باتايا"],
    hl: [["Grand Palace & Wat Arun", "القصر الكبير ومعبد وات أرون"], ["Chao Phraya river cruise", "رحلة نهرية في نهر تشاو فرايا"], ["Coral Island day trip", "رحلة إلى جزيرة المرجان"], ["Safari World", "سفاري ورلد"], ["Pratunam & ICONSIAM shopping", "التسوق في براتونام وأيكون سيام"]],
    inc: ["flights", "hotel", "breakfast", "transfers", "sightseeing"],
    notes: ["direct", "halal", "family", "visaFree"],
    days: [
      ["Muscat → Bangkok", "Direct flight to Bangkok (about 6 hours). Transfer to your hotel.", "مسقط ← بانكوك", "رحلة مباشرة إلى بانكوك (نحو 6 ساعات) والانتقال إلى الفندق."],
      ["Bangkok city", "Grand Palace, Wat Arun and an evening dinner cruise on the Chao Phraya.", "مدينة بانكوك", "القصر الكبير ومعبد وات أرون، ورحلة عشاء نهرية مساءً."],
      ["Safari World", "Full day at Safari World and Marine Park, great for families.", "سفاري ورلد", "يوم كامل في سفاري ورلد والحديقة البحرية، مثالي للعائلات."],
      ["Bangkok → Pattaya", "Drive to Pattaya; evening at the beachfront.", "بانكوك ← باتايا", "الانتقال إلى باتايا، وأمسية على الواجهة البحرية."],
      ["Coral Island", "Speedboat to Coral Island for swimming and beach time.", "جزيرة المرجان", "قارب سريع إلى جزيرة المرجان للسباحة والاستمتاع بالشاطئ."],
      ["Pattaya → Bangkok → Muscat", "Transfer to Bangkok airport for your flight home.", "باتايا ← بانكوك ← مسقط", "الانتقال إلى مطار بانكوك والعودة إلى مسقط."]
    ]
  },
  {
    id: "thailand-islands", cat: "sea", img: "phiphi",
    name: ["Thailand Islands: Phuket, Krabi & Phi Phi", "جزر تايلاند: بوكيت وكرابي وفي في"],
    tag: ["Limestone cliffs and emerald water", "منحدرات كلسية ومياه زمردية"],
    dur: ["6 Nights / 7 Days", "6 ليالٍ / 7 أيام"],
    route: ["Phuket · Phi Phi · Krabi", "بوكيت · في في · كرابي"],
    hl: [["Phi Phi & Maya Bay", "جزر في في وخليج مايا"], ["Phang Nga Bay & James Bond Island", "خليج فانغ نغا وجزيرة جيمس بوند"], ["Krabi Four Islands", "جزر كرابي الأربع"], ["Phuket Old Town", "مدينة بوكيت القديمة"], ["Big Buddha viewpoint", "مطل بيغ بوذا"]],
    inc: ["flights", "hotel", "breakfast", "transfers", "ferry", "sightseeing"],
    notes: ["halal", "family", "honeymoon", "visaFree"],
    days: [
      ["Muscat → Phuket", "Fly to Phuket (direct when available or via Bangkok). Check in at Patong or Kata.", "مسقط ← بوكيت", "الطيران إلى بوكيت (مباشر عند توفره أو عبر بانكوك)، والإقامة في باتونغ أو كاتا."],
      ["Phuket city tour", "Big Buddha, Karon viewpoint and Phuket Old Town.", "جولة بوكيت", "تمثال بيغ بوذا، مطل كارون، ومدينة بوكيت القديمة."],
      ["Phi Phi Islands", "Full-day speedboat trip to Phi Phi, Maya Bay and Pileh Lagoon.", "جزر في في", "رحلة يوم كامل بالقارب السريع إلى جزر في في وخليج مايا وبحيرة بيليه."],
      ["Phang Nga Bay", "Sea caves, James Bond Island and the floating Muslim village of Koh Panyee.", "خليج فانغ نغا", "الكهوف البحرية، جزيرة جيمس بوند، وقرية كوه بانيي العائمة المسلمة."],
      ["Phuket → Krabi", "Ferry or drive to Krabi; evening at Ao Nang.", "بوكيت ← كرابي", "الانتقال بالعبّارة أو السيارة إلى كرابي، وأمسية في آو نانغ."],
      ["Krabi Four Islands", "Longtail boat to Phra Nang, Chicken Island, Tup and Poda.", "جزر كرابي الأربع", "قارب تقليدي إلى فرا نانغ وجزيرة الدجاجة وتوب وبودا."],
      ["Krabi → Muscat", "Transfer to Krabi airport for your flight home (via Bangkok).", "كرابي ← مسقط", "الانتقال إلى مطار كرابي والعودة إلى مسقط (عبر بانكوك)."]
    ]
  },
  {
    id: "malaysia", cat: "sea", img: "kl",
    name: ["Malaysia: KL, Genting & Langkawi", "ماليزيا: كوالالمبور وجنتنج ولنكاوي"],
    tag: ["City lights, cool highlands and island calm", "أضواء المدينة ومرتفعات باردة وهدوء الجزر"],
    dur: ["6 Nights / 7 Days", "6 ليالٍ / 7 أيام"],
    route: ["Kuala Lumpur · Genting · Langkawi", "كوالالمبور · جنتنج · لنكاوي"],
    hl: [["Petronas Twin Towers", "برجا بتروناس"], ["Genting Highlands by cable car", "مرتفعات جنتنج بالتلفريك"], ["Batu Caves", "كهوف باتو"], ["Langkawi Sky Bridge", "جسر لنكاوي المعلّق"], ["Island hopping in Langkawi", "التنقل بين جزر لنكاوي"]],
    inc: ["flights", "hotel", "breakfast", "transfers", "sightseeing"],
    notes: ["direct", "halal", "family", "prayer", "visaFree"],
    days: [
      ["Muscat → Kuala Lumpur", "Direct flight to Kuala Lumpur (about 7 hours).", "مسقط ← كوالالمبور", "رحلة مباشرة إلى كوالالمبور (نحو 7 ساعات)."],
      ["KL city tour", "Petronas Towers, Federal Territory Mosque, Merdeka Square and Bukit Bintang.", "جولة كوالالمبور", "برجا بتروناس، ومسجد الإقليم الاتحادي، وساحة ميرديكا، وبوكيت بينتانغ."],
      ["Genting Highlands", "Batu Caves on the way, then the Awana SkyWay cable car to cool Genting.", "مرتفعات جنتنج", "كهوف باتو في الطريق، ثم تلفريك أوانا إلى أجواء جنتنج الباردة."],
      ["KL → Langkawi", "Short flight to Langkawi; evening at Pantai Cenang beach.", "كوالالمبور ← لنكاوي", "رحلة قصيرة إلى لنكاوي، وأمسية على شاطئ بانتاي تشينانغ."],
      ["Sky Bridge", "SkyCab cable car and the Sky Bridge, then Eagle Square.", "الجسر المعلّق", "تلفريك سكاي كاب والجسر المعلّق، ثم ساحة النسر."],
      ["Island hopping", "Boat trip to the Lake of the Pregnant Maiden and eagle feeding.", "التنقل بين الجزر", "رحلة بالقارب إلى بحيرة العذراء الحامل ومشاهدة إطعام النسور."],
      ["Langkawi → KL → Muscat", "Fly back via Kuala Lumpur.", "لنكاوي ← كوالالمبور ← مسقط", "العودة إلى مسقط عبر كوالالمبور."]
    ]
  },
  {
    id: "singapore", cat: "sea", img: "singapore",
    name: ["Singapore City Highlights", "أبرز معالم سنغافورة"],
    tag: ["Gardens, theme parks and a spotless skyline", "حدائق ومدن ملاهٍ وأفق مدينة لامع"],
    dur: ["4 Nights / 5 Days", "4 ليالٍ / 5 أيام"],
    route: ["Singapore · Sentosa", "سنغافورة · سنتوسا"],
    hl: [["Gardens by the Bay", "حدائق الخليج"], ["Universal Studios", "يونيفرسال ستوديوز"], ["Jewel Changi waterfall", "شلال جويل شانغي"], ["Night Safari", "سفاري الليل"], ["Marina Bay light show", "عرض الأضواء في مارينا باي"]],
    inc: ["flights", "hotel", "breakfast", "transfers", "tickets"],
    notes: ["halal", "family", "prayer"],
    days: [
      ["Muscat → Singapore", "Fly to Singapore. Visit Jewel Changi on arrival, then check in.", "مسقط ← سنغافورة", "الطيران إلى سنغافورة، وزيارة جويل شانغي عند الوصول، ثم الإقامة."],
      ["City & Gardens by the Bay", "City tour, Sultan Mosque in Kampong Glam, Gardens by the Bay and the evening light show.", "المدينة وحدائق الخليج", "جولة في المدينة، ومسجد السلطان في كامبونغ غلام، وحدائق الخليج وعرض الأضواء مساءً."],
      ["Sentosa", "Universal Studios or S.E.A. Aquarium on Sentosa Island.", "جزيرة سنتوسا", "يونيفرسال ستوديوز أو أكواريوم S.E.A في جزيرة سنتوسا."],
      ["Zoo & Night Safari", "Singapore Zoo by day and the Night Safari after dark.", "حديقة الحيوان وسفاري الليل", "حديقة حيوانات سنغافورة نهاراً وسفاري الليل مساءً."],
      ["Singapore → Muscat", "Transfer to Changi for your flight home.", "سنغافورة ← مسقط", "التوجه إلى مطار شانغي والعودة إلى مسقط."]
    ]
  },
  {
    id: "sg-my", cat: "sea", img: "petronas",
    name: ["Singapore + Malaysia Combo", "سنغافورة وماليزيا معاً"],
    tag: ["Two countries, one easy journey", "دولتان في رحلة واحدة ميسّرة"],
    dur: ["6 Nights / 7 Days", "6 ليالٍ / 7 أيام"],
    route: ["Singapore · Kuala Lumpur · Genting", "سنغافورة · كوالالمبور · جنتنج"],
    hl: [["Gardens by the Bay", "حدائق الخليج"], ["Sentosa Island", "جزيرة سنتوسا"], ["Petronas Towers", "برجا بتروناس"], ["Genting Highlands", "مرتفعات جنتنج"], ["Comfortable road or air link", "تنقل مريح براً أو جواً"]],
    inc: ["flights", "hotel", "breakfast", "transfers", "sightseeing"],
    notes: ["halal", "family", "prayer"],
    days: [
      ["Muscat → Singapore", "Fly to Singapore and check in.", "مسقط ← سنغافورة", "الطيران إلى سنغافورة والإقامة."],
      ["Singapore city", "City tour, Marina Bay and Gardens by the Bay.", "مدينة سنغافورة", "جولة في المدينة ومارينا باي وحدائق الخليج."],
      ["Sentosa", "A full day on Sentosa Island.", "سنتوسا", "يوم كامل في جزيرة سنتوسا."],
      ["Singapore → Kuala Lumpur", "Short flight or coach to KL; evening at Bukit Bintang.", "سنغافورة ← كوالالمبور", "رحلة قصيرة أو حافلة إلى كوالالمبور، وأمسية في بوكيت بينتانغ."],
      ["KL city tour", "Petronas Towers, Putrajaya and its pink mosque.", "جولة كوالالمبور", "برجا بتروناس، وبوتراجايا ومسجدها الوردي."],
      ["Genting Highlands", "Cable car to cool Genting and Batu Caves.", "مرتفعات جنتنج", "التلفريك إلى أجواء جنتنج الباردة وكهوف باتو."],
      ["KL → Muscat", "Direct flight home.", "كوالالمبور ← مسقط", "رحلة مباشرة إلى مسقط."]
    ]
  },
  {
    id: "bali", cat: "sea", img: "nusaPenida",
    name: ["Bali: Ubud & Nusa Penida", "بالي: أوبود ونوسا بينيدا"],
    tag: ["Rice terraces, temples and dramatic cliffs", "مدرجات أرز ومعابد ومنحدرات مذهلة"],
    dur: ["6 Nights / 7 Days", "6 ليالٍ / 7 أيام"],
    route: ["Ubud · Nusa Penida · Seminyak", "أوبود · نوسا بينيدا · سيمينياك"],
    hl: [["Tegallalang rice terraces", "مدرجات أرز تيغالالانغ"], ["Kelingking Beach, Nusa Penida", "شاطئ كيلينغكينغ في نوسا بينيدا"], ["Ulun Danu lake temple", "معبد أولون دانو على البحيرة"], ["Private pool villa in Ubud", "فيلا بمسبح خاص في أوبود"], ["Tanah Lot sunset", "الغروب في تانا لوت"]],
    inc: ["flights", "hotel", "breakfast", "car", "transfers", "ferry"],
    notes: ["halal", "honeymoon", "family"],
    days: [
      ["Muscat → Bali", "Fly to Denpasar (one stop via Kuala Lumpur or Singapore). Transfer to Ubud.", "مسقط ← بالي", "الطيران إلى دينباسار (توقف واحد عبر كوالالمبور أو سنغافورة) ثم الانتقال إلى أوبود."],
      ["Ubud", "Tegallalang rice terraces, Ubud Monkey Forest and the art market.", "أوبود", "مدرجات أرز تيغالالانغ، وغابة القرود، وسوق الفنون."],
      ["Lakes & temples", "Ulun Danu Beratan temple, Handara gate and Jatiluwih rice fields.", "البحيرات والمعابد", "معبد أولون دانو براتان، وبوابة هاندارا، وحقول أرز جاتيلويه."],
      ["Nusa Penida", "Fast boat to Nusa Penida: Kelingking Beach, Broken Beach and Angel’s Billabong.", "نوسا بينيدا", "قارب سريع إلى نوسا بينيدا: شاطئ كيلينغكينغ، والشاطئ المكسور، وبركة الملائكة."],
      ["Ubud → Seminyak", "Move to the coast; Tanah Lot temple at sunset.", "أوبود ← سيمينياك", "الانتقال إلى الساحل، ومعبد تانا لوت عند الغروب."],
      ["Beach day", "Free day at the beach, or an optional water-sports trip.", "يوم الشاطئ", "يوم حر على الشاطئ أو رحلة اختيارية للرياضات المائية."],
      ["Bali → Muscat", "Transfer to the airport for your flight home.", "بالي ← مسقط", "التوجه إلى المطار والعودة إلى مسقط."]
    ]
  },
  {
    id: "vietnam", cat: "sea", img: "halong",
    name: ["Vietnam: Hanoi to Hoi An", "فيتنام: من هانوي إلى هوي آن"],
    tag: ["Ha Long Bay cruise and lantern-lit old towns", "رحلة خليج ها لونغ ومدن قديمة تضيئها الفوانيس"],
    dur: ["7 Nights / 8 Days", "7 ليالٍ / 8 أيام"],
    route: ["Hanoi · Ha Long Bay · Da Nang · Hoi An", "هانوي · خليج ها لونغ · دا نانغ · هوي آن"],
    hl: [["Overnight cruise in Ha Long Bay", "ليلة على متن سفينة في خليج ها لونغ"], ["Hanoi Old Quarter", "الحي القديم في هانوي"], ["Ba Na Hills & Golden Bridge", "تلال با نا والجسر الذهبي"], ["Hoi An lantern town", "مدينة الفوانيس هوي آن"], ["My Khe beach, Da Nang", "شاطئ ماي خي في دا نانغ"]],
    inc: ["flights", "hotel", "breakfast", "transfers", "sightseeing", "guide"],
    notes: ["halal", "family", "honeymoon"],
    days: [
      ["Muscat → Hanoi", "Fly to Hanoi (one stop). Evening walk around Hoan Kiem Lake.", "مسقط ← هانوي", "الطيران إلى هانوي (توقف واحد)، وجولة مسائية حول بحيرة هوان كيم."],
      ["Hanoi", "Ho Chi Minh Mausoleum (outside), Temple of Literature and the Old Quarter.", "هانوي", "ضريح هو تشي منه (من الخارج)، ومعبد الأدب، والحي القديم."],
      ["Ha Long Bay cruise", "Drive to Ha Long and board an overnight cruise among limestone islands.", "رحلة خليج ها لونغ", "الانتقال إلى ها لونغ والصعود إلى سفينة للمبيت بين الجزر الكلسية."],
      ["Ha Long → Hanoi → Da Nang", "Morning on the bay, return to Hanoi and fly to Da Nang.", "ها لونغ ← هانوي ← دا نانغ", "صباح في الخليج، ثم العودة إلى هانوي والطيران إلى دا نانغ."],
      ["Ba Na Hills", "Cable car to Ba Na Hills and the famous Golden Bridge.", "تلال با نا", "التلفريك إلى تلال با نا والجسر الذهبي الشهير."],
      ["Hoi An", "Ancient town, Japanese Bridge and the lantern-lit river at night.", "هوي آن", "المدينة القديمة، والجسر الياباني، والنهر المضاء بالفوانيس ليلاً."],
      ["Da Nang beach", "Marble Mountains and a relaxed afternoon at My Khe beach.", "شاطئ دا نانغ", "جبال الرخام وفترة مسائية مريحة على شاطئ ماي خي."],
      ["Da Nang → Muscat", "Transfer to the airport for your flight home.", "دا نانغ ← مسقط", "التوجه إلى المطار والعودة إلى مسقط."]
    ]
  },
  {
    id: "srilanka", cat: "sea", img: "sriLanka",
    name: ["Sri Lanka: Hills & Coast", "سريلانكا: الجبال والساحل"],
    tag: ["Tea country, scenic trains and golden beaches", "بلاد الشاي والقطارات الخلابة والشواطئ الذهبية"],
    dur: ["6 Nights / 7 Days", "6 ليالٍ / 7 أيام"],
    route: ["Kandy · Nuwara Eliya · Bentota", "كاندي · نوارا إليا · بينتوتا"],
    hl: [["Pinnawala elephant orphanage", "دار رعاية الفيلة في بيناوالا"], ["Kandy Temple of the Tooth", "معبد السن في كاندي"], ["Tea estate & factory visit", "زيارة مزرعة ومصنع شاي"], ["Scenic hill-country train", "قطار المرتفعات الخلاب"], ["Bentota beach & river safari", "شاطئ بينتوتا وسفاري النهر"]],
    inc: ["flights", "hotel", "halfboard", "car", "transfers", "sightseeing"],
    notes: ["direct", "halal", "family", "prayer"],
    days: [
      ["Muscat → Colombo → Kandy", "Direct flight to Colombo (about 4 hours); Pinnawala on the way to Kandy.", "مسقط ← كولومبو ← كاندي", "رحلة مباشرة إلى كولومبو (نحو 4 ساعات)، وزيارة بيناوالا في الطريق إلى كاندي."],
      ["Kandy", "Temple of the Tooth, Kandy Lake and the Royal Botanical Gardens.", "كاندي", "معبد السن، وبحيرة كاندي، والحدائق النباتية الملكية."],
      ["Kandy → Nuwara Eliya", "Scenic train or drive through tea country; tea factory visit.", "كاندي ← نوارا إليا", "قطار خلاب أو طريق بين مزارع الشاي، مع زيارة مصنع شاي."],
      ["Nuwara Eliya", "Gregory Lake, waterfalls and the cool “Little England” town.", "نوارا إليا", "بحيرة غريغوري والشلالات ومدينة «إنجلترا الصغيرة» الباردة."],
      ["Nuwara Eliya → Bentota", "Drive to the south-west coast.", "نوارا إليا ← بينتوتا", "الانتقال إلى الساحل الجنوبي الغربي."],
      ["Bentota", "Madu River safari, turtle hatchery and beach time.", "بينتوتا", "سفاري نهر مادو، ومحمية السلاحف، ووقت على الشاطئ."],
      ["Bentota → Colombo → Muscat", "Colombo city stop, then your flight home.", "بينتوتا ← كولومبو ← مسقط", "جولة سريعة في كولومبو ثم العودة إلى مسقط."]
    ]
  },

  /* ===================== CENTRAL ASIA & CAUCASUS ===================== */
  {
    id: "georgia", cat: "caucasus", img: "kazbegi",
    name: ["Georgia: Tbilisi, Kazbegi & Signagi", "جورجيا: تبليسي وكازبيجي وسيغناغي"],
    tag: ["Caucasus peaks, old towns and green valleys", "قمم القوقاز ومدن عريقة ووديان خضراء"],
    dur: ["6 Nights / 7 Days", "6 ليالٍ / 7 أيام"],
    route: ["Tbilisi · Kazbegi · Gudauri · Signagi", "تبليسي · كازبيجي · غوداوري · سيغناغي"],
    hl: [["Gergeti Trinity Church, Kazbegi", "كنيسة غيرغيتي في كازبيجي"], ["Ananuri fortress & Zhinvali lake", "قلعة أنانوري وبحيرة جينفالي"], ["Gudauri viewpoint & cable car", "مطل غوداوري والتلفريك"], ["Signagi, the city of love", "سيغناغي مدينة الحب"], ["Old Tbilisi & cable car", "تبليسي القديمة والتلفريك"]],
    inc: ["flights", "hotel", "breakfast", "car", "transfers", "sightseeing"],
    notes: ["halal", "family", "prayer", "visaFree", "arabic"],
    days: [
      ["Muscat → Tbilisi", "Fly to Tbilisi (direct seasonal flights or via Dubai). Transfer to your hotel.", "مسقط ← تبليسي", "الطيران إلى تبليسي (رحلات مباشرة موسمية أو عبر دبي) والانتقال إلى الفندق."],
      ["Tbilisi", "Old Town, Narikala fortress by cable car, the sulphur baths area and the Bridge of Peace.", "تبليسي", "المدينة القديمة، وقلعة ناريكالا بالتلفريك، ومنطقة الحمامات الكبريتية، وجسر السلام."],
      ["Ananuri → Gudauri → Kazbegi", "Along the Georgian Military Road: Ananuri, Zhinvali lake and the Gudauri viewpoint.", "أنانوري ← غوداوري ← كازبيجي", "على الطريق العسكري الجورجي: أنانوري، وبحيرة جينفالي، ومطل غوداوري."],
      ["Kazbegi", "4x4 up to Gergeti Trinity Church below Mount Kazbek; Gveleti waterfall.", "كازبيجي", "سيارة دفع رباعي إلى كنيسة غيرغيتي أسفل جبل كازبيك، وشلال غفيليتي."],
      ["Gudauri → Tbilisi", "Gudauri cable car or snow activities (winter), then back to Tbilisi.", "غوداوري ← تبليسي", "تلفريك غوداوري أو أنشطة الثلج (شتاءً)، ثم العودة إلى تبليسي."],
      ["Signagi day trip", "The hilltop town of Signagi with views over the Alazani valley, and Bodbe.", "رحلة إلى سيغناغي", "مدينة سيغناغي على قمة التل بإطلالتها على وادي ألازاني، وبودبي."],
      ["Tbilisi → Muscat", "Transfer to the airport for your flight home.", "تبليسي ← مسقط", "التوجه إلى المطار والعودة إلى مسقط."]
    ]
  },
  {
    id: "kazakhstan", cat: "caucasus", img: "almaty",
    name: ["Kazakhstan: Almaty & Mountains", "كازاخستان: ألماتي والجبال"],
    tag: ["Alpine lakes, canyons and a garden city", "بحيرات جبلية وأخاديد ومدينة خضراء"],
    dur: ["5 Nights / 6 Days", "5 ليالٍ / 6 أيام"],
    route: ["Almaty · Shymbulak · Charyn Canyon · Big Almaty Lake", "ألماتي · شيمبولاك · أخدود شارين · بحيرة ألماتي الكبرى"],
    hl: [["Big Almaty Lake", "بحيرة ألماتي الكبرى"], ["Shymbulak cable car", "تلفريك شيمبولاك"], ["Charyn Canyon", "أخدود شارين"], ["Kolsai lakes (optional)", "بحيرات كولساي (اختياري)"], ["Kok-Tobe hill", "تلة كوك توبي"]],
    inc: ["flights", "hotel", "breakfast", "car", "transfers", "sightseeing"],
    notes: ["halal", "family", "prayer"],
    days: [
      ["Muscat → Almaty", "Fly to Almaty (one stop via Dubai or Doha).", "مسقط ← ألماتي", "الطيران إلى ألماتي (توقف واحد عبر دبي أو الدوحة)."],
      ["Almaty city", "Panfilov Park, Zenkov Cathedral, the Central Mosque and Kok-Tobe by cable car.", "مدينة ألماتي", "حديقة بانفيلوف، وكاتدرائية زينكوف، والمسجد المركزي، وتلة كوك توبي بالتلفريك."],
      ["Medeu & Shymbulak", "Medeu ice rink and the Shymbulak cable car to the mountain resort.", "ميديو وشيمبولاك", "حلبة ميديو وتلفريك شيمبولاك إلى المنتجع الجبلي."],
      ["Charyn Canyon", "Full-day trip to the “Valley of Castles” in Charyn Canyon.", "أخدود شارين", "رحلة يوم كامل إلى «وادي القلاع» في أخدود شارين."],
      ["Big Almaty Lake", "Turquoise mountain lake, then shopping at Mega Park or the Green Bazaar.", "بحيرة ألماتي الكبرى", "البحيرة الجبلية الفيروزية، ثم التسوق في ميغا بارك أو السوق الأخضر."],
      ["Almaty → Muscat", "Transfer to the airport for your flight home.", "ألماتي ← مسقط", "التوجه إلى المطار والعودة إلى مسقط."]
    ]
  },
  {
    id: "uzbekistan", cat: "caucasus", img: "samarkand",
    name: ["Uzbekistan: The Silk Road", "أوزبكستان: طريق الحرير"],
    tag: ["Blue domes and the heritage of Islamic scholarship", "قباب زرقاء وإرث الحضارة الإسلامية"],
    dur: ["6 Nights / 7 Days", "6 ليالٍ / 7 أيام"],
    route: ["Tashkent · Samarkand · Bukhara", "طشقند · سمرقند · بخارى"],
    hl: [["Registan Square, Samarkand", "ساحة ريجستان في سمرقند"], ["Shah-i-Zinda necropolis", "مجمع شاه زنده"], ["Imam al-Bukhari memorial complex", "مجمع الإمام البخاري"], ["Old Bukhara & Poi Kalyan", "بخارى القديمة ومجمع بوي كاليان"], ["High-speed Afrosiyob train", "قطار أفراسياب السريع"]],
    inc: ["flights", "hotel", "breakfast", "train", "guide", "transfers"],
    notes: ["halal", "family", "prayer", "arabic"],
    days: [
      ["Muscat → Tashkent", "Fly to Tashkent (one stop). Evening at leisure.", "مسقط ← طشقند", "الطيران إلى طشقند (توقف واحد)، وأمسية حرة."],
      ["Tashkent", "Hazrati Imam complex (home of the Uthman Quran manuscript), Chorsu Bazaar and the metro.", "طشقند", "مجمع حضرة إمام (حيث مصحف عثمان)، وسوق تشورسو، ومحطات المترو."],
      ["Tashkent → Samarkand", "Afrosiyob high-speed train to Samarkand; Registan Square at sunset.", "طشقند ← سمرقند", "قطار أفراسياب السريع إلى سمرقند، وساحة ريجستان عند الغروب."],
      ["Samarkand", "Shah-i-Zinda, Bibi-Khanym Mosque, Gur-e-Amir and the Imam al-Bukhari complex.", "سمرقند", "شاه زنده، ومسجد بيبي خانم، وضريح غور أمير، ومجمع الإمام البخاري."],
      ["Samarkand → Bukhara", "Train to Bukhara; Lyabi-Hauz in the evening.", "سمرقند ← بخارى", "القطار إلى بخارى، وأمسية في لبي حوض."],
      ["Bukhara", "Poi Kalyan, the Ark fortress, trading domes and Bahauddin Naqshband complex.", "بخارى", "مجمع بوي كاليان، وقلعة آرك، والقباب التجارية، ومجمع بهاء الدين نقشبند."],
      ["Bukhara → Muscat", "Fly home via Tashkent or Dubai.", "بخارى ← مسقط", "العودة إلى مسقط عبر طشقند أو دبي."]
    ]
  },
  {
    id: "azerbaijan", cat: "caucasus", img: "baku",
    name: ["Azerbaijan: Baku, Gabala & Shahdag", "أذربيجان: باكو وقبالة وشاهداغ"],
    tag: ["The Land of Fire and green mountains", "أرض النار والجبال الخضراء"],
    dur: ["6 Nights / 7 Days", "6 ليالٍ / 7 أيام"],
    route: ["Baku · Gabala · Shahdag", "باكو · قبالة · شاهداغ"],
    hl: [["Flame Towers & Baku Boulevard", "أبراج اللهب وكورنيش باكو"], ["Old City (Icherisheher)", "المدينة القديمة (إيتشري شهر)"], ["Gabala Tufandag cable car", "تلفريك توفانداغ في قبالة"], ["Shahdag mountain resort", "منتجع شاهداغ الجبلي"], ["Heydar Aliyev Center", "مركز حيدر علييف"]],
    inc: ["flights", "hotel", "breakfast", "car", "transfers", "sightseeing", "visa"],
    notes: ["halal", "family", "prayer", "arabic"],
    days: [
      ["Muscat → Baku", "Fly to Baku (direct seasonal or via Dubai). Evening on the Boulevard.", "مسقط ← باكو", "الطيران إلى باكو (مباشر موسمياً أو عبر دبي)، وأمسية على الكورنيش."],
      ["Baku", "Old City, Maiden Tower, Heydar Aliyev Center and Highland Park views.", "باكو", "المدينة القديمة، وبرج العذراء، ومركز حيدر علييف، وإطلالات حديقة المرتفعات."],
      ["Baku → Gabala", "Drive to Gabala via Shamakhi’s Juma Mosque; Nohur lake.", "باكو ← قبالة", "الانتقال إلى قبالة مروراً بمسجد الجمعة في شماخي، وبحيرة نوهور."],
      ["Gabala", "Tufandag cable car, Yeddi Gozel waterfall and the forests of Gabala.", "قبالة", "تلفريك توفانداغ، وشلال يدي غوزل، وغابات قبالة."],
      ["Gabala → Shahdag", "Drive to Shahdag mountain resort: cable car and seasonal snow activities.", "قبالة ← شاهداغ", "الانتقال إلى منتجع شاهداغ الجبلي: التلفريك وأنشطة الثلج الموسمية."],
      ["Shahdag → Baku", "Return to Baku; Gobustan or Yanar Dag (burning mountain) on the way.", "شاهداغ ← باكو", "العودة إلى باكو، مع زيارة قوبوستان أو يانار داغ (الجبل المشتعل)."],
      ["Baku → Muscat", "Transfer to the airport for your flight home.", "باكو ← مسقط", "التوجه إلى المطار والعودة إلى مسقط."]
    ]
  },

  /* ===================== EUROPE ===================== */
  {
    id: "switzerland", cat: "europe", img: "jungfrau",
    name: ["Switzerland: Lakes & the Alps", "سويسرا: البحيرات وجبال الألب"],
    tag: ["Scenic trains, lakes and the Top of Europe", "قطارات خلابة وبحيرات وقمة أوروبا"],
    dur: ["6 Nights / 7 Days", "6 ليالٍ / 7 أيام"],
    route: ["Zurich · Lucerne · Interlaken · Jungfraujoch", "زيورخ · لوسيرن · إنترلاكن · يونغفراويوخ"],
    hl: [["Jungfraujoch, Top of Europe", "يونغفراويوخ قمة أوروبا"], ["Mount Titlis rotating cable car", "تلفريك جبل تيتليس الدوّار"], ["Lake Lucerne cruise", "رحلة في بحيرة لوسيرن"], ["Rhine Falls", "شلالات الراين"], ["Swiss Travel Pass", "تذكرة التنقل السويسرية"]],
    inc: ["flights", "hotel", "breakfast", "train", "visa", "insurance"],
    notes: ["halal", "family", "prayer"],
    days: [
      ["Muscat → Zurich", "Fly to Zurich (direct seasonal or one stop). Train to Lucerne.", "مسقط ← زيورخ", "الطيران إلى زيورخ (مباشر موسمياً أو بتوقف واحد)، ثم القطار إلى لوسيرن."],
      ["Lucerne", "Chapel Bridge, Old Town and a cruise on Lake Lucerne.", "لوسيرن", "جسر الكنيسة، والمدينة القديمة، ورحلة في بحيرة لوسيرن."],
      ["Mount Titlis", "Day trip to Engelberg and Mount Titlis: glacier, cable car and cliff walk.", "جبل تيتليس", "رحلة إلى إنغلبرغ وجبل تيتليس: النهر الجليدي والتلفريك وممر الجرف."],
      ["Lucerne → Interlaken", "Golden Pass scenic train to Interlaken, between two lakes.", "لوسيرن ← إنترلاكن", "قطار الممر الذهبي الخلاب إلى إنترلاكن بين بحيرتين."],
      ["Jungfraujoch", "Cogwheel train to Jungfraujoch, the highest railway station in Europe.", "يونغفراويوخ", "القطار المسنّن إلى يونغفراويوخ، أعلى محطة قطار في أوروبا."],
      ["Interlaken → Zurich", "Train to Zurich via the Rhine Falls; Bahnhofstrasse shopping.", "إنترلاكن ← زيورخ", "القطار إلى زيورخ مروراً بشلالات الراين، والتسوق في شارع بانهوف."],
      ["Zurich → Muscat", "Transfer to the airport for your flight home.", "زيورخ ← مسقط", "التوجه إلى المطار والعودة إلى مسقط."]
    ]
  },
  {
    id: "paris-swiss", cat: "europe", img: "paris",
    name: ["Paris + Switzerland", "باريس وسويسرا"],
    tag: ["The City of Light and Alpine scenery", "مدينة الأنوار ومناظر جبال الألب"],
    dur: ["7 Nights / 8 Days", "7 ليالٍ / 8 أيام"],
    route: ["Paris · Interlaken · Lucerne · Zurich", "باريس · إنترلاكن · لوسيرن · زيورخ"],
    hl: [["Eiffel Tower & Seine cruise", "برج إيفل ورحلة نهر السين"], ["Disneyland Paris", "ديزني لاند باريس"], ["TGV train to Switzerland", "القطار السريع إلى سويسرا"], ["Jungfraujoch or Titlis", "يونغفراويوخ أو تيتليس"], ["Lake Lucerne", "بحيرة لوسيرن"]],
    inc: ["flights", "hotel", "breakfast", "train", "visa", "insurance", "transfers"],
    notes: ["direct", "halal", "family"],
    days: [
      ["Muscat → Paris", "Direct flight to Paris. Evening at leisure.", "مسقط ← باريس", "رحلة مباشرة إلى باريس، وأمسية حرة."],
      ["Paris city", "Eiffel Tower, Champs-Élysées, Arc de Triomphe and a Seine cruise.", "مدينة باريس", "برج إيفل، والشانزليزيه، وقوس النصر، ورحلة في نهر السين."],
      ["Disneyland Paris", "A full day at Disneyland (or the Louvre and Galeries Lafayette).", "ديزني لاند باريس", "يوم كامل في ديزني لاند (أو متحف اللوفر وغاليري لافاييت)."],
      ["Paris → Interlaken", "TGV train to Switzerland, connecting to Interlaken.", "باريس ← إنترلاكن", "القطار السريع إلى سويسرا ثم إلى إنترلاكن."],
      ["Jungfraujoch", "Cogwheel train to the Top of Europe.", "يونغفراويوخ", "القطار المسنّن إلى قمة أوروبا."],
      ["Interlaken → Lucerne", "Golden Pass line to Lucerne; Chapel Bridge and the lake.", "إنترلاكن ← لوسيرن", "خط الممر الذهبي إلى لوسيرن، وجسر الكنيسة والبحيرة."],
      ["Lucerne → Zurich", "Mount Titlis (optional), then on to Zurich.", "لوسيرن ← زيورخ", "جبل تيتليس (اختياري)، ثم الانتقال إلى زيورخ."],
      ["Zurich → Muscat", "Fly home.", "زيورخ ← مسقط", "العودة إلى مسقط."]
    ]
  },
  {
    id: "turkey", cat: "europe", img: "cappadocia",
    name: ["Turkey: Istanbul, Cappadocia & Bursa", "تركيا: إسطنبول وكابادوكيا وبورصة"],
    tag: ["Ottoman heritage and balloon-filled skies", "تراث عثماني وسماء مليئة بالمناطيد"],
    dur: ["7 Nights / 8 Days", "7 ليالٍ / 8 أيام"],
    route: ["Istanbul · Cappadocia · Bursa", "إسطنبول · كابادوكيا · بورصة"],
    hl: [["Blue Mosque & Hagia Sophia", "المسجد الأزرق وآيا صوفيا"], ["Bosphorus cruise", "رحلة في مضيق البوسفور"], ["Hot-air balloon at sunrise (optional)", "منطاد عند الشروق (اختياري)"], ["Cappadocia cave hotel", "فندق كهفي في كابادوكيا"], ["Uludağ cable car, Bursa", "تلفريك أولوداغ في بورصة"]],
    inc: ["flights", "hotel", "breakfast", "transfers", "sightseeing", "guide"],
    notes: ["direct", "halal", "family", "prayer", "arabic"],
    days: [
      ["Muscat → Istanbul", "Direct flight to Istanbul. Evening at Taksim and Istiklal Street.", "مسقط ← إسطنبول", "رحلة مباشرة إلى إسطنبول، وأمسية في تقسيم وشارع الاستقلال."],
      ["Old Istanbul", "Blue Mosque, Hagia Sophia, Topkapi Palace and the Grand Bazaar.", "إسطنبول القديمة", "المسجد الأزرق، وآيا صوفيا، وقصر طوب قابي، والبازار الكبير."],
      ["Bosphorus", "Bosphorus cruise, Eyüp Sultan Mosque and Pierre Loti hill.", "البوسفور", "رحلة في البوسفور، ومسجد أيوب سلطان، وتلة بيير لوتي."],
      ["Istanbul → Cappadocia", "Short flight to Kayseri or Nevşehir; check in to a cave hotel.", "إسطنبول ← كابادوكيا", "رحلة قصيرة إلى قيصري أو نوشهير، والإقامة في فندق كهفي."],
      ["Cappadocia", "Optional sunrise balloon flight; Göreme, Uçhisar and the underground city.", "كابادوكيا", "رحلة منطاد اختيارية عند الشروق، وغوريمي وأوتشيسار والمدينة تحت الأرض."],
      ["Cappadocia → Istanbul", "Fly back to Istanbul; free evening.", "كابادوكيا ← إسطنبول", "العودة جواً إلى إسطنبول، وأمسية حرة."],
      ["Bursa day trip", "Ferry and drive to Bursa: Grand Mosque, silk bazaar and Uludağ cable car.", "رحلة إلى بورصة", "عبّارة وطريق إلى بورصة: الجامع الكبير، وسوق الحرير، وتلفريك أولوداغ."],
      ["Istanbul → Muscat", "Direct flight home.", "إسطنبول ← مسقط", "رحلة مباشرة إلى مسقط."]
    ]
  },
  {
    id: "italy", cat: "europe", img: "venice",
    name: ["Italy: Rome, Florence & Venice", "إيطاليا: روما وفلورنسا والبندقية"],
    tag: ["Art, history and canals by gondola", "فن وتاريخ وقنوات بالجندول"],
    dur: ["7 Nights / 8 Days", "7 ليالٍ / 8 أيام"],
    route: ["Rome · Florence · Venice", "روما · فلورنسا · البندقية"],
    hl: [["Colosseum & Trevi Fountain", "الكولوسيوم ونافورة تريفي"], ["Vatican Museums", "متاحف الفاتيكان"], ["Florence & Pisa", "فلورنسا وبيزا"], ["Gondola ride in Venice", "جولة بالجندول في البندقية"], ["High-speed trains between cities", "قطارات سريعة بين المدن"]],
    inc: ["flights", "hotel", "breakfast", "train", "visa", "insurance", "transfers"],
    notes: ["halal", "family", "honeymoon"],
    days: [
      ["Muscat → Rome", "Fly to Rome (one stop). Evening walk to the Trevi Fountain.", "مسقط ← روما", "الطيران إلى روما (توقف واحد)، وجولة مسائية إلى نافورة تريفي."],
      ["Ancient Rome", "Colosseum, Roman Forum, Pantheon and Piazza Navona.", "روما القديمة", "الكولوسيوم، والمنتدى الروماني، والبانثيون، وساحة نافونا."],
      ["Vatican", "Vatican Museums and St Peter’s Square.", "الفاتيكان", "متاحف الفاتيكان وساحة القديس بطرس."],
      ["Rome → Florence", "High-speed train to Florence; Duomo and Ponte Vecchio.", "روما ← فلورنسا", "القطار السريع إلى فلورنسا، وكاتدرائية دومو وجسر بونتي فيكيو."],
      ["Pisa day trip", "Leaning Tower of Pisa, then Piazzale Michelangelo at sunset.", "رحلة إلى بيزا", "برج بيزا المائل، ثم ساحة مايكل أنجلو عند الغروب."],
      ["Florence → Venice", "Train to Venice; Grand Canal by vaporetto.", "فلورنسا ← البندقية", "القطار إلى البندقية، والقناة الكبرى بالحافلة المائية."],
      ["Venice", "St Mark’s Square, Rialto Bridge and a gondola ride.", "البندقية", "ساحة القديس مرقس، وجسر ريالتو، وجولة بالجندول."],
      ["Venice → Muscat", "Fly home (one stop).", "البندقية ← مسقط", "العودة إلى مسقط (توقف واحد)."]
    ]
  },

  /* ===================== DISCOVER OMAN ===================== */
  {
    id: "muscat-city", cat: "oman", img: "mosque",
    name: ["Muscat City & Muttrah Souq", "مسقط ومطرح وسوقها"],
    tag: ["Grand Mosque, the Corniche and frankincense-scented souqs", "الجامع الأكبر والكورنيش وأسواق بعبق اللبان"],
    dur: ["1 Night / 2 Days", "ليلة واحدة / يومان"],
    route: ["Muscat · Muttrah · Old Muscat", "مسقط · مطرح · مسقط القديمة"],
    hl: [["Sultan Qaboos Grand Mosque", "جامع السلطان قابوس الأكبر"], ["Muttrah Corniche & Souq", "كورنيش مطرح وسوقه"], ["Al Alam Palace (outside)", "قصر العلم (من الخارج)"], ["Royal Opera House Muscat", "دار الأوبرا السلطانية مسقط"], ["Dhow cruise at sunset", "رحلة بالقارب التقليدي عند الغروب"]],
    inc: ["hotel", "breakfast", "car", "sightseeing", "guide"],
    notes: ["family", "prayer", "arabic"],
    days: [
      ["Grand Mosque & Old Muscat", "Sultan Qaboos Grand Mosque in the morning (visiting hours apply), then Al Alam Palace, Al Jalali and Al Mirani forts (outside) and the National Museum.", "الجامع الأكبر ومسقط القديمة", "جامع السلطان قابوس الأكبر صباحاً (حسب مواعيد الزيارة)، ثم قصر العلم وقلعتا الجلالي والميراني (من الخارج) والمتحف الوطني."],
      ["Muttrah & sunset dhow", "Muttrah Fish Market, Corniche walk and souq shopping; sunset dhow cruise along the coast.", "مطرح ورحلة الغروب", "سوق السمك في مطرح، والمشي على الكورنيش والتسوق في السوق، ثم رحلة بالقارب التقليدي عند الغروب."]
    ]
  },
  {
    id: "wahiba", cat: "oman", img: "wahibaCamel",
    name: ["Wahiba Sands & Wadi Bani Khalid", "رمال الشرقية ووادي بني خالد"],
    tag: ["Emerald pools and a night under desert stars", "برك زمردية وليلة تحت نجوم الصحراء"],
    dur: ["1 Night / 2 Days", "ليلة واحدة / يومان"],
    route: ["Muscat · Wadi Bani Khalid · Wahiba Sands", "مسقط · وادي بني خالد · رمال الشرقية"],
    hl: [["Swim in Wadi Bani Khalid", "السباحة في وادي بني خالد"], ["Dune drive in a 4x4", "قيادة على الكثبان بسيارة دفع رباعي"], ["Sunset on the dunes", "الغروب على الكثبان"], ["Desert camp & Omani dinner", "مخيم صحراوي وعشاء عُماني"], ["Camel ride", "ركوب الجمال"]],
    inc: ["4x4", "camp", "sightseeing", "dayTrip"],
    notes: ["family", "prayer", "halal"],
    days: [
      ["Muscat → Wadi Bani Khalid → Wahiba", "Morning drive to Wadi Bani Khalid to swim in its turquoise pools. Afternoon dune drive, sunset on the sands and dinner at a desert camp.", "مسقط ← وادي بني خالد ← الرمال", "الانطلاق صباحاً إلى وادي بني خالد للسباحة في برَكه الفيروزية، ثم القيادة على الكثبان ومشاهدة الغروب والعشاء في مخيم صحراوي."],
      ["Desert sunrise → Muscat", "Sunrise over the dunes, camel ride and Omani breakfast, then return to Muscat via Ibra.", "شروق الصحراء ← مسقط", "شروق الشمس على الكثبان، وركوب الجمال، وإفطار عُماني، ثم العودة إلى مسقط عبر إبراء."]
    ]
  },
  {
    id: "jebel-akhdar", cat: "oman", img: "jebel",
    name: ["Jebel Akhdar & Nizwa Fort", "الجبل الأخضر وقلعة نزوى"],
    tag: ["Mountain villages, terraces and Oman’s heritage", "قرى جبلية ومدرجات وتراث عُمان"],
    dur: ["2 Nights / 3 Days", "ليلتان / 3 أيام"],
    route: ["Muscat · Nizwa · Jebel Akhdar · Birkat Al Mouz", "مسقط · نزوى · الجبل الأخضر · بركة الموز"],
    hl: [["Nizwa Fort & souq", "قلعة نزوى وسوقها"], ["Saiq Plateau viewpoints", "مطلات هضبة سيق"], ["Rose season terraces (Mar–Apr)", "مدرجات الورد (مارس–أبريل)"], ["Village walk at Wadi Bani Habib", "جولة في قرية وادي بني حبيب"], ["Mountain resort stay", "إقامة في منتجع جبلي"]],
    inc: ["hotel", "breakfast", "4x4", "sightseeing"],
    notes: ["family", "prayer", "halal"],
    days: [
      ["Muscat → Nizwa", "Drive to Nizwa (about 2 hours). Nizwa Fort, the souq and the old town.", "مسقط ← نزوى", "الانطلاق إلى نزوى (نحو ساعتين)، وزيارة قلعة نزوى والسوق والحارة القديمة."],
      ["Jebel Akhdar", "4x4 up the mountain (a 4x4 is required at the checkpoint), viewpoints, terraced villages and Wadi Bani Habib.", "الجبل الأخضر", "الصعود بسيارة دفع رباعي (إلزامية عند نقطة التفتيش)، والمطلات، والقرى ذات المدرجات، ووادي بني حبيب."],
      ["Birkat Al Mouz → Muscat", "Falaj Al Khatmeen and Birkat Al Mouz ruins on the way back to Muscat.", "بركة الموز ← مسقط", "فلج الخطمين وأطلال بركة الموز في طريق العودة إلى مسقط."]
    ]
  },
  {
    id: "salalah-khareef", cat: "oman", img: "salalah",
    name: ["Salalah Khareef Tour", "جولة خريف صلالة"],
    tag: ["Green mountains, mist and waterfalls in Dhofar", "جبال خضراء وضباب وشلالات في ظفار"],
    dur: ["3 Nights / 4 Days", "3 ليالٍ / 4 أيام"],
    route: ["Muscat · Salalah · Mughsail · Ayn Khor", "مسقط · صلالة · المغسيل · عين خور"],
    hl: [["Wadi Darbat & waterfalls", "وادي دربات والشلالات"], ["Mughsail blowholes", "نوافير المغسيل"], ["Anti-gravity point", "منطقة الجاذبية المعاكسة"], ["Al Baleed & frankincense museum", "البليد ومتحف أرض اللبان"], ["Coconut and banana farms", "مزارع جوز الهند والموز"]],
    inc: ["flights", "hotel", "breakfast", "car", "sightseeing", "transfers"],
    notes: ["season", "family", "prayer", "halal"],
    days: [
      ["Muscat → Salalah", "Fly Muscat to Salalah (about 1 hour 40 minutes). Evening at the coconut stalls and Al Haffa souq.", "مسقط ← صلالة", "الطيران من مسقط إلى صلالة (نحو ساعة و40 دقيقة)، وأمسية عند أكشاك جوز الهند وسوق الحافة."],
      ["East Salalah", "Wadi Darbat waterfalls, Taqah castle, Sumhuram and Mirbat.", "شرق صلالة", "شلالات وادي دربات، وقلعة طاقة، وسمهرم، ومرباط."],
      ["West Salalah", "Mughsail beach blowholes, the anti-gravity point and the Prophet Ayoub tomb.", "غرب صلالة", "نوافير شاطئ المغسيل، ومنطقة الجاذبية المعاكسة، وضريح النبي أيوب."],
      ["Salalah → Muscat", "Al Baleed Archaeological Park and Museum of the Frankincense Land, then fly home.", "صلالة ← مسقط", "متنزه البليد الأثري ومتحف أرض اللبان، ثم العودة إلى مسقط."]
    ]
  }
];

/* --------------------------------------------------------------------------
   GOOGLE REVIEWS — only real reviews, copied word for word from the
   business's Google profile. The slider stays hidden while "items" is empty.
   rating / count: the numbers shown on the Google profile (e.g. 4.9 and 37).
   Each review: { name, stars (1-5), date, text }   (text in its original language)
   Example:
   { name: "Ahmed Al Balushi", stars: 5, date: "October 2026", text: "Excellent service ..." },
   -------------------------------------------------------------------------- */
window.REVIEWS = {
  rating: null,
  count: null,
  items: [
  ]
};

/* --------------------------------------------------------------------------
   FAQ ["Question EN", "Answer EN", "Question AR", "Answer AR"]
   -------------------------------------------------------------------------- */
window.FAQ = [
  ["Where is your office?", "Our office is on Al Hosn Street in Quriyat, Muscat Governorate. You are welcome to visit, or we can arrange everything by phone and WhatsApp.",
   "أين يقع مكتبكم؟", "يقع مكتبنا في شارع الحصن بولاية قريات في محافظة مسقط. يسعدنا استقبالكم، ويمكننا أيضاً ترتيب كل شيء عبر الهاتف وواتساب."],
  ["How much do your packages cost?", "Prices depend on dates, hotels and the number of travellers, so we prepare a personal quote in Omani Rials (OMR). Send us your plan and we will reply quickly.",
   "كم تبلغ أسعار البرامج؟", "تعتمد الأسعار على المواعيد والفنادق وعدد المسافرين، لذلك نُعدّ لكم عرض سعر خاصاً بالريال العُماني. أرسلوا لنا خطتكم وسنرد بسرعة."],
  ["Can you change an itinerary for my family?", "Yes. Every package on this website is a sample. We adjust the length, hotels, pace and activities for children, elderly travellers and special needs.",
   "هل يمكن تعديل البرنامج ليناسب عائلتي؟", "نعم. جميع البرامج المعروضة نماذج، ونعدّل المدة والفنادق ووتيرة البرنامج والأنشطة بما يناسب الأطفال وكبار السن والاحتياجات الخاصة."],
  ["How does medical tourism to Kerala work?", "Send us the medical reports by WhatsApp or email. We share them with leading hospitals in Kochi, Kottakkal or Perinthalmanna, send you an estimated plan and cost from the hospital, and then arrange visa, flights, stay and an Arabic-speaking coordinator. Medical decisions are always made by the treating doctors.",
   "كيف تتم السياحة العلاجية إلى كيرلا؟", "أرسلوا لنا التقارير الطبية عبر واتساب أو البريد الإلكتروني، فنعرضها على مستشفيات رائدة في كوتشي أو كوتاكال أو بيرينتالمانا، ونرسل لكم خطة وتكلفة تقديرية من المستشفى، ثم نرتّب التأشيرة والطيران والسكن ومنسّقاً يتحدث العربية. والقرارات الطبية يتخذها دائماً الأطباء المعالِجون."],
  ["Can attendants travel with the patient?", "Yes. We help with Indian medical-attendant visas for family members and arrange accommodation for the whole family close to the hospital.",
   "هل يمكن للمرافقين السفر مع المريض؟", "نعم. نساعد في استخراج تأشيرة المرافق الطبي الهندية لأفراد العائلة، ونرتّب السكن للعائلة بالقرب من المستشفى."],
  ["Do you help with visas for residents of Oman?", "Yes. We assist Omani citizens and residents of all nationalities. Requirements depend on your passport and residency, so we check the latest rules for you.",
   "هل تساعدون المقيمين في عُمان في التأشيرات؟", "نعم. نساعد المواطنين العُمانيين والمقيمين من جميع الجنسيات. وتختلف المتطلبات حسب الجواز والإقامة، لذلك نتحقق لكم من أحدث الشروط."],
  ["Are halal food and prayer times considered?", "Always. We choose hotels and restaurants with halal options and plan days with time for prayer, especially for family and medical trips.",
   "هل تراعون الطعام الحلال وأوقات الصلاة؟", "دائماً. نختار فنادق ومطاعم توفر خيارات حلال، ونخطط الأيام بما يتيح وقتاً للصلاة، خصوصاً في الرحلات العائلية والعلاجية."],
  ["How do I book?", "Call or WhatsApp us on +968 9489 2023, send the enquiry form on this page, or visit our office in Quriyat. We confirm everything in writing before you pay.",
   "كيف أحجز؟", "اتصلوا بنا أو راسلونا عبر واتساب على الرقم ‎+968 9489 2023، أو أرسلوا نموذج الاستفسار في هذه الصفحة، أو زورونا في مكتبنا بقريات. ونؤكد كل التفاصيل كتابياً قبل الدفع."]
];
