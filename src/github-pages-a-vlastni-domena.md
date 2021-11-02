---
layout: base
---

# GitHub pages a vlastní doména

Oficiální dokumentace: [docs.github.com/…/configuring-a-custom-domain-for-your-github-pages-site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

Po zakoupení domény je potřeba upravit nastavení repozitáře s aktivovanými GitHub pages. Konkrétně je nutné vyplnit políčko `Custom domain`. Vytvoří se nový commit se souborem `CNAME`. Abychom mohli na repozitáři dále pracovat, je důležité ho buď znovu naklonovat nebo na příkazové řádce pustit `git pull` pro stažení nových změn. Jinak nepůjde pushovat.

Dále musíme přidat nové záznamy u registrátora domény.

| název          | typ   | obsah           | time to live |
| -------------- | ----- | --------------- | ------------ |
| muj-web.cz     | A     | 185.199.108.153 | 3600         |
| muj-web.cz     | A     | 185.199.109.153 | 3600         |
| muj-web.cz     | A     | 185.199.110.153 | 3600         |
| muj-web.cz     | A     | 185.199.111.153 | 3600         |
| www.muj-web.cz | CNAME | muj-web.cz      | 3600         |

Změna DNS záznamů se může projevit i až za několik hodin. Web se většinou na nové doméně neobjeví okamžitě.
