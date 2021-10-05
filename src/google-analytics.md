---
layout: base
---

# Google Analytics

Nástroj pro sledování návštěvnosti webu. [analytics.google.com](https://analytics.google.com/)

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
