---
title: Table
---

## Types

### Default

```html
<table class="env-table">
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
```

### Zebra

```html
<table class="env-table env-table--zebra">
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
```

## Borders

`env-table--borders-*` Valid values `around`, `right`, `bottom`, `left`

```html
<table class="env-table env-table--borders-around">
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
```

## Sizing

### Small

```html
<table class="env-table env-table--small">
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
```

### Large

```html
<table class="env-table env-table--large">
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
```

## Contextual styling

### Hover effect

```html
<table class="env-table env-table--hover">
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
```

### Colors

Apply to row (`env-table__row--*`) or indivdual cell (`env-table__cell--*`).

Valid values:
`active`
`info`
`success`
`danger`
`warning`

```html
<table class="env-table">
   <thead>
      <tr>
         <th>Name</th>
         <th>Username</th>
         <th>Department</th>
         <th>Email</th>
      </tr>
   </thead>
   <tbody>
      <tr class="env-table__row--active">
         <td>John Doe</td>
         <td>johdoe</td>
         <td>Development</td>
         <td>john@doe.com</td>
      </tr>
      <tr class="env-table__row--info">
         <td>Jane Doe</td>
         <td>jandoe</td>
         <td>Development</td>
         <td>jane@doe.com</td>
      </tr>
      <tr class="env-table__row--success">
         <td>John Smith</td>
         <td>johsmi</td>
         <td>Marketing</td>
         <td>john@smith.com</td>
      </tr>
      <tr class="env-table__row--danger">
         <td>Jane Smith</td>
         <td>jansmi</td>
         <td>Marketing</td>
         <td>jane@smith.com</td>
      </tr>
      <tr class="env-table__row--warning">
         <td>Peggy Sue</td>
         <td>pegsue</td>
         <td>Design</td>
         <td>peggy@sue.com</td>
      </tr>
      <tr>
         <td class="env-table__cell--active">Penny Lane</td>
         <td class="env-table__cell--info">penlan</td>
         <td class="env-table__cell--success">Finance</td>
         <td class="env-table__cell--danger">penny@lane.com</td>
      </tr>
   </tbody>
</table>
```
