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
