---
layout: base
---

# Data v Eleventy 2

## Filtry

Pomáhají transformovat proměnné. Zapisují se pomocí symbolu svislé čáry ({% raw %}`{{ promenna | filtr }}`{% endraw %}).

Pokud bychom chtěli například vypsat počet položek v kolekci, uděláme to v šabloně takto:

```liquid
<div>Počet filmů v kolekci: {% raw %}{{ filmy | length }}{% endraw %}</div>
```

Výsledek v HTML bude vypadat takto:

```html
<div>Počet filmů v kolekci: 5</div>
```

## Slug

Pro převod textu na znaky vhodné pro URL adresu používáme filtr `slug`.

```liquid
<div>Název: {% raw %}{{ filmy.nazev }}{% endraw %}</div>
<div>URL: {% raw %}/film/{{ filmy.nazev | slug }}{% endraw %}</div>
```

Výsledek v HTML bude vypadat takto:

```html
<div>Název: Pán prstenů</div>
<div>URL: /film/pan-prstenu</div>
```

## Spojení kolekce

Pokud máme v kolekci samé řetězce, můžeme je spojit dohromady pomocí filtru `join`.

### `zanry.json`

```json
["Sci-Fi", "Komedie", "Romantický"]
```

### `sablona.njk`

```liquid
<div>{% raw %}{{ zanry | join }}{% endraw %}</div>
```

### Výsledek:

```html
<div>Sci-FiKomedieRomantický</div>
```

Pokud chceme použít vlastní oddělovač, například čárku navíc s mezerou, přidáme za `join` parametr do kulatých závorek v uvozovkách.

### `sablona.njk`

```liquid
<div>{% raw %}{{ zanry | join(', ') }}{% endraw %}</div>
<div>{% raw %}{{ zanry | join(' / ') }}{% endraw %}</div>
```

### Výsledek:

```html
<div>Sci-Fi, Komedie, Romantický</div>
<div>Sci-Fi / Komedie / Romantický</div>
```

## Další filtry

Všechny zabudované filtry do nunjucks jsou popsané v dokumentaci [zde](https://mozilla.github.io/nunjucks/templating.html#builtin-filters).

## Přejmenování proměnné

Pomocí `{% raw %}{% set %}{% endraw %}` můžeme vytvářet nové proměnné, které dokonce můžou vycházet z již existujících.

```liquid
{% raw %}{% set nejoblibenejsiCislo = 12 %}{% endraw %}
<div>Nejoblíbenější číslo je: {% raw %}{{ nejoblibenejsiCislo }}{% endraw %}</div>

{% raw %}{% set filmy = noveFilmy %}{% endraw %}
<h2>Nové filmy</h2>
<ul>
	{% raw %}{% for film in filmy %}{% endraw %}
		<li>
			{% raw %}{{ film }}{% endraw %}
		</li>
	{% raw %}{% endfor %}{% endraw %}
</ul>
```

Může se hodit například v případě, že máme šablonu, která očekává určitý název proměnné, ale z dat ji máme pojmenovanou jinak.

```liquid
{% raw %}{% set filmy = mojeFilmy.oblibene %}{% endraw %}
<h2>Oblíbené filmy</h2>
{% raw %}{% include "seznamFilmu.njk" %}{% endraw %}

{% raw %}{% set filmy = mojeFilmy.chciVidet %}{% endraw %}
<h2>Chci vidět</h2>
{% raw %}{% include "seznamFilmu.njk" %}{% endraw %}
```

## Úkol na teď

Postupuj podle zadání na [github.com/…/Cviceni-Eleventy-filmy](https://github.com/Czechitas-podklady-WEB/Cviceni-Eleventy-filmy).
