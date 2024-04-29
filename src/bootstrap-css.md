---
layout: base
title: Bootstrap
---

Bootstrap je jeden z mnoha CSS frameworků, které vám usnadní vytváření responzivních webových stránek. Jeho výhodou je, že je velmi rozšířený, takže na něj najdete spoustu návodů a příkladů. Bootstrap je také velmi dobře [zdokumentovaný](https://getbootstrap.com/docs/5.3/getting-started/introduction/).

## Napojení

Nejjednodušší způsob, jak začít používat Bootstrap, je přidat odkaz na jeho CSS soubor do hlavičky HTML. To uděláte takto:

```html
<html>
	<head>
		<!-- … -->
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link
			href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
			rel="stylesheet"
		/>
	</head>
	<!-- … -->
</html>
```

## Rozložení stránky

Bootstrap vám nabízí mnoho prvků. Kombinací `.container`, `.row` a `.col` můžete vytvořit responzivní rozložení stránky. Více o [grid systému v dokumentaci](https://getbootstrap.com/docs/5.3/layout/grid/). Pro nastavení mezer mezi sloupci a řádky slouží [gutters](https://getbootstrap.com/docs/5.3/layout/gutters/).

## Předchystané komponenty

- [Tlačítko](https://getbootstrap.com/docs/5.3/components/buttons/)
- [Karta](https://getbootstrap.com/docs/5.3/components/card/)
- a další…

## Cvičení

- Postupuj podle zadání na [github.com/…/cviceni-bootstrap-css](https://github.com/Czechitas-podklady-WEB/cviceni-bootstrap-css).
