---
layout: base
---

# Google Analytics

Nástroj pro sledování návštěvnosti webu.

- Počet návštěv denně.
- Průměrná délka návštěvy.
- Země.
- Typy zařízení.
- Nejvíce navštěvované podstránky.
- A mnohem více.

## Nastavení

Pro použití je nutné se přihlásit do [analytics.google.com](https://analytics.google.com/) a tam vytvořit účet pro konktrétní web. Průvodce nastavením vygeneruje kus kódu (`Tracking Code`), který je potřeba vložit do všech podstránek příslušného webu. Sledovací kód vypadá většinou takto:

```html
<!-- Global site tag (gtag.js) - Google Analytics -->
<script
	async
	src="https://www.googletagmanager.com/gtag/js?id=UA-148856199-1"
></script>
<script>
	window.dataLayer = window.dataLayer || []
	function gtag() {
		dataLayer.push(arguments)
	}
	gtag('js', new Date())

	gtag('config', 'UA-000000000-0')
</script>
```

`UA-000000000-0` je identifikátor konkrétního účtu.

## Úkol na teď

- Vyber si jeden z projektů, který máš na GitHubu postavený na Eleventy a ideálně už nasazený na Netlify. Například `Cviceni-Eleventy-struktura`, `Cviceni-Eleventy-galerie`, (`Cviceni-Eleventy-filmy`). Případně projekt donasaď podle instrukcí [zde](netlify-deploy).

- Přihlaš se do [Google Analytics](https://analytics.google.com/) a přidej nový web pro měření.

- Vygenerovaný sledovací kód přidej do layoutu webu tak, aby byl ve všech podstránkách.

- Upravený web nasaď. (Commitni a pushni.)

- Počkej, než se nový kód sestaví a zveřejní. Průběh můžeš sledovat na [Netlify](https://www.netlify.com/).

- Otevři si nasazený web v prohlížeči. Pokud můžeš, tak třeba i na telefonu.

- Koukni, jestli Google Analytics v sekci `Realtime` zaznamenaly tvou návštěvu. (Může se objevit s přibližně minutovým zpožděním. Pravděpodobně se neukáže, pokud máš aktivovaný blokátor jako je Adblock nebo uBlock, používáš prohlížeč Brave.)

- Aby nasbíraná data byla bohatší, nasdílej v chatu v breakout roomu adresu tvého webu a zároveň si otevři weby ostatních.

### Bonus

- Prohlédni si o pár dní později záložku `Reports snapshot`.

- Pokud chceš nahlédnout i do Google Analytics webu s materiály pro HTML a CSS 2, pošli e-mail bez textu na adresu `filip.chalupa@czechitas.cz` s předmětem `Google Analytics`. Zprávu odešli z účtu, na kterém Google Analytics používáš.
