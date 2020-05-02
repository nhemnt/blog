/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
/* Your site config here */

  siteMetadata: {
    title: "Hemant Negi",
    description: "Personal blog by Hemant Negi. Less talkin, More coding.",
    image: "/images/hemant.png", 
    twitterUsername: "@nhemnt",
    githubUsername: "nhemnt"
  },
  plugins: [
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `posts`,
    //     path: `src/posts`,
    //   },
    // },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `./src/posts/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [{
          resolve: `gatsby-remark-images`,
        }]
      },
    },
 
    
    
  ],
  
}
