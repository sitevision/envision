---
layout: docs
title: Collapse
description: Collapsible description
group: components
---

<h2>Collapsible content</h2>

{% example html %}
<div id="heading1">
   <h4 class="env-text">
      <a role="button" class="env-button env-button--link" href="#container1" data-env-collapse aria-expanded="false" aria-controls="container1">
         Example 1
      </a>
   </h4>
</div>

<div class="env-collapse" id="container1">
   <p class="env-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget lobortis dui, in accumsan augue. Quisque nec augue quam. Donec sed purus quam. Proin eu tincidunt metus.</p>
</div>

{% endexample %}

<p>
   Add <code class="highlighter-rouge">env-collapse--show</code> to have your content expanded
</p>

<h2>Background</h2>
<p>Add <code class="highlighter-rouge">env-collapse-header</code> to give the collapsible header a background</p>
<p>Add <code class="highlighter-rouge">env-collapse-header--icons</code> to add icons</p>

{% example html %}
<h4 class="env-text">
   <a class="env-button env-collapse-header env-collapse-header--icons" role="button" href="#container2" data-env-collapse aria-expanded="false" aria-controls="container2">
      Example 2
   </a>
</h4>

<div class="env-collapse" id="container2">
   <p class="env-text env-p--top-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget lobortis dui, in accumsan augue. Quisque nec augue quam. Donec sed purus quam. Proin eu tincidunt metus.</p>
</div>

{% endexample %}

## Methods ##

Show  
`$('#myCollapse').envCollapse('show')`

Hide   
`$('#myCollapse').envCollapse('hide')`

Toggle   
`$('#myCollapse').envCollapse('toggle')`