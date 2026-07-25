# lancejpollard.com

Personal site. A single static page, no build step, served from GitHub
Pages.

## Files

- `index.html` is the whole site. Markup and styles inline.
- `text/CrowMark.otf` is the brand typeface, copied from
  `deck/crow-mark/base/CrowMark-Regular.otf`.
- `view/lance.png` is the pen-and-ink portrait.
- `CNAME` points the Pages deployment at the apex domain.
- `.nojekyll` stops Pages from running the content through Jekyll.

## Design

Modeled on [clue.surf](https://clue.surf). Monochrome pen-and-ink, one
typeface everywhere, generous whitespace, dark mode via
`prefers-color-scheme`. Work first, biography last.

The design brief lives in the ClueSurf notes at
`note/tool/personal-website-design.md`.

## Deploy

Push to `make`, then point GitHub Pages at the branch root. There is
nothing to build.

## License

MIT

## ClueSurf

Part of the [ClueSurf](https://clue.surf) family of projects.
