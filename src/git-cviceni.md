---
layout: base
---

# Git cvičení

1. Vytvoř nový veřejný repozitář na GitHubu s názvem `git-cviceni`.

1. Repozitář k sobě naklonuj.

1. Do nové složky přidej soubor `index.html` s nadpisem `<h1>Git cvičení</h1>`.

1. Kód commitni a pushni.

   1. `git add .`
   1. `git commit -m "Základní html"`
   1. `git push`

1. Zkontroluj si, že `index.html` se nahrál na GitHub.

1. Přidej soubor se styly. V html ho napoj.

1. Na `body` veškerému textu nastav bezpatkové písmo, zarovnání na střed a maximální šířku na `600px`.

   ```css
   body {
   	font-family: sans-serif;
   	text-align: center;
   	max-width: 600px;
   	margin: 0 auto;
   }
   ```

1. Změny commitni se zprávou `"Základní styly"`.

1. Nadpis obal do tagu `<header>`, který podbarvi barvou `#166088`. Text udělej bílý.

1. Commitni.

1. Přidej do html pod hlavičku sekci `<main>` s pěti odstavci textu.

   ```
   main>p*5>lorem
   ```

1. Velikost textu v odstavcích dej na `20px` a odsaď ho o zhruba `60px` od horního nadpisu a konce stránky.

   ```css
   main {
   	padding: 3em 0;
   	font-size: 20px;
   }
   ```

1. Commitni.

1. Přidej patičku `<footer>Patička 2021</footer>`.

1. Nastav jí pozadí na `#dbe9ee`.

1. Commitni.

1. Výsledek by měl vypadat přibližně takto:

   ![výsledek](static/screenshots/git-vysledek.png)

1. Zkontroluj, že máš všechny změny nahrané na GitHubu.

## Bonus

- Nainstaluj a prozkoumej [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph).

  - Zobraz si historii změn.

  - Proklikej pár commitů.

  - Koukni, jak vypadá `diff`. Rozklikni v commitu soubor. Červenou uvidíš smazané řádky a zelenou nově přidané.

- Nainstaluj a prozkoumej [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens).

  - U jednotlivých řádků by se ti nově mělo ukazovat šedým nevýrazným textem, kdo je kdy upravil.

- [Git and GitHub - The Complete Guides](https://dev.to/ifierygod/git-and-github-the-complete-guides-chapter-1-23cp)
