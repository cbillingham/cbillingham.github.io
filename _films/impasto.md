---
title: Impasto
header-img: impasto.jpg
categories:
  - lighting
type: "Narrative"
positions:
  - Gaffer
images:
  - impasto01
  - impasto02
  - impasto03
  - impasto04
  - impasto05
  - impasto06
  - impasto07
  - impasto08
  - impasto09
  - impasto10
  - impasto11
layout: film
custom_js: 
  - owl.carousel.min
  - carousel
custom_css: 
  - owl.carousel
  - owl.theme
sort_weight: 9
---
Narrative

**Director:** Alex Sharp  
**Director of Photography:** Piergiorgio Gonni

<div id="image-slider" class="center-block owl-carousel owl-theme">
 
  {% for image in page.images %}
  <div class="item"><img src="/images/impasto/{{image}}.jpg" alt="{{image | capitalize }}"></div>
  {% endfor %}

</div>