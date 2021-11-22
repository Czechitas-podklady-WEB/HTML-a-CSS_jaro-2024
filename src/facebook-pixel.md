---
layout: base
title: Facebook pixel
---

Podobný nástroj jako [Google Analytics](google-analytics). Zaměřuje se především na reklamní kampaně, zvyšování marketingových konverzí. Po nasazení kódu Facebook pixelu na web je pak jednodušší cílit reklamu a vyhodnocovat její úspěšnost.

Kód pro vložení do všech stránek vypadá takto:

<!-- prettier-ignore -->
```html
<!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '{your-pixel-id-goes-here}');
  fbq('track', 'PageView');
</script>
<noscript>
  <img height="1" width="1" style="display:none"
       src="https://www.facebook.com/tr?id={your-pixel-id-goes-here}&ev=PageView&noscript=1"/>
</noscript>
<!-- End Facebook Pixel Code -->
```

Značku `{your-pixel-id-goes-here}` je potřeba nahradit za indentifikátor vytvořený v administraci [Meta for Business](https://www.facebook.com/business/). O jeho založení se většinou stará marketingové oddělení, které frontendistům už jen přeposílá identifikátor a instrukce s kusem kódu výše.
