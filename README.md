# Client_Project_Starter_Code
Starter code for the Fall 2026 & Winter 2027 Client Project

live site: https://tatyakoesandriani.github.io/client_project_f26/

## deliverable 3: tablet/desktop view
- designed for tablet (`min-width: 768px`), also works on desktop because content is capped with `max-width` and centered
- mobile first: mobile css is the default, tablet styles are added on top in one `min-width` media query (no `max-width` queries)
- layout uses grid (same as mobile, no switch to flex for layout)

### layout changes at 768px+
- nav: navy band, 4 columns in one row, current page in maize
- home: "guidance for every stage" and featured programs in 3 columns
- stage pages (before/during/after): 2 column cards, featured resources card spans full width with a 2 column list
- footer: logo on the left, text block on the right (wrapped in `.footer-text` so it centers vertically)
- header and main share the same max-width so edges line up

### changes to mobile (iterating on deliverable 2)
- cards are 1 column on mobile now, 2 columns were too narrow to read on phones
- program images use `aspect-ratio` + `object-fit: cover` so cards line up no matter the photo orientation
- program card image moved to the top with flex `order` (html order stays the same for screen readers)
- nav restyled so it doesn't look like the content cards

### new additions
- `404.html`: plain-language message, links to the 3 stage pages, contact email for broken links
- footer year updates with javascript (`js/script.js`)
- footer logo + envelope icon (icon is `aria-hidden`)
- newsletter link styled as a button (still an `<a>` because it goes to another page)

### unique element: program filter + animation
- filter chips on the home page sort programs by time commitment (short events, break trips, semester-long, abroad)
- uses data attributes, `addEventListener`, `classList`
- `aria-pressed` on the active chip, `aria-live` status ("showing 2 programs") for screen readers
- cards fade/slide in with `@keyframes` when shown, chips have color transitions
- all motion is turned off for "reduce motion" users with `prefers-reduced-motion`

### citations (also in code comments)
- filter: W3Schools "How To - Filter Elements" https://www.w3schools.com/howto/howto_js_filter_elements.asp (modified)
- footer year: codexworld
- envelope icon: Heroicons (MIT) https://heroicons.com
- reduced motion: Eric Bailey, CSS-Tricks https://css-tricks.com/revisiting-prefers-reduced-motion/
- home page copy: UMGPT, stage page copy: ELO content doc
- some css/js and 404 copy written with help from Claude (Anthropic)

## deliverable 2: mobile notes
- mobile styling for the 4 elo pages
- typography: playfair display for headings, montserrat for body text. brand: https://brand.umich.edu/
- colors: blue and maize
- active page uses `aria-current="page"`, skip link shows on tab
- wave warnings from mobile:
    - during.html: redundant link for "plan your next steps", kept on purpose because it gives users a next step at the end of the page
    - youtube video alert, needs a manual check that captions are synchronized

## todo
- [ ] delete duplicate images (uppercase / spaces in file names) and extra `style.css` + `html5reset.css` in the root
- [ ] resize heavy images (`umsi_talking.png`, `umsi_viewbookphd2026_09.jpg`, `mcommons-...webp`)
- [ ] same footer on every page, including 404 (year span on every page so the js doesn't error)
- [ ] fix "copywright" typo + extra space inside the email link
- [ ] 6 empty links in before.html, resource link in during.html table (check if still empty)
- [ ] w3c html + css validator, wave, axe on all 5 pages from the github.io link, screenshots for the writeup
- [ ] console check on every page, no errors
- [ ] keyboard test: tab through nav, chips, buttons, skip link
- [ ] check 768px and 1440px on the live site
