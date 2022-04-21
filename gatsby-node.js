exports.createPages = async ({ actions, graphql }) => {
    const { data } = await graphql(`
        query {
            allMdx(sort: {fields: frontmatter___date, order: DESC}) {
                edges {
                  node {
                    frontmatter {
                        categories
                        slug
                    }
                    id
                  }
                }
            }
        }
    `)

    // Create paginated pages for articles

    const articlePerPage = 3

    const numPages = Math.ceil(data.allMdx.edges.length / articlePerPage)

    Array.from({ length: numPages }).forEach((_, i) => {
        actions.createPage({
            path: i === 0 ? `/` : `/${i + 1}`,
            component: require.resolve("./src/templates/allArticles.js"),
            context: {
                limit: articlePerPage,
                skip: i * articlePerPage,
                numPages,
                currentPage: i + 1,
            }
        })
    })

    // Create single category

    const dedupeCategories = (allMdx) => {
        const uniqueCategories = new Set()
        allMdx.edges.forEach(({ node }) => {
            node.frontmatter.categories.forEach(category => {
                uniqueCategories.add(category)
            })
        })

        return Array.from(uniqueCategories)
    }

    const dedupedCategories = dedupeCategories(data.allMdx)

    dedupedCategories.forEach(category => {
        actions.createPage({
            path: `${category}`,
            component: require.resolve("./src/templates/singleCategory.js"),
            context: {
                category,
                ids: data.allMdx.edges
                    .filter(({ node }) => {
                        return node.frontmatter.categories.includes(category)
                    })
                    .map(({ node }) => node.id),
            },
        })
    })

    // Create single blog article

    data.allMdx.edges.forEach(edge => {
        const slug = edge.node.frontmatter.slug
        const category = edge.node.frontmatter.categories[0]
        const id = edge.node.id

        actions.createPage({
            path: `${category}/${slug}`,
            component: require.resolve(`./src/templates/singleArticle.js`),
            context: { id, },
        })
    })
}