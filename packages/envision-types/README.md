# @sitevision/envision-types

TypeScript definitions for the Envision UI framework in Sitevision CMS.

## Installation

```bash
npm install @sitevision/envision-types --save-dev
```

or with yarn:

```bash
yarn add -D @sitevision/envision-types
```

## Configuration

Add the types to your `tsconfig.json`:

```json
{
   "compilerOptions": {
      "types": ["@sitevision/envision-types"]
   }
}
```

## Usage

The types are globally available - no imports needed! Just use the `envision` object in your code:

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

## Available Components

- **Select** - Tag Select / Autocomplete component

More components will be added as the type definitions expand.

## Documentation

For full documentation, visit [https://envisionui.io/](https://envisionui.io/)

## License

MIT
