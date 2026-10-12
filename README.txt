PIXELCRAFT STUDIO — PHONE-ONLY SETUP
====================================

FILES
- index.html      Home page
- services.html   Services and sample packages
- about.html      About and contact form
- styles.css      Responsive colourful design
- script.js       Mobile menu, current year and WhatsApp link

BEFORE PUBLISHING — IMPORTANT PLACEHOLDERS
1) Open script.js and replace:
   const whatsappNumber = "91YOURNUMBER";
   with your WhatsApp number including India's country code, digits only.
   Example format: 919876543210
   Do not use the example number; use your own.

2) Open about.html and find:
   https://formsubmit.co/YOUR_EMAIL@example.com
   Replace YOUR_EMAIL@example.com with the email address where you want enquiries delivered.
   Example format: https://formsubmit.co/you@example.com

3) FormSubmit is a third-party form relay. On first use, it may send an activation email to the address you configured. Open that email and confirm/activate the form. Test a submission after activation. The form is NOT guaranteed to work until configured and tested. Check FormSubmit's current terms/privacy details before using it for client data.

4) If you do not want to configure a third-party form yet, remove the form or label it as a demo. The WhatsApp button can still work once configured.

HOW TO EDIT ON ANDROID
A) Install/use a plain-text code editor that saves .html, .css and .js files, or use GitHub's web editor in Chrome.
B) Keep all five files in the same folder.
C) Make sure the filenames are exactly as shown (not index.html.txt).
D) Open index.html in a browser/editor preview if supported.
E) Test on a narrow phone screen and landscape/wider view.

FREE DEPLOYMENT OPTION: CLOUDFLARE PAGES DIRECT UPLOAD
1) Extract this ZIP so you have the five files in one folder.
2) In Chrome, sign in/create a Cloudflare account and open:
   https://dash.cloudflare.com/
3) Go to Workers & Pages (or Workers & Pages under Compute).
4) Choose Create application / Create project, then Pages and Direct Upload / Upload assets. Labels can change.
5) Name the project, e.g. pixelcraft-studio-demo (if available).
6) Upload the ZIP containing the site files, or select the extracted folder if the dashboard supports it.
7) Deploy and open the generated *.pages.dev URL.
8) Test all three pages, links and form from another browser/device if possible.

Cloudflare's direct-upload guide:
https://developers.cloudflare.com/pages/get-started/direct-upload/

Alternative: GitHub Pages can publish static files from a public repository:
https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

IMPORTANT LIMITATIONS
- This is a static website. The form needs a third-party relay (configured above) or a backend to actually deliver messages.
- Do not publish private information, real customer data, secrets or API keys in public files.
- Package prices are demo placeholders; change them before showing the site as an offer.
- Replace the student-led demo wording with your truthful introduction, but do not claim fake client work or testimonials.
- Hosting is free on eligible plans, subject to the provider's current terms and limits. A custom domain is optional and usually costs extra.
