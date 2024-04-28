---
layout: base
title: Bootstrap a JavaScript
---

Volitelnou součástí Bootstrapu je i JavaScriptová nadstavba, která přidává do frameworku další funkce. Tyto funkce se většinou týkají interakce s uživatelem, například přepínací galerie, rozbalovací menu, nápovědy po najetí myši, modální okna.

## Napojení

Kromě CSS souboru Bootstrapu z předchozí kapitoly je třeba přidat i JavaScriptový soubor. Nejjednodušší způsob, jak to udělat, je přidat odkaz na něj na konec těla HTML dokumentu. To uděláte takto:

```html
<body>
	<!-- … -->
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
```