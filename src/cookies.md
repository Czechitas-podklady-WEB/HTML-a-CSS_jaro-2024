---
layout: base
---

# Cookies 🍪

Sbírat data o uživatelích pomocí Google Analytics není jen tak a mělo by splňovat podmínky GDPR, což je jeden z důvodů, proč většina internetu v současné době není skoro vůbec vidět přes vrstvu cookie lišt.

Jak lišty většinou vypadají je vidět například v online konfigurátoru [zde](https://www.cookie-lista.cz/) nebo [zde](https://cookie-bar.eu/).

Pozor! Od nového roku se pravidla zpřísnují. Velmi zjednodušeně pro ukládání cookies / sledování uživatele, které není pro fungování webu nezbytně nutné, už nastačí `opt-out`, ale naopak `opt-in`. Uživatel musí nejdříve souhlasit, než sledování započne.

## Consent mode

Aby bylo jednodušší nové požadavky splnit, Google umožňuje používat Analytics v omezeném režimu, který nazývá Consent Mode, pomocí něhož lze vypnout sledování příliš citlivých informací. Jak jej aktivovat je popsáno v [dokumentaci](https://developers.google.com/tag-platform/devguides/consent#configure_default_behavior).

Pro reaktivaci podrobnějšího sledování po uživatelovo odsouhlasení je potřeba do kódu zapojit další logiku v JavaScriptu.
