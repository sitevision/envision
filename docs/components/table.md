---
layout: docs
title: Table
description: Table description
group: components
---
## Types ##
### Default ###
{% example html %}

<table class="sv-table">
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

<table class="sv-table sv-table--zebra">
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
`sv-table--borders-*` Valid values `around`, `right`, `bottom`, `left`
{% example html %}

<table class="sv-table sv-table--borders-around">
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
`$table-padding / 2`
{% example html %}

<table class="sv-table sv-table--small">
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
`$table-padding * 2`
{% example html %}

<table class="sv-table sv-table--large">
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

<table class="sv-table sv-table--hover">
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
Apply to row (`sv-table__row--*`) or indivdual cell (`sv-table__cell--*`).

Valid values:

`active` <br/>
`info` <br/>
`success` <br/>
`danger` <br/>
`warning` <br/>
{% example html %}

<table class="sv-table">
   <thead>
      <tr>
         <th>Name</th>
         <th>Username</th>
         <th>Department</th>
         <th>Email</th>
      </tr>
   </thead>
   <tbody>
      <tr class="sv-table__row--active">
         <td>John Doe</td>
         <td>johdoe</td>
         <td>Development</td>
         <td>john@doe.com</td>
      </tr>
      <tr class="sv-table__row--info">
         <td>Jane Doe</td>
         <td>jandoe</td>
         <td>Development</td>
         <td>jane@doe.com</td>
      </tr>
      <tr class="sv-table__row--success">
         <td>John Smith</td>
         <td>johsmi</td>
         <td>Marketing</td>
         <td>john@smith.com</td>
      </tr>
      <tr class="sv-table__row--danger">
         <td>Jane Smith</td>
         <td>jansmi</td>
         <td>Marketing</td>
         <td>jane@smith.com</td>
      </tr>
      <tr class="sv-table__row--warning">
         <td>Peggy Sue</td>
         <td>pegsue</td>
         <td>Design</td>
         <td>peggy@sue.com</td>
      </tr>
      <tr>
         <td class="sv-table__cell--active">Penny Lane</td>
         <td class="sv-table__cell--info">penlan</td>
         <td class="sv-table__cell--success">Finance</td>
         <td class="sv-table__cell--danger">penny@lane.com</td>
      </tr>        
   </tbody>
</table>

{% endexample %}
