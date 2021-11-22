---
layout: base
title: Pojmenovávání
---

Nejednoduchý úkol. O tom svědčí i první výsledek vyhledávání na Googlu při zadání „[programmers hardest tasks](https://www.google.com/search?q=programmers+hardest+tasks)“. Na prvním místě je „Naming things.“ 😅 Dobré pojmenovávání v kódu ho činí přehlednějším. Přehlednější kód vede k úspoře času, snížení počtu chyb, snazší domluvě v týmu.

## Třídy

V HTML pojmenováváme třídy typicky podle obsahu obecnějším označením, aby se daly znovupoužít na více místech, kde se vyskytuje podobný prvek.

```diff
- <h1 class="jedna">O nás</h1>
- <h2 class="alice">Alice</h2>
- <p class="o-alici>Lorem ipsum</p>
- <h2 class="bob">Bob</h2>
- <p class="o-bobovi>Lorem ipsum</p>
+ <h1 class="hlavni-nadpis">O nás</h1>
+ <h2 class="jmeno">Alice</h2>
+ <p class="popis>Lorem ipsum</p>
+ <h2 class="jmeno">Bob</h2>
+ <p class="popis>Lorem ipsum</p>
```

## Custom properties / proměnné

V CSS a SASSu se snažíme volit popisná jména, ze kterých snadno odhadneme jejich obsah, účel, ale zároveň nejsou příliš specifická pro případ, že bychom hodnotu časem potřebovali změnit.

```diff
- --paddingy: 1em
+ --mezery-mezi-kontakty: 1em
```

```diff
- $a: #E6007E
- $b: #2D2E83
+ $hlavni-barva: #E6007E
+ $doplnkova-barva: #2D2E83
```

## Commity

Každá „commit message“ by stručně měla vystihovat obsah commitu. Není příliš užitečné opakovat jednu zprávu stále dokola nebo commity číslovat.

```diff
- První commit
- Další kód
- Bude to fungovat?
+ Základ
+ Přidání hlavičky
+ Experiment s patičkou
```

Vždy je potřeba brát v potaz také domluvu v týmu. Pojmenováváme česky, anglicky? Mají mít názvy nějaký specifický formát? Používáme metodiku BEM? Dáváme všem barvám do názvu koncovku `-barva`? Píšeme v commitech první písmeno velké?
