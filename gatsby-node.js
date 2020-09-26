/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
    const { createPage, createRedirect } = actions
    createRedirect({ fromPath: '/', toPath: '/app/', isPermanent: true })
  
    // page.matchPath is a special key that's used for matching pages
    // only on the client.
    if (page.path.match(/^\/app/)) {
      page.matchPath = "/app/*"
  
      // Update the page.
      createPage(page)
    }
    
  }

  // exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  //   if (stage === 'build-html') {
  //     // Exclude Sign-In Widget from compilation path
  //     actions.setWebpackConfig({
  //       module: {
  //         rules: [
  //           {
  //             test: /app/,
  //             use: loaders.null(),
  //           }
  //         ],
  //       },
  //     })
  //   }
  // };