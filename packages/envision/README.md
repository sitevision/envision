# @sitevision/envision

Create Sitevision like components and modules the easy way with Envision.

## Installation

```bash
npm install @sitevision/envision
```

## Configuration

Add the types to your `tsconfig.json`:

```json
{
   "compilerOptions": {
      "types": ["@sitevision/envision"]
   }
}
```

### ESLint Configuration

For ESLint, add `envision` as a global variable in your `eslint.config.js`:

```javascript
export default [
   {
      languageOptions: {
         globals: {
            envision: 'readonly',
         },
      },
   },
   // ...other config
];
```

## Usage

The types are globally available — no imports needed.  
You can use the global `envision` object in your code:

```typescript
// Select component
const select = await envision.select('.my-select', {
   maxItems: 1,
   placeholder: 'Select an option',
   onChange: (value) => {
      console.log('Selected:', value);
   },
});

// Access instance methods
select[0].addOptions([
   { value: '1', text: 'Option 1' },
   { value: '2', text: 'Option 2' },
]);
```

## Documentation

For full documentation, visit [https://envisionui.io/](https://envisionui.io/)

## License

MIT
