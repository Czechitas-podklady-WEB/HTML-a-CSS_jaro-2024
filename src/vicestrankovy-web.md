---
layout: base
title: Vícestránkový web
---

Kromě souboru `index.html`, který je vstupním bodem webu, můžeme mít vedle něj libovolné množství dalších HTML souborů. Aby se mezi nimi mohl uživatel pohybovat, musíme je nějak propojit. Nejčastěji se to děje pomocí odkazů, které se píší do značky `<a>`.

```html
<a href="index.html">Domů</a>
<a href="kontakt.html">Kontakt</a>
<a href="o-nas.html">O nás</a>
```

Všechny HTML soubory potřebují svou `<html>` značku, `<head>` i `<body>`. CSS soubor ale mohou sdílet klidně jeden společný. Stačí ho načíst v hlavičce každého souboru.

## Pro pokročilé

### Šablonovací systémy

I na jedné stránce se dost často opakují větší stejné nebo podobné kusy HTML. U vícestránkových webů se pak většinou na každé stránce opakuje například hlavička a patička. Když se něco změní, musí se změnit na všech stránkách. Šablony jsou způsob, jak toto opakování zjednodušit. Pomocí šablonovacího systému se například hlavička napíše jen jednou a systém ji automaticky nakopíruje do všech stránek.

## Cvičení

- Postupuj podle zadání na [github.com/…/cviceni-vicestrankovy-web](https://github.com/Czechitas-podklady-WEB/cviceni-vicestrankovy-web).
