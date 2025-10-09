/* globals module:false, __dirname:false */

module.exports = {
   flags: {
      DEV_SSR: true,
   },
   siteMetadata: {
      title: 'Sitevision Envision',
      description: 'UI library by Sitevision',
      author: '@sitevision',

      menuCategories: [
         {
            title: 'Colors',
            slug: 'colors',
            spriteId: 'colors',
            description:
               'Color classes and variables for elements, components and layouts.',
         },
         {
            title: 'Typography',
            slug: 'typography',
            spriteId: 'typography',
            description:
               'Classes, variables and utils for website text styles.',
         },
         {
            title: 'Forms',
            slug: 'forms',
            spriteId: 'forms',
            description: 'Form elements, components, buttons and more.',
         },
         {
            title: 'Components',
            slug: 'components',
            spriteId: 'application',
            description:
               'Ready to use components for your Sitevision projects.',
         },
         {
            title: 'Utils',
            slug: 'utils',
            spriteId: 'utils',
            description:
               'Miscellaneous utility classes for accessibility, styling and more.',
         },
         {
            title: 'Layout',
            slug: 'layout',
            spriteId: 'layout',
            description: 'Utility classes for creating component layouts.',
         },
         {
            title: 'Dashboard Widgets',
            slug: 'dashboard',
            spriteId: 'dashboard',
            description:
               'An extension to Envision that should be used when creating Sitevision Dashboard Widgets.',
         },
         {
            title: 'Deprecated',
            slug: 'deprecated',
            spriteId: 'deprecated',
            description:
               'Documentation for deprecated versions of Envision components.',
            hideInMenus: true,
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
                           language: 'html-resizeable',
                           extend: 'html',
                           definition: {
                              superscript_types: /(SuperType)/,
                           },
                        },
                        {
                           language: 'css-no-expand',
                           extend: 'css',
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
                        table: 'doc-table',
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
      `gatsby-plugin-meta-redirect`, // make sure to put last in the array
   ],
};
