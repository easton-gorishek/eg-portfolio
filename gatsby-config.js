module.exports = {
  siteMetadata: {
    title: `Gatsby Portfolio`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: 'q5m4ayfot88b',
        accessToken: '8ed59997235f069707b49a4aa2f9401ec8a97afb55da957a1280ec308e3534b5'
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`
  ]
}