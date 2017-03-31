---
layout: docs
title: Table
description: Table description
group: components
---
## Types ##
### Default ###
{% example html %}

<table class="{{ site.css_prefix }}-table">
   <thead>
      <tr>
         <th>Name</th>
         <th>Username</th>
         <th>Department</th>
         <th>Email</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>John Doe</td>
         <td>johdoe</td>
         <td>Development</td>
         <td>john@doe.com</td>
      </tr>
      <tr>
         <td>Jane Doe</td>
         <td>jandoe</td>
         <td>Development</td>
         <td>jane@doe.com</td>
      </tr>
      <tr>
         <td>John Smith</td>
         <td>johsmi</td>
         <td>Marketing</td>
         <td>john@smith.com</td>
      </tr>
      <tr>
         <td>Jane Smith</td>
         <td>jansmi</td>
         <td>Marketing</td>
         <td>jane@smith.com</td>
      </tr>                  
   </tbody>
</table>

{% endexample %}

### Zebra ###
{% example html %}

<table class="{{ site.css_prefix }}-table {{ site.css_prefix }}-table--zebra">
   <thead>
      <tr>
         <th>Name</th>
         <th>Username</th>
         <th>Department</th>
         <th>Email</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>John Doe</td>
         <td>johdoe</td>
         <td>Development</td>
         <td>john@doe.com</td>
      </tr>
      <tr>
         <td>Jane Doe</td>
         <td>jandoe</td>
         <td>Development</td>
         <td>jane@doe.com</td>
      </tr>
      <tr>
         <td>John Smith</td>
         <td>johsmi</td>
         <td>Marketing</td>
         <td>john@smith.com</td>
      </tr>
      <tr>
         <td>Jane Smith</td>
         <td>jansmi</td>
         <td>Marketing</td>
         <td>jane@smith.com</td>
      </tr>                  
   </tbody>
</table>

{% endexample %}

## Borders ##
`{{ site.css_prefix }}-table--borders-*` Valid values `around`, `right`, `bottom`, `left`
{% example html %}

<table class="{{ site.css_prefix }}-table {{ site.css_prefix }}-table--borders-around">
   <thead>
      <tr>
         <th>Name</th>
         <th>Username</th>
         <th>Department</th>
         <th>Email</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>John Doe</td>
         <td>johdoe</td>
         <td>Development</td>
         <td>john@doe.com</td>
      </tr>
      <tr>
         <td>Jane Doe</td>
         <td>jandoe</td>
         <td>Development</td>
         <td>jane@doe.com</td>
      </tr>             
   </tbody>
</table>

{% endexample %}

## Sizing ##
### Small ###
{% example html %}

<table class="{{ site.css_prefix }}-table {{ site.css_prefix }}-table--small">
   <thead>
      <tr>
         <th>Name</th>
         <th>Username</th>
         <th>Department</th>
         <th>Email</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>John Doe</td>
         <td>johdoe</td>
         <td>Development</td>
         <td>john@doe.com</td>
      </tr>
      <tr>
         <td>Jane Doe</td>
         <td>jandoe</td>
         <td>Development</td>
         <td>jane@doe.com</td>
      </tr>             
   </tbody>
</table>

{% endexample %}

### Large ###
{% example html %}

<table class="{{ site.css_prefix }}-table {{ site.css_prefix }}-table--large">
   <thead>
      <tr>
         <th>Name</th>
         <th>Username</th>
         <th>Department</th>
         <th>Email</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>John Doe</td>
         <td>johdoe</td>
         <td>Development</td>
         <td>john@doe.com</td>
      </tr>
      <tr>
         <td>Jane Doe</td>
         <td>jandoe</td>
         <td>Development</td>
         <td>jane@doe.com</td>
      </tr>             
   </tbody>
</table>

{% endexample %}

## Contextual styling ###
### Hover effect ###
{% example html %}

<table class="{{ site.css_prefix }}-table {{ site.css_prefix }}-table--hover">
   <thead>
      <tr>
         <th>Name</th>
         <th>Username</th>
         <th>Department</th>
         <th>Email</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>John Doe</td>
         <td>johdoe</td>
         <td>Development</td>
         <td>john@doe.com</td>
      </tr>
      <tr>
         <td>Jane Doe</td>
         <td>jandoe</td>
         <td>Development</td>
         <td>jane@doe.com</td>
      </tr>
      <tr>
         <td>John Smith</td>
         <td>johsmi</td>
         <td>Marketing</td>
         <td>john@smith.com</td>
      </tr>
      <tr>
         <td>Jane Smith</td>
         <td>jansmi</td>
         <td>Marketing</td>
         <td>jane@smith.com</td>
      </tr>             
   </tbody>
</table>

{% endexample %}

### Colors ###
Apply to row (`{{ site.css_prefix }}-table__row--*`) or indivdual cell (`{{ site.css_prefix }}-table__cell--*`).

Valid values:

`active` <br/>
`info` <br/>
`success` <br/>
`danger` <br/>
`warning` <br/>
{% example html %}

<table class="{{ site.css_prefix }}-table">
   <thead>
      <tr>
         <th>Name</th>
         <th>Username</th>
         <th>Department</th>
         <th>Email</th>
      </tr>
   </thead>
   <tbody>
      <tr class="{{ site.css_prefix }}-table__row--active">
         <td>John Doe</td>
         <td>johdoe</td>
         <td>Development</td>
         <td>john@doe.com</td>
      </tr>
      <tr class="{{ site.css_prefix }}-table__row--info">
         <td>Jane Doe</td>
         <td>jandoe</td>
         <td>Development</td>
         <td>jane@doe.com</td>
      </tr>
      <tr class="{{ site.css_prefix }}-table__row--success">
         <td>John Smith</td>
         <td>johsmi</td>
         <td>Marketing</td>
         <td>john@smith.com</td>
      </tr>
      <tr class="{{ site.css_prefix }}-table__row--danger">
         <td>Jane Smith</td>
         <td>jansmi</td>
         <td>Marketing</td>
         <td>jane@smith.com</td>
      </tr>
      <tr class="{{ site.css_prefix }}-table__row--warning">
         <td>Peggy Sue</td>
         <td>pegsue</td>
         <td>Design</td>
         <td>peggy@sue.com</td>
      </tr>
      <tr>
         <td class="{{ site.css_prefix }}-table__cell--active">Penny Lane</td>
         <td class="{{ site.css_prefix }}-table__cell--info">penlan</td>
         <td class="{{ site.css_prefix }}-table__cell--success">Finance</td>
         <td class="{{ site.css_prefix }}-table__cell--danger">penny@lane.com</td>
      </tr>        
   </tbody>
</table>

{% endexample %}
