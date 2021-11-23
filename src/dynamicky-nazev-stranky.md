---
layout: base
title: Dynamický název stránky
---

Bývá zvykem v názvu stránky zahrnout i označení aktuální podstránky. Například z `HTML a CSS 2` udělat `Dynamický název stránky | HTML a CSS 2`. Není však žádné pravidlo, jestli oddělovač má být právě `|`, `-` nebo dokonce `•`. Stejně tak nikde není stanoveno, jestli hlavní název webu vždy musí být přítomen nebo jestli nemůže být první takto `HTML a CSS 2 - Dynamický název stránky`.

### Nadpis pro všechny stránky stejný

![základní nadpis](static/screenshots/title-zakladni.png)

### Nadpis s názvem podstránky

![rozšířený nadpis](static/screenshots/title-rozsireny.png)

## Využití

- Rozšířený nadpis může vylepšit uživatelu orientaci ve více záložkách, v oblíbených.

- Může mít také pozitivní dopad na výsledky vyhledávání (SEO), protože vyhledávače předpokládají, že v nadpisu je důležitý text aktuální stránky, který navíc vyhledávač často použije jako náhledový text ve výsledcích.

- Společně s dalšími [metadaty](metadata) je použit při sdílení na sociálních sítích.

## Úprava šablony

Na webu s větším počtem stránek může zjednodušit údržbu úprava základního layoutu. Předpokládejme, že každá podstránka, u které chceme rozšířený nadpis má nastavenou proměnnou `nadpis`. Šablona by pak mohla vypadat takto:

### `layouty/zakladni.njk`

```liquid
<title>{% raw %}{% if nadpis %}{{ nadpis }} | {% endif %}{% endraw %}HTML a CSS 2</title>
```

Pokud má stránka `nadpis`, použije se a přidá se za něj `|`.

### `podstranka.njk`

```liquid
---
layout: zakladni
nadpis: Dynamický název stránky
---

<h2>…</h2>
<p>…</p>
```

Nadpis můžeme předat přes data ve Front Matter podle ukázky výše nebo pomocí JSON souboru.

Výsledné HTML pak bude vypadat takto:

### `podstranka/index.html`

```html
<title>Dynamický název stránky | HTML a CSS 2</title>
```

## Úkol na teď

- V projektu postaveném na Eleventy s více podstránkami doplň do `<title>` název jednotlivých podstránek. Můžeš například rozšířit domácí úkol s [filmy](https://github.com/Czechitas-podklady-WEB/Cviceni-Eleventy-filmy) nebo navázat na bonusovou část v [galerii](https://github.com/Czechitas-podklady-WEB/Cviceni-Eleventy-galerie).

  (Pokud nemáš na co navázat, můžeš si zde stáhnout hotovou galerii, kde stačí detailovým stránkám doplnit `<title>` obsahujíci popisek. [Galerie s bonusem](https://github.com/Czechitas-podklady-WEB/Cviceni-Eleventy-galerie/archive/refs/heads/reseni.zip))

  ### Ukázka detailu filmu

  ```html
  <title>Duna | FILMY.cz</title>
  ```

  ### Ukázka detailové stránky s obrázkem galerie

  ```html
  <title>Jezero | Galerie</title>
  ```

### Bonus

- Pokud sis v předchozím úkolu zvolila projekt s filmy, doplň do základního layoutu [meta tag](metadata) pro popis (`description`) s textem `Filmová databáze vybraných filmů. Web slouží jako cvičení práce s Eleventy.`

- Pomocí podmínky pro stránky s detailem filmu použij text shrnující obsah filmu `{% raw %}{{ film.obsah.text }}{% endraw %}`.

- Obsah je pro `description` většinou moc dlouhý. Pomocí filtru [truncate](https://mozilla.github.io/nunjucks/templating.html#truncate) ho ořízni jen na 100 znaků.

- (Filtr nešťastně pro výpustku používá tři samostatné znaky tečky `...`, které většina fontů vykresluje příliš daleko od sebe. Nahraď je za speciální symbol tří teček `…`)

- Nezapomeň zkontrolovat výsledné HTML třeba přes vývojářské nástroje, ve složce `dist` nebo jiným zobrazením zdrojového kódu stránky.
