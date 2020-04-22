module.exports = {
  siteMetadata: {
    title: 'Tarik',
    author: 'Tarik Kdiry',
    email: 'mailto:tarik.kdiry@gmail.com',
    facebook: 'https://www.facebook.com/Tarik.Kdiry/',
    instagram: 'https://www.instagram.com/tarik_kdiry/',
    twitter: 'https://twitter.com/ehsotarik',
    linkedIn: 'https://www.linkedin.com/in/tarik-kdiry-0b62b8100/',
    gitHub: 'https://github.com/tarikkdiry'
  },
  plugins: [
    // `gatsby-plugin-sass`,
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-remark-emojis',
      options: {
        // Deactivate the plugin globally (default: true)
        active : true,
        // Add a custom css class
        class  : 'emoji-icon',
        // Select the size (available size: 16, 24, 32, 64)
        size   : 64,
        // Add custom styles
        styles : {
          display      : 'inline',
          margin       : '0',
          'margin-top' : '1px',
          position     : 'relative',
          top          : '5px',
          width        : '25px'
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'kpvam4whsk4z',
        accessToken: 'gkewNGQJvSXQnajJhpcMl_WbG-u07bnDaL22FgfdnRc'
      }
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }
  ] 
}
