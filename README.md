# PoliTost books

The free smartbooks that the [PoliTost reader](https://politost.it/reader) opens. Each book is a folder of Markdown chapters. When a pull request merges, CI packs every book into a `.ptsb` file and publishes it to [books.politost.it](https://books.politost.it), and the reader picks it up without a deploy of its own.

[![checks](https://img.shields.io/github/actions/workflow/status/SuperTost100/politost-books/check.yml?branch=main&label=checks)](https://github.com/SuperTost100/politost-books/actions/workflows/check.yml)
[![Content: CC BY-SA 4.0](https://img.shields.io/badge/content-CC%20BY--SA%204.0-0f6e66)](LICENSE-CONTENT)
[![Code: MIT](https://img.shields.io/badge/code-MIT-0f6e66)](LICENSE)

## How it works

Anyone with a GitHub account can add a book or fix one through a pull request. Readers need no account: the reader downloads a book when someone opens it and keeps a copy in the browser.

1. **You write.** A book lives in `books/<id>/`: `smartbook.json`, one Markdown file per chapter, and optional exercises, exams, lab snippets, graphs and images. The format is in the [content spec](https://github.com/SuperTost100/politost-content/blob/main/spec/content-format.md).
2. **CI checks.** `npm run check` runs the same validation the reader runs on import, so a book that passes here opens there. A pull request that changes a book must also raise its `version`.
3. **CI packs a preview.** Each pull request uploads the packed `.ptsb` of the books it changes as a workflow artifact. Reviewers import it into the reader with the upload button.
4. **Merge publishes.** Cloudflare Pages builds `main` and serves `catalog.json`, the packages and a plain index page at `books.politost.it`.
5. **Search engines read the HTML.** The build also renders every chapter, the formulario, the exercises and the exams as plain HTML. The reader's Worker puts that HTML into the page it sends for `politost.it/reader/libro/<id>/...`, so Google, Bing and AI crawlers, which don't run the reader's JavaScript, read the book at its own URL.

There is no server and no database. The books site is static files, and the reader runs in the browser.

## Write or fix a book

[CONTRIBUTING.md](CONTRIBUTING.md) walks through the folder layout, the checks and how to preview a book in the reader before you open the pull request.

## Development

You need Node.js 22 or newer.

```bash
git clone https://github.com/SuperTost100/politost-books.git
cd politost-books
npm ci
npm test         # tests for the scripts
npm run check    # validate every book
npm run build    # pack every book into dist/
```

`npm run build` writes:

```text
dist/
├── catalog.json                  # what the reader fetches
├── books/esempio@1.0.0.ptsb      # one package per book, named id@version
├── covers/                       # only for books with a cover.svg
├── pages/esempio@1.0.0/          # the book as HTML for the reader's Worker
│   ├── meta.json                 # title and description of every page
│   ├── capitolo/<chapter>.html   # plus <chapter>.md for agents that ask for Markdown
│   ├── formulario.html, esercizi.html, esami.html
│   └── assets/                   # the book's images
├── index.html                    # the list at books.politost.it
└── _headers                      # CORS and caching for Cloudflare Pages
```

Both scripts take `--base <ref>`. `check` then also enforces the version bump against that ref, and `--only-changed` limits either script to books changed since it.

Packages and pages are cached for a year under their `id@version` name, and `catalog.json` pins the sha256 of each package. `build` sets the package timestamp to the last commit that touched the book, so building the same commit twice gives identical files.

## Deployment

Cloudflare Pages project `politost-books`, connected to this repository. Pushes to `main` build with `npm run build` and publish `dist/`, served at `books.politost.it`. GitHub Actions runs the checks on every pull request. Publishing needs no Cloudflare token in GitHub.

Every file on `books.politost.it` is sent with `X-Robots-Tag: noindex`. The books are indexed at `politost.it/reader`, so this host shouldn't compete with it in search results.

## License

Books are [CC BY-SA 4.0](LICENSE-CONTENT) unless a book's own folder says otherwise. The scripts are [MIT](LICENSE).
