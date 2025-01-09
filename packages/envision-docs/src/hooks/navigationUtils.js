export const filterMenuItems = (items, categories, location) => {
   console.log('filterMenuItems', items);

   items = items
      .map(({ node }) => ({
         id: node.id,
         title: node.frontmatter.title,
         deprecated: node.frontmatter.deprecated,
         since: node.frontmatter.since,
         beta: node.frontmatter.beta,
         dashboard: node.frontmatter.dashboard,
         description: node.frontmatter.description,
         indexing: node.frontmatter.indexing,
         slug: node.fields.slug,
      }))
      .reduce((accumulated, item) => {
         const pathItems = item.slug.split('/').filter((i) => i);

         // if (pathItems.length === 1) {
         //
         // }
         // console.log('pathItems', pathItems, accumulated);

         // TODO: Remove?

         // if (pathItems.length === 3) {
         //    let parent = accumulated[pathItems[0]];
         //    if (!parent) {
         //       parent = accumulated[pathItems[0]] = {};
         //    }
         //
         //    let child = parent[pathItems[1]];
         //    if (!child) {
         //       child = parent[pathItems[1]] = [];
         //    }
         //
         //    child.push(item);
         //
         //    return accumulated;
         // }

         let parent = accumulated[pathItems[0]];
         if (!parent) {
            parent = accumulated[pathItems[0]] = [];
         }

         parent.push(item);

         return accumulated;
      }, {});
   setIndexAndCurrent(items, categories, location);
   // items[category].sort(sortPages);
   Object.keys(items).forEach((category) => {
      items[category].sort(sortPages);
      // filteredMenuItems[category] = getItemsExceptIndex(menuItems[category]);
   });
   return items;
};

export const getCategoryMenuItems = (menuItems, menuCategories) => {
   let items;
   for (let i = 0; i < menuCategories.length; i++) {
      const category = menuCategories[i];
      const categoryItems = menuItems[category.slug];
      const isCurrentCategory = categoryItems.find((item) => {
         return item.isCurrentPage;
      });
      if (isCurrentCategory) {
         items = categoryItems.filter((item) => {
            return !item.isIndexPage;
         });
         break;
      }
   }

   console.log('items', items);

   return items;
};

export const getCategoryTop = (menuItems, menuCategories) => {
   let item;
   for (let i = 0; i < menuCategories.length; i++) {
      const category = menuCategories[i];
      const categoryItems = menuItems[category.slug];
      const isCurrentCategory = categoryItems.find((item) => {
         return item.isCurrentPage;
      });
      if (isCurrentCategory) {
         item = {
            title: category.title,
            description: category.description,
            slug: `/${category.slug}/`,
         };
         break;
      }
   }

   return item;
};

export const getTopLevelMenuItems = (menuItems, menuCategories) => {
   console.log('TOP', menuItems, menuCategories);
   let items = [];
   menuCategories.forEach((category) => {
      items.push({
         title: category.title,
         description: category.description,
         spriteId: category.spriteId,
         slug: `/${category.slug}/`,
      });
   });
   return items;
   // return menuItems[category];
};

export const getCategorySlug = (title, slug, items) => {
   // If index page exists, return link to index page
   // Else return link to first item
   const indexPage = items.find((item) => {
      return item.isIndexPage;
   });
   if (indexPage) {
      return indexPage.slug;
   }
   return items[0].slug;
};

export const setIndexAndCurrent = (menuItems, categories, location) => {
   if (!menuItems || !categories || !location) {
      return;
   }
   Object.keys(menuItems).forEach((category) => {
      const categorySlug = `/${category}/`;
      const currentPath = location.pathname;
      menuItems[category].forEach((item) => {
         item.isIndexPage = item.slug === categorySlug;
         item.isCurrentPage = item.slug === currentPath;
         if (item.isCurrentPage) {
            const x = categories.find((c) => {
               return c.slug === category;
            });
            x && (x.hasCurrentPage = true);
         }
      });
   });
};

export const sortPages = (a, b) => {
   const titleA = a.title.toUpperCase();
   const titleB = b.title.toUpperCase();
   if (titleA < titleB) {
      return -1;
   }
   if (titleA > titleB) {
      return 1;
   }
   return 0;
};

export const getItemsExceptIndex = (items) => {
   return items.filter(({ isIndexPage }) => {
      return !isIndexPage;
   });
};
