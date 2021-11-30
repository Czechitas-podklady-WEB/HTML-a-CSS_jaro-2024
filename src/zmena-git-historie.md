---
layout: base
title: 'Změna git historie'
---

## Úprava posledního commitu

```bash
git commit --amend
git push --force
```

Přidá změny do posledního commitu.

Mění historii. Pokud byl poslední commit už pushnutý, je potřeba pushnout znovu s přepínačem `--force`.

## Revert

```bash
git revert abc123
git push
```

Vytvoří nový commit s opačnými změnami.

Místo `abc123` přijde hash commitu, který vypadá přibližně takto: `5b8a5485ae61f0ac998ee709222e6d90268ef394`. Dá se zjistit například z historie na GitHubu. Může být i zkrácený.

Nemění historii. Všechny commity zůstanou zachované.

## Návrat ke staršímu commitu

⚠ Zahodí novější změny.

```bash
git reset --hard abc123
git push --force
```

## Rebase

Užitečné například pro hromadné úpravy několika commitů naráz.

```bash
git rebase --interactive HEAD~5
git push --force
```

Spustí úpravu poslední pěti commitů. Číslo za vlnkou můžeme upravit podle potřeby.

Běheme rebase můžeme například měnit zprávy commitů, zahodi některé commity nebo je sloučit.
