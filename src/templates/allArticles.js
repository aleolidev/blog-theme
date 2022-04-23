import React from "react"
import { graphql } from "gatsby"
import { Column, Container, Content, ContentCard, FeatureArticle, Grid, Seo } from "../components"
import theme from "../themes/theme"
import { useMediaQuery } from "@material-ui/core"

const AllArticles = ({pageContext, data}) => {
    // const { currentPage, numPages } = pageContext
    // const isFirst = currentPage === 1
    // const isLast = currentPage === numPages
    // const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`
    // const nextPage = `/${currentPage + 1}`

    let articles = data.allMdx.edges

    const featuredArticle = articles[0]
    const featuredImage = featuredArticle.node.frontmatter.featureImage.childImageSharp.gatsbyImageData;
    const featuredCategory = featuredArticle.node.frontmatter.categories[0]
    const featuredSlug = featuredArticle.node.frontmatter.slug

    const title = "Main page"
    const description = "This is the description of the main page"
    const author = "Author"

    const isMobile = useMediaQuery('(max-width: 50rem)', { noSsr: true })

    return (
        <Container>
            <Seo title={ title } description={ description } author={ author } />
            {
                isMobile
                ?
                <Content mobilePadding={'0'} hideBanner={ true } tabletGridColumn={'1 / span 8'}>
                    {articles.map((article, index) => {
                        const category = article.node.frontmatter.categories[0]
                        return (
                            <FeatureArticle 
                                title={ article.node.frontmatter.title } 
                                image={ article.node.frontmatter.featureImage.childImageSharp.gatsbyImageData } 
                                href={ `/${category}/${article.node.frontmatter.slug}/` }
                                gridRow={() => {
                                    console.log(`${1 + (index * 2)} / span 2`)
                                    return (`${1 + (index * 2)} / span 2`)
                                }} 
                            />
                        )
                    })}
                </Content>
                :
                <>
                    <FeatureArticle image={ featuredImage } title={ featuredArticle.node.frontmatter.title } href={ `/${featuredCategory}/${featuredSlug}/` } />
                    <Content padding={ `${ theme.spacings.small } ${ theme.spacings.xLarge }` } tabletGridColumn={'1 / span 8'}>
                        <Grid columns={3} mobileColumns={1} gap={"2em"}>
                            {articles.map((article, index) => {
                                if (index > 0) {
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
                                } return null;
                            })}
                        </Grid>
                    </Content>
                </>
            }
        </Container>
    )
}

export default AllArticles

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