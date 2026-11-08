# Words by Dr. Vaishnavi Kathavate

Personal website for the writing of Dr. Vaishnavi Kathavate: stories and poems,
and blogs and articles on traditional medicine and medicine in general.

**Live site:** [add link once published]

## Structure

```
index.html      Home page
stories.html    List of stories
poems.html      List of poems
medicine.html   List of medical blogs and articles (Traditional Medicine / Medicine & Health)
about.html      About the author
404.html        "Page not found" page
style.css       All styling (colours are at the top)
stories/        One HTML file per story
poems/          One HTML file per poem
medicine/       One HTML file per medical article or blog post
```

## Adding a new piece

1. Copy an existing file in `stories/`, `poems/` or `medicine/` and rename it (lowercase, dashes, no spaces).
2. Update the title, date and text. For medical pieces, also set the section
   (Traditional Medicine or Medicine & Health) and type (Article or Blog) in the line under the title.
3. Add a card for it on `stories.html`, `poems.html` or `medicine.html` (in the right section),
   and under "Latest writing" on `index.html`. Each page has a comment showing which block to copy.

## Design notes

- Stories and poems use a terracotta accent; medical writing uses sage green. Colours are at the top of `style.css`.
- The site switches to a dark theme automatically when the reader's device is in dark mode.
- To add a photo, put it in an `images/` folder and follow the comment next to the "VK" circle on `index.html` and `about.html`.

## Copyright

© 2026 Dr. Vaishnavi Kathavate. All rights reserved. See [LICENSE](LICENSE).
