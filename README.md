# Al Fath Travel & Tourism — website

Bilingual (English / العربية) website for **Al Fath Travel & Tourism (الفتح للسفر والسياحة)**, Al Hosn Street, Quriyat, Muscat.
Plain HTML, CSS and JavaScript. No build step, so it can be hosted free on GitHub Pages.

## Files

| File | What it holds |
|---|---|
| `index.html` | Page structure, SEO tags, structured data (JSON-LD) |
| `style.css` | All design (colours at the top in `:root`) |
| `script.js` | Language switch, slideshow, pop-ups, forms, WhatsApp links |
| `data.js` | **Business content:** contact details, packages, services, medical programmes, FAQ, photos |
| `i18n.js` | **All interface text** in English and Arabic |
| `assets/img/` | Logo (colour and white), icons, share image (`og-image.jpg`) |
| `robots.txt`, `sitemap.xml`, `site.webmanifest`, `CNAME`, `404.html`, `favicon.ico` | Hosting and SEO files |

## Common edits

**Contact details.** Open `data.js` and edit `window.SITE`: phone, WhatsApp number (digits only, e.g. `96894892023`), email, Instagram, Facebook, address, opening hours, founding year, Google Maps links.
To add a second phone number, add a line to `phones: [...]`.

**Opening hours.** These are not shown until you fill `hours`, e.g.
`hours: ["Sat–Thu: 9 am – 1 pm, 4 pm – 9 pm", "السبت–الخميس: 9 ص – 1 م، 4 م – 9 م"]`.
Also add them to the JSON-LD in `index.html` (`"openingHours": "Sa-Th 09:00-13:00, 16:00-21:00"`).

**Founding year.** Set `founded: 2018` (for example). The About section then shows "Since 2018".

**Office photo.** Put the photo in `assets/img/office.jpg` and set `officePhoto: "assets/img/office.jpg"`.

**Packages.** In `data.js`, find `window.PACKAGES`. Every text is a pair `["English", "Arabic"]`.
Each day of the itinerary is `["Title EN", "Text EN", "Title AR", "Text AR"]`.
- `cat` chooses the tab: `india`, `maldives`, `sea`, `caucasus`, `europe`, `oman`.
- `img` is a key from `window.IMG` (a free Unsplash photo id). To use your own photo, add e.g. `myPhoto: "photo-…"` from an Unsplash URL.
- `inc` and `notes` use short keys whose text is in `i18n.js` (`inc.flights`, `note.halal`, …).
- **Prices:** none are shown ("Price on request"). To show one, add `price: ["From 450 OMR", "ابتداءً من 450 ر.ع"]`.
- Keep 4 or 8 packages per tab so rows are full on desktop.

**Interface text.** All buttons, headings and labels are in `i18n.js`, English block first, Arabic block second.

**Google reviews.** The site only shows a "Write a Google review" button, because no real reviews were supplied. Do **not** invent reviews. Replace `reviewUrl` in `data.js` with the "Ask for reviews" link from your Google Business Profile.

## Enquiry forms (FormSubmit)

Both forms (general enquiry and medical enquiry) send directly to the email in `SITE.email` (`info@alfathtravels.com`) using [FormSubmit](https://formsubmit.co). No account or server is needed.

1. **Activation (one time only):** after the site is live, send one test enquiry. FormSubmit sends an **"Activate Form"** email to `info@alfathtravels.com`. Open it and click **Activate**. Until you do, no enquiries are delivered. Check the spam folder if it does not arrive.
2. After activation, every enquiry arrives as an email with the subject *"New website enquiry: <service> (<name>)"*.
3. If sending fails, the visitor sees buttons to email you or send the same details by WhatsApp instead.
4. Medical reports: if the patient attaches a file, the form is posted normally (FormSubmit's AJAX mode does not accept attachments) and the visitor returns to the site with a thank-you message. Patients can also tick "I will send reports on WhatsApp".
5. Optional: after activation FormSubmit emails you a random alias (e.g. `https://formsubmit.co/abc123…`). You can put that alias in `script.js` instead of the email address to hide the email from spammers.

## Go live on GitHub Pages

1. Create a **new GitHub repository** just for this site, e.g. `alfath-travels`.
2. Upload all the files in this folder to the repository root, keeping the folder structure. Do not upload the screenshots.
3. In the repository: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` / `(root)` → Save.**
4. The `CNAME` file already contains `alfathtravels.com`. In **Settings → Pages → Custom domain**, enter `alfathtravels.com` and save.
5. At your domain provider (where alfathtravels.com was bought), add these DNS records:

   | Type | Name / Host | Value |
   |---|---|---|
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | CNAME | `www` | `<your-github-username>.github.io` |

   Delete any other `A` record for `@` (for example a "parking" page) so only these four remain.
   ⚠️ **Do not touch the MX or TXT records.** They run the `info@alfathtravels.com` email. Changing them will stop your email.
6. DNS can take from a few minutes to 24 hours. When GitHub shows the domain is verified and the certificate is ready, tick **"Enforce HTTPS"** in Settings → Pages.

## After launch

1. **Google Search Console** (search.google.com/search-console): add `alfathtravels.com` as a Domain property, verify it with the TXT record Google gives you (adding a TXT record is safe, just don't edit the existing email ones), then **Sitemaps → submit `sitemap.xml`**.
2. **URL Inspection →** paste `https://alfathtravels.com/` → **Request indexing**. Repeat for `https://alfathtravels.com/?lang=ar`.
3. Add the website link to the **Google Business Profile**, the **Instagram bio** (@alfath_travels) and the **WhatsApp Business** profile.
4. Send one test enquiry and click the FormSubmit activation email (see above).

## Photos

All destination photos are free to use under the [Unsplash License](https://unsplash.com/license) and load from `images.unsplash.com` with sized URLs (`w=`). Each photo id is listed in `window.IMG` in `data.js`.
