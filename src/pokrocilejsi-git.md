---
layout: base
title: Pokročilejší Git
---

## Dva počítače

Pokud jste v gitu přihlášeni na více zařízeních, můžou se vám hodit následující příkazy pro stahování a nahrávání změn. Zejména užitečný bude `git pull`.

### Z počítače na server

```bash
git push
```

### Ze serveru na počítač

```bash
git clone …
```

```bash
git pull
```

## Dva kodéři

Funguje velmi podobně jako v případě dvou počítačů. Jen je potřeba na GitHubu udělit v nastavení repozitáře, v záložce Collaborators and teams oprávnění druhému člověku, aby mohl také přispívat/pushovat. Repozitář s kódem však vlastní jen první autor.

## Návrat ke starší verzi

### Reset

```bash
git reset --hard 7240e13ebddfb57aaceaab4a1a5043a0e3303177
```

Kód výše je velmi nebezpečný a může vás připravit i o změny, které chcete zachovat. Posledním parametrem je identifikátor commitu, ke kterému se chcete vrátit. Často se kombinuje s příkazem `git push --force`, pokud chcete změny smazat i na serveru, GitHubu.

### Revert

```bash
git revert 7240e13ebddfb57aaceaab4a1a5043a0e3303177
```

Vytvoří nový commit, který zruší změny z vybraného commitu. Tím se zachová historie změn a můžete se k nim kdykoliv vrátit.

### Ruční překopírování

Když je nejhůře, můžete si ručně překopírovat soubory z minulé verze třeba z GitHubu. Tento postup je sice pracný, ale kolikrát nejjistější.
