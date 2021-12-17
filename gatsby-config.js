module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'Frontend Masters Intro to Gatsby',
    description: 'Galaxy!',
    image:
      'https://w.namu.la/s/b09dc27502474f95e7191d56713d71214d49111b9870f25253b3b8ca6013a1ccd940972615c800d560ae9dd1fb833016c013e9cd413007196b228c45e6af0b77a0eb91ea148b43058f5bb797dc244db823fd904c870b2318e76561253a5f2265729309d83f052cece1f4ac31506892e5',
    who: 'galaxy',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/posts`,
      },
    },
    'gatsby-remark-images',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            option: {
              maxWidth: 1200,
            },
          },
        ],
        defaultLayouts: {
          posts: require.resolve('./src/components/post-layout.js'),
        },
      },
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'vnkupgyb',
        dataset: 'production',
      },
    },
  ],
};
