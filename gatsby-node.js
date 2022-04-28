const { slugify } = require("./src/utils/utils")

exports.createPages = async ({ actions, graphql }) => {
    const langs = [
        'en-US',
        'de-DE',
        'en-AU',
        'en-GB',
        'fr-FR',
        'en-CA',
        'es-ES'
    ]
    
    const { createRedirect } = actions
    
    createRedirect({
        fromPath: `/`,
        toPath: `/${langs[0]}`,
        redirectInBrowser: true,
        isPermanent: true,
    })

    for(let lang in langs) {
        const { data } = await graphql(`
            query {
                allMdx(
                    sort: {fields: frontmatter___date, order: DESC}
                    filter: {frontmatter: {lang: {eq: "${langs[lang]}"}}}
                ) {
                    edges {
                      node {
                        frontmatter {
                            category
                            slug
                            products {
                                description
                                href
                                img
                                name
                                stars
                            }
                        }
                        id
                      }
                    }
                }
            }
        `)
    
        // Create paginated pages for articles
    
        const articlePerPage = 10
    
        const numPages = Math.ceil(data.allMdx.edges.length / articlePerPage)

        Array.from({ length: numPages }).forEach((_, i) => {
            actions.createPage({
                path: i === 0 ? `/${langs[lang]}/` : `/${langs[lang]}/${i + 1}`,
                component: require.resolve("./src/templates/allArticles.js"),
                context: {
                    lang: langs[lang],
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
                uniqueCategories.add(node.frontmatter.category)
            })
    
            return Array.from(uniqueCategories)
        }
    
        const dedupedCategories = dedupeCategories(data.allMdx)
        const articlesPerCategoryPage = 10
    
        dedupedCategories.forEach(category => {
    
            const prettyCategory = slugify(category)
            const categoryIds = data.allMdx.edges.filter(({ node }) => {
                return node.frontmatter.category.includes(category)
            }).map(({ node }) => node.id)
            
            const numCategoryPages = Math.ceil(categoryIds?.length / articlesPerCategoryPage)
    
            Array.from({ length: numCategoryPages }).forEach((_, i) => {
                actions.createPage({
                    path: i === 0 ? `${langs[lang]}/${prettyCategory}` : `${langs[lang]}/${prettyCategory}/${i + 1}`,
                    component: require.resolve("./src/templates/singleCategory.js"),
                    context: {
                        lang: langs[lang],
                        category,
                        ids: categoryIds,
                        limit: articlesPerCategoryPage,
                        skip: i * articlesPerCategoryPage,
                        numPages: numCategoryPages,
                        currentPage: i + 1,
                    },
                })
            })
        })
    
        // Create single blog article
    
        data.allMdx.edges.forEach(edge => {
            const slug = edge.node.frontmatter.slug
            const category = edge.node.frontmatter.category
            const prettyCategory = slugify(category)
            const id = edge.node.id
    
            actions.createPage({
                path: `${langs[lang]}/${prettyCategory}/${slug}`,
                component: require.resolve(`./src/templates/singleArticle.js`),
                context: { 
                    lang: langs[lang],
                    id, 
                },
            })
        })
    }
}