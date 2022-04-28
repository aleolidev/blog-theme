import React from "react"
import { graphql } from "gatsby"
import { Articles, Column, Container, Content, ContentCard, FeatureArticle, Grid, Pagination, Seo } from "../components"
import theme from "../themes/theme"
import { useMediaQuery } from "@material-ui/core"
import { slugify } from "../utils/utils"

const AllArticles = ({ pageContext, data }) => {
    const { currentPage, numPages, lang } = pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? `/${lang}` : `/${lang}/${currentPage - 1}`
    const nextPage = `/${lang}/${currentPage + 1}`

    
    let articles = data.allMdx.edges
    
    const featuredArticle = articles[0]
    const featuredImage = featuredArticle.node.frontmatter.featureImage.childImageSharp.gatsbyImageData;
    const featuredCategory = slugify(featuredArticle.node.frontmatter.category)
    const featuredSlug = featuredArticle.node.frontmatter.slug
    
    const title = "Main page"
    const description = "This is the description of the main page"
    const author = "Author"
    
    const isMobile = useMediaQuery('(max-width: 50rem)')

    return (
        <Container>
            <Seo title={ title } description={ description } author={ author } lang={lang} />
            {
                isMobile
                ?
                <Content mobilePadding={'0'} hideBanner={ true } tabletGridColumn={'1 / span 8'}>
                    {articles.map((article, index) => {
                        const category = article.node.frontmatter.category
                        const prettyCategory = slugify(category)
                        return (
                            <FeatureArticle 
                                title={ article.node.frontmatter.title } 
                                image={ article.node.frontmatter.featureImage.childImageSharp.gatsbyImageData } 
                                href={ `/${lang}/${prettyCategory}/${article.node.frontmatter.slug}/` }
                                gridRow={ () => (`${1 + (index * 2)} / span 2`) } 
                            />
                        )
                    })}
                    {(numPages > 1) &&
                        <Pagination
                            isFirst={isFirst}
                            isLast={isLast}
                            prevPage={prevPage}
                            nextPage={nextPage}
                            padding={"2em 0 .5em 0"}
                    />}
                </Content>
                :
                <>
                    {
                        (currentPage === 1) 
                        ?
                        <>

                            <FeatureArticle image={ featuredImage } title={ featuredArticle.node.frontmatter.title } href={ `/${lang}/${featuredCategory}/${featuredSlug}/` } />
                            <Content padding={ `${ theme.spacings.small } ${ theme.spacings.xLarge }` } tabletGridColumn={'1 / span 8'}>
                                <Grid columns={3} mobileColumns={1} gap={"2em"}>
                                    {articles.map((article, index) => {
                                        if (index > 0 && index < 4) {
                                            const category = article.node.frontmatter.category
                                            const prettyCategory = slugify(category)
                                            return (
                                                <Column style={{margin: '1em 0'}}>
                                                    <ContentCard 
                                                        key={article.node.frontmatter.slug}
                                                        date={article.node.frontmatter.date}
                                                        title={article.node.frontmatter.title}
                                                        image={article.node.frontmatter.featureImage.childImageSharp.gatsbyImageData}
                                                        slug={article.node.frontmatter.slug}
                                                        lang={lang}
                                                        category={prettyCategory}
                                                    />
                                                </Column>
                                            )
                                        } return null;
                                    })}
                                </Grid>
                                {
                                    (articles.length > 4)
                                    ?
                                        <Articles articles={ articles.slice(4, articles.length) } lang={lang}/>
                                    :
                                    null
                                }
                                {(numPages > 1) &&
                                    <Pagination
                                        isFirst={isFirst}
                                        isLast={isLast}
                                        prevPage={prevPage}
                                        nextPage={nextPage}
                                        padding={"2em 0 .5em 0"}
                                />}
                            </Content>
                        </>
                        :
                        <Content 
                            hideBanner={ true } 
                            padding={ `${ theme.spacings.small } ${ theme.spacings.xLarge }` } 
                            tabletGridColumn={'1 / span 8'}
                        >
                            <Articles articles={ articles } lang={lang}/>
                            {(numPages > 1) &&
                                <Pagination
                                    isFirst={isFirst}
                                    isLast={isLast}
                                    prevPage={prevPage}
                                    nextPage={nextPage}
                                    padding={"2em 0 .5em 0"}
                            />}
                        </Content>
                    }
                </>
            }
        </Container>
    )
}

export default AllArticles

export const pageQuery = graphql`
    query AllArticlesQuery($skip: Int!, $limit: Int!, $lang: String!) {
        allMdx(
            filter: {frontmatter: {lang: {eq: $lang}}} 
            sort: {fields: frontmatter___date, order: DESC}
            skip: $skip
            limit: $limit
        ) {
            edges {
                node {
                    frontmatter {
                        slug
                        title
                        date(formatString: "DD/MM/YYYY")
                        excerpt
                        author
                        category
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