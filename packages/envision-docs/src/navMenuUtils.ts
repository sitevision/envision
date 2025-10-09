const sortPages = (a, b) => {
   const titleA = a.frontmatter?.title?.toUpperCase() || '';
   const titleB = b.frontmatter?.title?.toUpperCase() || '';
   if (titleA < titleB) {
      return -1;
   }
   if (titleA > titleB) {
      return 1;
   }
   return 0;
};

const getAllMarkdownPages = () => {
   // import.meta.glob will not handle dynamic variables.
   // Must import all and filter manually.
   // https://docs.astro.build/en/guides/imports/#supported-values
   return import.meta.glob(['/src/pages/**/*.md'], { eager: true });
};

const getPath = (url) => {
   return url.split('/').filter((i) => i);
};

const isIndexPage = (page) => {
   return page.file.endsWith('index.md') || page.file.endsWith('index.astro');
};

const getPageData = (page, currentPath) => {
   const path = getPath(page.url);
   const spriteId = page.frontmatter?.spriteId || path[path.length - 1];
   const isCurrentPage =
      currentPath.length === path.length &&
      currentPath.every((val, i) => val === path[i]);

   return {
      ...page,
      frontmatter: {
         '@type': 'WebPage',
         ...page.frontmatter,
      },
      url: page.url,
      slug: path.join('-'), //.replace(/\/\//g, ''),
      isCurrentPage: isCurrentPage,
      hasCurrentPage: false,
      spriteId: spriteId,
   };
};

const getTopLevelItems = (results, currentPath) => {
   const items = Object.values(results)
      .filter((page) => {
         const path = getPath(page.url);
         const hideInMenus = page.frontmatter?.hideInMenus;
         return !hideInMenus && path.length === 1 && isIndexPage(page);
      })
      .map((page) => getPageData(page, currentPath));

   items.sort((a, b) => {
      const aOrder = a.frontmatter?.menuSortOrder || 9999;
      const bOrder = b.frontmatter?.menuSortOrder || 9999;
      return aOrder - bOrder;
   });

   return items;
};

const getLevelTwoItems = (results, currentPath) => {
   const items = Object.values(results)
      .filter((page) => {
         const pagePath = getPath(page.url);
         const hideInMenus = page.frontmatter?.hideInMenus;

         return (
            !hideInMenus && pagePath[0] === currentPath[0] && !isIndexPage(page)
         );
      })
      .map((page) => getPageData(page, currentPath));

   return items.sort(sortPages);
};

export const getCurrentLevelOneItem = (frontmatter) => {
   const results = getAllMarkdownPages();
   const currentPath = getPath(frontmatter.url);

   const items = Object.values(results)
      .filter((page) => {
         const path = getPath(page.url);

         return (
            path.length === 1 && isIndexPage(page) && path[0] === currentPath[0]
         );
      })
      .map((page) => getPageData(page, currentPath));

   return items[0];
};

export const getMenuItems = (frontmatter, path = null) => {
   const results = getAllMarkdownPages();
   const currentPath = getPath(frontmatter.url);

   if (path === '/' || currentPath.length === 0) {
      return getTopLevelItems(results, currentPath);
   }

   return getLevelTwoItems(results, currentPath);
};

export const getMobileMenuItems = (frontmatter) => {
   const currentPath = getPath(frontmatter.url);
   const results = getAllMarkdownPages();
   const topItems = getTopLevelItems(results, currentPath);
   const menuItems = {
      top: topItems,
      children: {},
   };
   topItems.forEach((item) => {
      const subItems = getLevelTwoItems(results, getPath(item.url));
      subItems.forEach((subItem) => {
         if (frontmatter.url === subItem.url) {
            subItem.isCurrentPage = true;
         }
      });
      menuItems.children[item.slug] = subItems;
      if (subItems.find((i) => i.isCurrentPage)) {
         item.hasCurrentPage = true;
      }
   });
   return menuItems;
};
