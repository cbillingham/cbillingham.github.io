---
title: Emma
header-img: emma.jpg
categories:
  - lighting
type: "Narrative"
positions:
  - Gaffer
images:
  - emma01
  - emma02
  - emma03
  - emma04
  - emma05
  - emma06
  - emma07
  - emma08
  - emma09
  - emma10
  - emma11
  - emma12
layout: film
custom_js: 
  - owl.carousel.min
  - carousel
custom_css: 
  - owl.carousel
  - owl.theme
sort_weight: 4
---
Narrative

**Director:** Nicole Castillo  
**Director of Photography:** Vincent Valentin (<http://www.valentincinematography.com>)  

<div id="image-slider" class="center-block owl-carousel owl-theme">
 
  {% for image in page.images %}
  <div class="item"><img src="/images/emma/{{image}}.jpg" alt="{{image | capitalize }}"></div>
  {% endfor %}

</div>