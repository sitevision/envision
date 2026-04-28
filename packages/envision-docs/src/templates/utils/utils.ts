export const getMainClassName = (isDashboard: boolean) => {
   return isDashboard ? 'main env-dashboard-theme' : 'main';
};

export const slugify = (input: string): string => {
   if (!input) {
      return '';
   }
   // make lower case and trim
   let slug = input.toLowerCase().trim();
   // remove accents from characters
   slug = slug.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
   // replace invalid chars with spaces
   slug = slug.replace(/[^a-z0-9\s-]/g, ' ').trim();
   // replace multiple spaces or hyphens with a single hyphen
   slug = slug.replace(/[\s-]+/g, '-');
   return slug;
};

export const getGithubUrl = (fileUrl: string) => {
   let url = fileUrl.split('/envision-docs/src/pages/');
   if (url.length === 2) {
      return `https://raw.githubusercontent.com/sitevision/envision/refs/heads/master/packages/envision-docs/src/pages/${url[1]}`;
   }
   return null;
};
