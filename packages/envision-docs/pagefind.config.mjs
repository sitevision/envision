export default {
   site: '../../docs',
   outputPath: './static/pagefind',
   mirrorOutputPath: '../../docs/pagefind',
   indexConfig: {
      rootSelector: '#content',
      forceLanguage: 'en',
      excludeSelectors: ['[data-pagefind-ignore]'],
      keepIndexUrl: false,
   },
};
