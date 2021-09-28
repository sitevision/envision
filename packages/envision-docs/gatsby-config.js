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
                     inlineCodeMarker: '~',
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
            icon: 'static/images/envision_logo.png',
         },
      },
   ],
};
