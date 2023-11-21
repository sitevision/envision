/* globals module:false, __dirname:false */
const createMenuItem = (label, to) => ({ label, to });
const topMenuItems = [
   createMenuItem('Documentation', '/getting-started/introduction/'),
   createMenuItem('GitHub', 'https://github.com/sitevision/envision'),
   createMenuItem('Sitevision', 'https://www.sitevision.se/'),
];
module.exports = {
   siteMetadata: {
      title: 'Sitevision Envision',
      description: 'UI library by Sitevision',
      author: '@sitevision',
      topMenuItems: topMenuItems,
      menuCategories: [
         {
            title: 'Getting started',
            slug: 'getting-started',
         },
         {
            title: 'Dashboard',
            slug: 'dashboard',
         },
         {
            title: 'Branding',
            slug: 'ui',
         },
         {
            title: 'Components',
            slug: 'components',
         },
         {
            title: 'Utils',
            slug: 'utils',
         },
      ],
   },
   plugins: [
      'gatsby-plugin-sass',
      'gatsby-plugin-react-helmet',
      'gatsby-transformer-sharp',
      'gatsby-plugin-sharp',
      {
         resolve: 'gatsby-transformer-remark',
         options: {
            plugins: [
               {
                  resolve: 'gatsby-remark-prismjs',
                  options: {
                     languageExtensions: [
                        {
                           language: 'html-no-example',
                           extend: 'html',
                           definition: {
                              superscript_types: /(SuperType)/,
                           },
                        },
                        {
                           language: 'js-no-expand',
                           extend: 'javascript',
                           definition: {
                              superscript_types: /(SuperType)/,
                           },
                        },
                     ],
                  },
               },
               {
                  resolve: `gatsby-remark-classes`,
                  options: {
                     classMap: {
                        'heading[depth=1]': 'doc-heading-1',
                        'heading[depth=2]': 'doc-heading-2',
                        'heading[depth=3]': 'doc-heading-3',
                        'heading[depth=4]': 'doc-heading-4',
                        'heading[depth=5]': 'doc-heading-5',
                        'heading[depth=6]': 'doc-heading-6',
                        paragraph: 'doc-p',
                        blockquote: 'doc-blockquote',
                        emphasis: 'doc-em',
                        strong: 'doc-strong',
                        inlineCode: 'doc-code',
                        link: 'doc-link',
                        list: 'doc-list',
                        listItem: 'doc-list__item',
                        image: 'doc-image',
                     },
                  },
               },
            ],
         },
      },
      {
         resolve: 'gatsby-source-filesystem',
         options: {
            path: `${__dirname}/src/pages`,
            name: 'markdown-pages',
         },
      },
      {
         resolve: 'gatsby-plugin-manifest',
         options: {
            name: 'gatsby-starter-default',
            short_name: 'starter',
            start_url: '/',
            background_color: '#444',
            theme_color: '#444',
            display: 'minimal-ui',
            icon: 'static/images/envision_logo.webp',
         },
      },
   ],
};
