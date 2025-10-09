import path from 'path';

export function svRemarkLayoutPlugin() {
   const templates = {
      default: path.resolve('src/templates/Default.astro'),
      startpage: path.resolve('src/templates/Startpage.astro'),
      navigation: path.resolve('src/templates/Navigation.astro'),
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
