import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { H1 } from "../elements"
import { Container, Post, FeatureImage, Seo, Breadcrumb } from "../components"

const singlePost = ({pageContext, data, location }) => {
    const featureImage = data.mdx.frontmatter.featureImage.childImageSharp.gatsbyImageData;

    const seoImage = data.mdx.frontmatter.featureImage.publicURL

    const {
        breadcrumb: { crumbs },
    } = pageContext
    
    let customCrumbLabel = location.pathname.toLowerCase().replace('-', ' ').replaceAll('/', '')
    customCrumbLabel = customCrumbLabel.charAt(0).toUpperCase() + customCrumbLabel.slice(1) // Capitalize

    return (
        <Container>
            <Seo
                title={ data.mdx.frontmatter.title }
                image={ seoImage }
                description={ data.mdx.frontmatter.excerpt }
            />
            <FeatureImage image={ featureImage } />
            <Post>
                <Breadcrumb
                    crumbs={crumbs}
                    crumbSeparator=" » "
                    crumbLabel={customCrumbLabel}
                />
                <H1 margin="0 0 2rem 0">
                    {data.mdx.frontmatter.title}
                </H1>
                <MDXRenderer>
                    {data.mdx.body}
                </MDXRenderer>
            </Post>
        </Container>
    )
}

export default singlePost;

export const pageQuery = graphql`
    query SinglePostQuery($id: String!) {
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
                    gatsbyImageData(layout: FIXED)
                }
              }
            }
        }
    }
`