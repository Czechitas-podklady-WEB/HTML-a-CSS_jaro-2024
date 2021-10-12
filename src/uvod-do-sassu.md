---
layout: base
---

# Úvod do SASSu

SASS je obohacené CSS. Jedná se o takzvaný preprocesor. Kód napsaný v SASSu je potřeba nejdříve převést do CSS, aby kódu rozuměly i prohlížeče. Oficiální dokumentace je [sass-lang.com](https://sass-lang.com/).

## Ukázka

Velkou výhodou jazyka SASS je podpora zanořování. Ušetří opakování kódu. To, co bychom v CSS napsali třeba takto:

### `styly.css`

```css
.tlacitko {
	color: blue;
}
.tlacitko--vystrazne {
	color: red;
}
```

by v SASSu bylo takto:

### `styly.scss`

```scss
.tlacitko {
	color: blue;

	&--vystrazne {
		color: red;
	}
}
```

Všimni si, že jsme ušetřili jeden výskyt slova `tlacitko`, a zároveň se vše ohledně tlačítka zabalilo do jednoho bloku. Kód je tak přehlednější a do budoucna udržitelnější. Například přejmenovat `tlacitko` na anglické `button` je teď změna jen jednoho řádku.

## Převod na CSS

Protože prohlížeče SASSu nerozumí, je potřeba náš kód `sestavit`, převést. K tomu nám pomůže balíček [sass](https://www.npmjs.com/package/sass), který do projektu doinstalujeme spuštěním příkazu `npm install sass`. (Pro rychlé experimenty se také může hodit online nástroj [sassmeister.com](https://www.sassmeister.com/).)

Protože příkaz budeme pouštět často, bude se nám hodit v `package.json` zkratka:

```json
	"scripts": {
		"build": "sass styly.scss styly.css"
	},
```

Zkratku pustím přes `npm run build`. Odstartuje se převod, který vezme soubor `styly.scss` a výsledek uloží do `styly.css`. V HTML se pak odkazuje na výsledný soubor přes `<link rel="stylesheet" href="styly.css">`.

## Přípony `.scss` a `.sass`

SASS podporuje dva formáty, které rozlišuje podle přípony souboru. Oba jsou si velmi podobné, v souborech končících na `.sass` ale nepíšeme složené závorky a středníky. Druhý formát je úspornější, ale méně se podobá CSS a pro ně někoho je tak méně čitelný.

### `styly.scss`

```scss
.tlacitko {
	color: blue;

	&--vystrazne {
		color: red;
	}
}
```

### `styly.sass`

```sass
.tlacitko
	color: blue

	&--vystrazne
		color: red
```

## Proměnné a funkce

Pojmenováváme je se znakem dolaru na začátku. Můžeme do nich uložit například barvu, velikost nebo jiné hodnoty.

```scss
$hlavni-barva: magenta;

.tlacitko {
	color: $hlavni-barva;
}
```

Hlavní výhoda proměnných je podobná jako u custom properties. Často opakované hodnoty můžeme zadefinovat na jednom místě.

V případě barev můžeme zapojit zabudované funkce SASSu pro manipulaci barev. Pokud bychom chtěli třeba pro červenou barvu zjistit její doplňkovou, napíšeme `color: adjust-hue(red, 180deg)`. CSS výsledek by byl v tomto případě `color: aqua`.

## Úkol na teď

Postupuj podle zadání na [github.com/…/Cviceni-SASS-prevody](https://github.com/Czechitas-podklady-WEB/Cviceni-SASS-prevody).
