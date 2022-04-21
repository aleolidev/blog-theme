import React from "react"
import { graphql } from "gatsby"
import { Column, Container, Content, ContentCard, FeatureImage, Grid, Pagination, Seo } from "../components"

const allArticles = ({pageContext, data}) => {
    const { currentPage, numPages } = pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`
    const nextPage = `/${currentPage + 1}`

    const articles = data.allMdx.edges

    const title = "Main page"
    const description = "This is the description of the main page"
    const author = "Author"

    return (
        <Container>
            <Seo title={ title } description={ description } author={ author } />
            <FeatureImage />
            <Content>
                <Grid columns={3} mobileColumns={1} gap={"2em"}>
                {articles.map(article => {
                    const category = article.node.frontmatter.categories[0]
                    return (
                        <Column style={{margin: '1em 0'}}>
                            <ContentCard 
                                key={article.node.frontmatter.slug}
                                date={article.node.frontmatter.date}
                                title={article.node.frontmatter.title}
                                image={article.node.frontmatter.featureImage.childImageSharp.gatsbyImageData}
                                slug={article.node.frontmatter.slug}
                                category={category}
                            />
                        </Column>
                    )
                    })}
                </Grid>
            </Content>
            <Pagination 
                isFirst={isFirst}
                isLast={isLast}
                prevPage={prevPage}
                nextPage={nextPage}
            />
        </Container>
    )
}

export default allArticles

export const pageQuery = graphql`
    query AllArticlesQuery($skip: Int!, $limit: Int!) {
        allMdx(sort: {fields: frontmatter___date, order: DESC}, skip: $skip, limit: $limit) {
            edges {
                node {
                    frontmatter {
                        slug
                        title
                        categories
                        date(formatString: "DD/MM/YYYY")
                        excerpt
                        featureImage {
                            childImageSharp {
                                gatsbyImageData(placeholder: BLURRED)
                            }
                        }
                    }
                }
            }
        }
    }
`