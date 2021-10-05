---
layout: base
---

# Vyhodnocení domácího úkolu: Šachovnice

Podmínkou pro udělení certifikátu na konci kurzu je odevzdání všech povinných domácích úkolů.

## Hlavní cíle při volbě řešení

- Čitelný kód.

  - V kódu je jednoduché se vyznat a dál ho rozvíjet.

- Kvalita zobrazení.

  - Web odpovídá zadání a vypadá dobře na různých typech zařízení.

- Ušetření množství přenesených dat.

  - Uživatel nečeká dlouho na načtení stránky.

## Poměr stran

- `aspect-ratio`

  - Nepodporuje starší Safari.

- `padding-top`

  - Univerzální, ale hůře čitelné.

## Pozadí

### Možné přístupy

- Obrázek s celou šachovnicí.

  ![](static/screenshots/cele-pozadi-sachovnice.png)

  - Jednodušší stylování, ale návštěvník můsí čekat na zbytečně velký soubor, ve kterém se jednotlivá políčka opakují.

- Výřez ve vektorové grafice.

  ![](static/screenshots/vyrez-pozadi-sachovnice.png)

  - Přes internet projde méně dat. Obrázek se rychleji načte. Opakování zařídí CSS pomocí `background‑size`. Vektory se postarají o to, že mřížka šachovnice bude ostrá i na kvalitnější obrazovcé nebo při přiblížení.

- Kombinace gradientu a režimu prolnutí.

  - Kombinace `repeating‑linear‑gradient` a `mix‑blend‑mode`.

  - Ještě o trochu méně dat.

  - Větší flexibilita. Mřížku lze částečně přebarvovat.

  - Špatná čitelnost kódu.
