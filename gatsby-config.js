module.exports = {
  siteMetadata: {
    title: 'Tarik',
    author: 'Tarik Kdiry'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark' //JS library for parsing Markdown
  ] 
}
