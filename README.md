# HM Portfolio — Static Site

A fully static, GitHub-Pages-ready version of Hussein Mohamed's portfolio.
No Flask, Python, or any server-side dependency is required.

## Deploying to GitHub Pages

1. Create a new GitHub repository (or use an existing one).
2. Upload **all files in this folder** to the root of the repository
   (`index.html` must sit at the repo root — not inside a subfolder).
3. Commit and push to the `main` branch.
4. In the repo, go to **Settings → Pages**.
5. Under **Build and deployment → Source**, choose **Deploy from a branch**.
6. Set **Branch** to `main` and folder to `/(root)`, then Save.
7. Wait 1–2 minutes — your site will be live at
   `https://<your-username>.github.io/<repo-name>/`.

That's it — every path in this project is relative, so it works whether
the site is hosted at the domain root or in a subfolder (like the default
`username.github.io/repo-name/` GitHub Pages URL).

## Structure

```
index.html          Home page
project1.html        Payroll Dashboard detail page
project2.html        Marketing Dashboard detail page
project3.html        Finance Dashboard detail page
404.html             Custom "page not found" page
.nojekyll             Tells GitHub Pages to skip Jekyll processing
assets/
  css/style.css       All styles
  js/script.js         Main site behavior (nav, loader, counters, back-to-top…)
  js/particles-config.js  Animated particle background (performance-aware)
  js/music.js          Background music toggle
  images/              Photos & logo
  videos/              Project demo videos
  music/                Background music track
```

## What changed from the Flask version

- All `url_for(...)` / Jinja templating removed — replaced with plain relative paths.
- Flask routes (`/project1`, `/project2`, `/project3`) replaced with real static
  pages (`project1.html`, `project2.html`, `project3.html`).
- Duplicated HTML (two `<body>` tags, duplicate footers, duplicate About/Skills/
  Portfolio sections, duplicate `id="portfolio"`) cleaned up into one coherent page.
- Missing CSS for the particle background, loading screen, and scroll-reveal
  animations was added (`#particles-js`, `#loader`, `.hidden`/`.show` had no
  rules before, so those effects previously did nothing).
- Back-to-top button now actually scrolls smoothly to the top (it only showed/
  hid before — no click handler existed).
- Music button and Back-to-top button no longer overlap on screen.
- Added a mobile hamburger menu (the nav links were simply hidden on phones
  with no way to open them before).
- Added a lightweight animated gradient + reduced-particle-count on mobile so
  the background stays smooth without hurting performance.
- Empty/unused files from the Flask app (`admin.html`, `login.html`, `.env`,
  the unrouted `prooject.html` template) were left out of the static build.

## Notes

- The three project videos are ~15–26 MB each — all comfortably under
  GitHub's 100 MB per-file limit, so a normal `git push` works fine.
- All animations (typing effect, particles, tilt effect, counters, scroll
  reveal) gracefully no-op if their CDN library fails to load, so a network
  hiccup on the CDN never breaks the rest of the page.
