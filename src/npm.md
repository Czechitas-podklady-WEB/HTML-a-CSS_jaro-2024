---
layout: base
---

# Příkaz npm

`npm` je program pro příkazovou řádku. Usnadňuje stahování balíčků z [npmjs.com](https://www.npmjs.com/) a jejich správu.

## Instalace

S `npm` se pojí druhý program `node`, na kterém je `npm` postavené. Oba programy se instalují společně stažením a spuštěním příslušného instalačního souboru zde [nodejs.org](https://nodejs.org/en/download/).

Zdali instalace dopadla úspěšně můžeš ověřit zadáním příkazu `npm --version` do příkazové řádky, případně `node --version`. Pokud jsi měla řádku otevřenou během instalace, bude ji možná potřeba zavřít a znovu otevřít, protože jinak se nedozví, že jsou k dispozici nové programy.

## Založení nového projektu na npm

Spuštěním `npm init` se aktuální složka nastaví jako kořenová pro nový projekt, který bude využívat výhody `npm`. Vznikne zároveň soubor `package.json` s jeho konfigurací. Výsledek může vypadat třeba takto:

### `package.json`

```json
{
	"name": "zkouska",
	"version": "1.0.0",
	"description": "",
	"main": "index.js",
	"scripts": {
		"test": "echo \"Error: no test specified\" && exit 1"
	},
	"keywords": [],
	"author": "",
	"license": "ISC"
}
```

K `package.json` je vyhodné dovytvořit ještě soubor `.gitignore` a v něm zmínit složku `/node_modules/`. Gitgnore se postará o to, aby se `/node_modules/` náhodou nedostala do gitu. Je to pomocná složka `npm`, kam si občas odkládá na git příliš objemná data, která není potřeba zálohovat.

### `.gitignore`

```text
/node_modules/
```

## Instalace balíčků

Když teď máme `npm`, můžeme projekt rozšířit o závislosti zavoláním `npm install nazev-balicku`. Balíček se stáhne do `/node_modules` a zároveň o něm přibyde zmínka v `package.json`. V případě `npm install fslightbox` ho už tedy nemusíme ručně stahovat v ZIPu ze stránky s [dokumentací](https://fslightbox.com/javascript/download).

Pokud pokračujeme na projektu, kde je `package.json` již vytvořený i se všemi závislostmi, stačí nám je jen doinstalovat samotným zavoláním `npm install`. Názvy jednotlivých balíčků se automaticky vyčtou z `package.json`. Toto je častý případ v situaci, kdy třeba klonujeme rozpracovaný projekt.
