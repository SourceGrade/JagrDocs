module.exports = {
  siteMetadata: {
    siteTitle: `JagrKt`,
    defaultTitle: `JagrKt`,
    siteTitleShort: `JagrKt`,
    siteDescription: ``,
    siteUrl: `http://www.jagrkt.org`,
    siteAuthor: 'alexstaeding',
    siteImage: ``,
    siteLanguage: `en`,
    themeColor: `#8257E6`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/JagrKt/JagrKtDocs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocketseat Gatsby Themes`,
        short_name: `RS Gatsby Themes`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/JagrKtFavicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://rocketdocs.netlify.com`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
  ],
};
