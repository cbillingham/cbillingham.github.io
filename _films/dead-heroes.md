---
title: Dead Heroes
header-img: dead-heroes.jpg
categories:
  - lighting
type: "Narrative"
positions:
  - Gaffer
images:
  - dead-heroes01
  - dead-heroes02
  - dead-heroes03
  - dead-heroes04
  - dead-heroes05
  - dead-heroes06
  - dead-heroes07
  - dead-heroes08
  - dead-heroes09
  - dead-heroes10
  - dead-heroes11
layout: film
custom_js: 
  - owl.carousel.min
  - carousel
custom_css: 
  - owl.carousel
  - owl.theme
sort_weight: 8
---
Narrative

**Director:** Cody Pestana  
**Director of Photography:** Vincent Valentin (<http://www.valentincinematography.com>)  

<div id="image-slider" class="center-block owl-carousel owl-theme">
 
  {% for image in page.images %}
  <div class="item"><img src="/images/dead-heroes/{{image}}.jpg" alt="{{image | capitalize }}"></div>
  {% endfor %}

</div>