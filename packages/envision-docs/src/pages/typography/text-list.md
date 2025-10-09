---
title: Text lists
description: Text lists are used for ordered and unordered lists in text content.
since: 2025.09.1
---

Text lists are used for ordered and unordered lists in text content.

The class `env-text-list` is used to style both types of lists and must be applied to the `<ul>` or `<ol>` element.

List style, paddings and margins may be customized [using the text list variables](/utils/css-variables/#text-list-variables).

Nested lists do not get top or bottom margins, to prevent extra spacing inside the list.

## Examples

### Unordered list

```html
<ul class="env-text-list env-text-body-02">
   <li>100 g butter</li>
   <li>1½ dl milk</li>
   <li>2 eggs</li>
   <li>2 dl granulated sugar</li>
   <li>3 dl all-purpose flour</li>
   <li>1½ tsp baking powder</li>
</ul>
```

### Ordered list

```html
<ol class="env-text-list env-text-body-02">
   <li>Preheat the oven to 175°C.</li>
   <li>Grease and flour a bundt cake pan of about 1.5 liters.</li>
   <li>Melt the butter in a saucepan and add the milk.</li>
   <li>
      Whisk the eggs and sugar until light and fluffy, then add the butter and
      milk mixture.
   </li>
   <li>
      Stir in the flour mixed with baking powder and pour the batter into the
      prepared pan.
   </li>
   <li>Bake in the lower part of the oven for about 35 minutes.</li>
</ol>
```

### Nested lists

```html
<ul class="env-text-list env-text-body-02">
   <li>first item</li>
   <li>
      second item
      <ul class="env-text-list">
         <li>second item first subitem</li>
         <li>
            second item second subitem
            <ol class="env-text-list">
               <li>second item second subitem first sub-subitem</li>
               <li>second item second subitem second sub-subitem</li>
               <li>second item second subitem third sub-subitem</li>
            </ol>
         </li>
         <li>second item third subitem</li>
      </ul>
   </li>
   <li>third item</li>
</ul>
```
