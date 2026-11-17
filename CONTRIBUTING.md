# Contributing a book

Thanks for writing for PoliTost. This guide covers a new book, a new chapter and a fix to an existing book. They follow the same path (edit the folder, run the check, preview in the reader, open a pull request), except for a book written with the PoliTost Smart Builder, whose content is fixed in the builder: see [Books from the builder](#books-from-the-builder).

## What you need

- A GitHub account.
- Node.js 22 or newer, to run the check and pack the book on your machine.
- The right to publish what you write. Books here are CC BY-SA 4.0, so anyone can share and adapt them with credit. Don't paste textbook pages, lecture slides or exam texts you don't own.

## A book's folder

```text
books/analisi-1/
├── smartbook.json        # metadata and chapter list
├── chapters/
│   ├── 01-limiti.md
│   └── 02-derivate.md
├── esercizi.md           # optional: exercises
├── esami.md              # optional: past-exam practice
├── ide.json              # optional: Python lab snippets
├── grafici.json          # optional: interactive graphs
├── cover.svg             # optional: listed in catalog.json
└── assets/               # optional: images used by the chapters
```

The [content spec](https://github.com/SuperTost100/politost-content/blob/main/spec/content-format.md) defines every file. `books/esempio/` uses all of them and is the quickest way to see the syntax in practice.

Rules this repo adds on top of the spec:

- **`id` equals the folder name.** Lowercase letters, digits and hyphens.
- **`version` is required** and follows semver, e.g. `1.0.0`.
- **Raise `version` whenever you change a book.** A typo fix is a patch (`1.0.0` to `1.0.1`), a new chapter is a minor (`1.1.0`). Readers keep the version they downloaded until the catalog lists a higher one, so an unchanged version means nobody sees your fix.
- **Public books only.** Leave `access` out or set it to `public`.
- **`authors`** lists the people to credit, in display order.
- **Size limits.** The packed book must stay under 50 MB, with no file over 5 MB and at most 200 files. The reader refuses anything bigger.

## Check and preview

```bash
npm ci
npm run check
npm run builder-sync
npm run build
```

`npm run check` prints `ok  <id>@<version>` for each valid book, or the errors with the file they come from. `npm run build` writes `dist/books/<id>@<version>.ptsb`.

To see the book as readers will:

1. Open [politost.it/reader](https://politost.it/reader).
2. Under "Hai un libro digitale?", import the `.ptsb` from `dist/books/`.
3. Read the pages you changed. An imported book replaces the published one with the same `id` on that browser.
4. When you're done, use "Rimuovi da questo dispositivo" on the book's card to go back to the published version.

The import stays in your browser. Nothing is uploaded.

## Open the pull request

1. Fork the repository and create a branch.
2. Commit your changes. Keep one book per pull request.
3. Open the pull request and fill in the checklist.

CI runs the same check, shows any error as an annotation on the book's `smartbook.json` in the diff, and attaches the packed `.ptsb` as the `preview-packages` artifact, so reviewers can import it too. Once it's merged, the book is live within a few minutes.

## Books from the builder

Analisi Matematica 1, Analisi Matematica 2, Chimica di base and Fisica 1 are written with the [PoliTost Smart Builder](https://github.com/SuperTost100/politost-smartbook-builder), which publishes them here with `npm run publish-book`. A book published this way has a `.builder.json` in its folder with the sha256 of every file. The builder writes the whole folder at each publish, so a fix made only here would be undone by the next one.

Content fixes to these books therefore go through the builder:

1. Make the fix in the book's folder of a politost-books checkout, as for any book.
2. In politost-smartbook-builder, run the back-port dry run: `npm run backport -- --project <project id> --from <books checkout>/books/<book> --dry-run`. It lists the section, exercise, graph or caption each change maps to.
3. Run it again without `--dry-run` to write the fix into the builder.
4. Publish the book again with `npm run publish-book -- --project <project id> --books <books checkout>`, and open the pull request with what it wrote.

The `builder-sync` step of CI fails a pull request that changes a file of a book with a `.builder.json` so that it no longer matches, or that changes one of these books while it has no `.builder.json` yet (its `ptsb.json` names the builder as producer). Books written by hand, such as `books/esempio`, are not affected, and changing `cover.svg` alone is fine, because the cover belongs to this repository.

## Fixing someone else's book

Open an issue or a pull request. For anything beyond a typo, say what's wrong and cite a source, so the book's authors can check it. A pull request on a book from the builder fails the `builder-sync` check: a maintainer back-ports it into the builder and publishes the book again.
