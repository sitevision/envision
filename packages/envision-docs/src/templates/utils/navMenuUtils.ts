import { slugify } from './utils.ts';

interface Page {
   frontmatter?: {
      title?: string;
      menuSortOrder?: number;
      hideInMenus?: boolean;
      spriteId?: string;
      [key: string]: any;
   };
   url: string;
   file: string;
   slug?: string;
   isCurrentPage?: boolean;
   hasCurrentPage?: boolean;
   spriteId?: string;
   [key: string]: any;
}

interface Frontmatter {
   url: string;
   [key: string]: any;
}

const sortPages = (a: Page, b: Page): number => {
   const titleA = a.frontmatter?.title?.toUpperCase() || '';
   const titleB = b.frontmatter?.title?.toUpperCase() || '';
   if (titleA < titleB) return -1;
   if (titleA > titleB) return 1;
   return 0;
};

const getAllMarkdownPages = (): Record<string, unknown> => {
   return import.meta.glob(['/src/pages/**/*.md', '/src/pages/**/*.mdx'], { eager: true });
};

const getPath = (url: string): string[] => {
   return url.split('/').filter((i) => i);
};

const isIndexPage = (page: Page): boolean => {
   return page.file.endsWith('index.md') || page.file.endsWith('index.astro');
};

const getPageData = (page: Page, currentPath: string[]): Page => {
   const path = getPath(page.url);
   const spriteId = page.frontmatter?.spriteId || path[path.length - 1];
   const isCurrentPage =
      currentPath.length === path.length &&
      currentPath.every((val: string, i: number) => val === path[i]);

   return {
      ...page,
      frontmatter: {
         '@type': 'WebPage',
         ...page.frontmatter,
      },
      url: page.url,
      slug: slugify(page.url),
      isCurrentPage: isCurrentPage,
      hasCurrentPage: false,
      spriteId: spriteId,
   };
};

const getTopLevelItems = (
   results: Record<string, unknown>,
   currentPath: string[]
): Page[] => {
   const pages = Object.values(results) as Page[];
   const items = pages
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

const getLevelTwoItems = (
   results: Record<string, unknown>,
   currentPath: string[]
): Page[] => {
   const pages = Object.values(results) as Page[];
   const items = pages
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

export const getCurrentLevelOneItem = (
   frontmatter: Frontmatter
): Page | undefined => {
   const results = getAllMarkdownPages();
   const currentPath = getPath(frontmatter.url);

   const pages = Object.values(results) as Page[];
   const items = pages
      .filter((page) => {
         const path = getPath(page.url);
         return (
            path.length === 1 && isIndexPage(page) && path[0] === currentPath[0]
         );
      })
      .map((page) => getPageData(page, currentPath));

   return items[0];
};

export const getMenuItems = (
   frontmatter: Frontmatter,
   path: string | null = null
): Page[] => {
   const results = getAllMarkdownPages();
   const currentPath = getPath(frontmatter.url);

   if (path === '/' || currentPath.length === 0) {
      return getTopLevelItems(results, currentPath);
   }

   return getLevelTwoItems(results, currentPath);
};

export const getMobileMenuItems = (
   frontmatter: Frontmatter
): { top: Page[]; children: { [index: string]: Page[] } } => {
   const currentPath = getPath(frontmatter.url);
   const results = getAllMarkdownPages();
   const topItems = getTopLevelItems(results, currentPath);
   const menuItems: { top: Page[]; children: { [index: string]: Page[] } } = {
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
      menuItems.children[item.slug!] = subItems;
      if (subItems.find((i) => i.isCurrentPage)) {
         item.hasCurrentPage = true;
      }
   });
   return menuItems;
};
