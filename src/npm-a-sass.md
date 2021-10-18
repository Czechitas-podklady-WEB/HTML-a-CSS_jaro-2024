---
layout: base
---

# Npm a SASS

## Opakování

- `npm init` nachystá složku pro práci s balíčky. Vytvoří soubor `package.json`.

- `npm install sass` přidá do projektu balíček `sass`.

  - Najdeme ho v `dependencies` uvnitř `package.json` a jeho soubory ve složce `node_modules`.

- Složku `node_modules` je zvykem necommitovat, protože je velká a její obsah se dá znovu vytvořit spuštěním `npm install`.

  - Pro ignorování složky přidáváme do projektu soubor `.gitignore` s řádkem `node_modules`.

- Pro sestavení/přeložení zdrojových souborů ze SASSu do CSS přidáváme do `package.json` v sekci `scripts` zkratku `"build": "sass zdroj.scss vystup.css"`. Po každé změně `zdroj.scss` pouštíme `npm run build`.

## Vývojový režim

Pokud děláme ve zdrojových souborech hodně změn za sebou, můžeme si ušetřit práci a napouštět `npm run build` ručně stále dokola. Balíček `sass` umí běžet i ve sledovacím režimu, kdy ho stačí jednou pustit a on udělá build s každou změnou.

Do `scripts` v `package.json` přidáme `dev` (development) zkratku s přepínačem `--watch`.

```json
	"scripts": {
		"build": "sass styly.scss styly.css",
		"dev": "sass --watch styly.scss styly.css"
	},
```

## Spojování

`@import`

## Úkol na teď

Postupuj podle zadání na [github.com/…/Cviceni-SASS-Bootstrap](https://github.com/Czechitas-podklady-WEB/Cviceni-SASS-Bootstrap).
