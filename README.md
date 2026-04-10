# RTL Markdown Editor + PDF Export

A fast, simple, browser-based **right-to-left (RTL) markdown editor** with real-time preview and **PDF export** — built for Persian (Farsi), Arabic, and Hebrew writers.

**[Live Demo](https://amirmhp98.github.io/rtlmd/)**

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Features

- Real-time RTL markdown preview (powered by Marked.js)
- **PDF download** — export your rendered markdown as a clean PDF with correct RTL layout
- Persian/Arabic font support (Droid Arabic Naskh + Open Sans)
- Code blocks rendered left-to-right (LTR) inside RTL documents
- Fully client-side — no backend, no signup, works offline
- Auto-saves your content in localStorage

## PDF Export

Click the **"Download PDF"** button to print/save your markdown as a PDF. Uses the browser's native print engine, which correctly handles:

- Right-to-left text direction
- Persian/Arabic character shaping and word spacing
- Bullet points on the right side
- LTR code blocks inside RTL content

> Tip: In the print dialog, select **"Save as PDF"** as the destination.

## Usage

1. Visit **[amirmhp98.github.io/rtlmd](https://amirmhp98.github.io/rtlmd/)**
2. Write your markdown in the left pane (RTL)
3. See the live preview in the right pane
4. Click **Download PDF** to export

## Running Locally

```bash
git clone https://github.com/amirmhp98/rtlmd.git
cd rtlmd
# Open index.html in your browser — no build step needed
open index.html
```

## Tech Stack

- **Marked.js** — Markdown to HTML rendering
- **jQuery** — DOM manipulation
- **Pure.css** — Lightweight responsive grid
- **Droid Arabic Naskh** — Arabic/Persian web font (Google Fonts)

## Forked From

[dariubs/rtlmd](https://github.com/dariubs/rtlmd) — original RTL markdown editor by [@dariubs](https://github.com/dariubs).

This fork adds PDF export functionality.

## License

[MIT](./license)
