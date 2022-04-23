import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { H1 } from "../elements"
import { useMediaQuery } from "@material-ui/core"
import { Container, Article, FeatureImage, Seo, Breadcrumb, ToC } from "../components"

const SingleArticle = ({pageContext, data, location }) => {
    const featureImage = data.mdx.frontmatter.featureImage.childImageSharp.gatsbyImageData;
    const headings = data.mdx.headings;
    const seoImage = data.mdx.frontmatter.featureImage.publicURL

    const isTablet = useMediaQuery('(max-width: 65rem)', { noSsr: true })
    const isMobile = useMediaQuery('(max-width: 50rem)', { noSsr: true })

    let { breadcrumb: { crumbs } } = pageContext

    crumbs = crumbs.map(crumb => {
        let prettyName = crumb
        
        prettyName.crumbLabel = prettyName.crumbLabel.toLowerCase().replaceAll('-', ' ').replaceAll('/', '')
        prettyName.crumbLabel = prettyName.crumbLabel.charAt(0).toUpperCase() + prettyName.crumbLabel.slice(1) // Capitalize

        return prettyName
    })

    return (
        <Container>
            <Seo
                title={ data.mdx.frontmatter.title }
                image={ seoImage }
                description={ data.mdx.frontmatter.excerpt }
            />
            {
                !isMobile 
                ?
                    <FeatureImage image={ featureImage } alt={ data.mdx.frontmatter.title } />
                :
                    <></>
            }
            { 
                (headings !== null && headings !== undefined && headings.length > 0 && !isTablet) 
                ?
                    <ToC headings={headings} isMobile={false} />
                : 
                    <></>
            }
            <Article>
                <Breadcrumb
                    crumbs={crumbs}
                    crumbSeparator=" » "
                />
                <H1 margin="0 0 2rem 0">
                    {data.mdx.frontmatter.title}
                </H1>
                { 
                    (headings !== null && headings !== undefined && headings.length > 0 && isTablet) 
                    ?
                        <ToC headings={headings} isMobile={true} />
                    : 
                        <></>
                }
                <MDXRenderer>
                    {data.mdx.body}
                </MDXRenderer>
            </Article>
        </Container>
    )
}

export default SingleArticle;

export const pageQuery = graphql`
    query SingleArticleQuery($id: String!) {
        mdx(id: {eq: $id}) {
            body
            frontmatter {
              date
              excerpt
              title
              slug
              featureImage {
                publicURL
                childImageSharp {
                    gatsbyImageData(placeholder: BLURRED)
                }
              }
            }
            headings {
                value
                depth
            }
        }
    }
`