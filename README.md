[![News Image 21 November 2026 — make.fun bounty](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121)
[![News Image 21 November 2026 rank on make.fun](https://make.fun/badge/news-image-20261121/HeyRdzy/news-image-20261121/rank.svg)](https://make.fun/bounty/news-image-20261121)
[![News Image 21 November 2026 reward on make.fun](https://make.fun/badge/news-image-20261121/HeyRdzy/news-image-20261121/reward.svg)](https://make.fun/bounty/news-image-20261121)

# The World in One Day — Saturday, 21 November 2026

One image summing up the world's news of Saturday 21 November 2026,
drawn as a newspaper front page.

## The day's stories

- **Wall Street in freefall** — the S&P 500 sinks 3.7% to 6,910,
  into correction; the Nasdaq falls 5.3%, erasing its 2026 gains,
  its worst week since 2020. Nvidia drops 14% on reports of an
  SEC accounting probe.
- **Missiles land in Poland** — two Russian missiles and a drone
  come down on NATO soil; Tusk calls it a provocation and NATO
  chief Rutte flies to Warsaw.
- **UK–EU seal a reset deal** — food, carbon and youth mobility
  pacts signed in Brussels, worth up to £5.1bn a year.
- **Gaza strikes kill six** — Israeli strikes hit central Gaza
  despite the ceasefire; Hamas calls it a violation.
- Also today: Cyclone Akvan weakens after its Odisha landfall,
  France seeks a UN Security Council meeting on Poland, and the
  EU approves €1bn in military aid for Ukraine.

Every headline was checked against a primary source (AP, Reuters,
AFP, Dow Jones/MarketWatch, the India Meteorological Department)
before it went into the picture.

## How it runs

`main.ts` copies `entry.png` to the output directory
(`MAKEFUN_OUTPUT_DIR`, default `/output`). It clears only the
contents of that directory, never the directory itself, so the run
stays safe on a mounted output volume.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`entry.png` is a PNG (1024×1024, about 125 KiB), named `entry.png`
as the competition requires. Running the program twice writes the
same bytes both times.
