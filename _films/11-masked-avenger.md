---
title: Masked Avenger
header-img: masked-avenger.jpg
categories:
  - lighting
type: "Narrative"
positions:
  - Gaffer
images:
  - masked-avenger01
  - masked-avenger02
  - masked-avenger03
layout: film
custom_js: 
  - owl.carousel.min
  - carousel
custom_css: 
  - owl.carousel
  - owl.theme
---
Narrative

**Director:** Hunter Isham  
**Director of Photography:** Justin Lee (<http://justinleedp.com>)

<div id="image-slider" class="center-block owl-carousel owl-theme">
 
  {% for image in page.images %}
  <div class="item"><img src="/images/masked-avenger/{{image}}.jpg" alt="{{image | capitalize }}"></div>
  {% endfor %}

</div>