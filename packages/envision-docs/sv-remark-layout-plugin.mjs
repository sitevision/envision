import path from 'path';

export function svRemarkLayoutPlugin() {
   const templates = {
      default: path.resolve('src/layouts/Default.astro'),
      startpage: path.resolve('src/layouts/Startpage.astro'),
      navigation: path.resolve('src/layouts/Navigation.astro'),
   };

   return function (tree, file) {
      if (
         !file.data.astro.frontmatter.template ||
         !Object.hasOwnProperty.call(
            templates,
            file.data.astro.frontmatter.template
         )
      ) {
         file.data.astro.frontmatter.template = 'default';
      }
      file.data.astro.frontmatter.layout =
         templates[file.data.astro.frontmatter.template];
   };
}
