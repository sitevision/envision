---
title: Table
---

Default table styling has been updated in 2025.01.1. Text styles will now use the variables
and styling from the [Text component](/components/text/).

## Types

### Default

```html
<table class="env-table">
   <caption>
      Default table
   </caption>
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
   <caption>
      Zebra table
   </caption>
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
   <caption>
      Table with borders
   </caption>
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
   <caption>
      Small table
   </caption>
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
   <caption>
      Large table
   </caption>
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
   <caption>
      Table with hover effect
   </caption>
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

### Colors <span class="doc-badge doc-badge--danger">Deprecated</span>

Table with colored rows and cells is deprecated and will be removed.
