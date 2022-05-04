import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { H1 } from "../elements"
import { Container, Article, FeatureImage, Seo, Breadcrumb, ToC, Date } from "../components"
import { breadcrumb } from "../translations/translations"
import ShareButtons from "../components/ShareButtons"
import styled from "styled-components"
import { capitalize } from "../utils/utils"

const SingleArticle = ({pageContext, data, location }, props) => {
    const featureImage = data.mdx.frontmatter.featureImage.childImageSharp.gatsbyImageData;
    const headings = data.mdx.headings;
    const seoImage = data.mdx.frontmatter.featureImage.publicURL
    const products = data.mdx.frontmatter.products

    const url = typeof window !== 'undefined' ? window.location.href : '';
    const title = data.mdx.frontmatter.title;
    const excerpt = data.mdx.frontmatter.excerpt;
    const date = data.mdx.frontmatter.date;
    const modifiedDate = data.mdx.frontmatter.modifiedDate;

    let { breadcrumb: { crumbs }, lang } = pageContext

    crumbs = crumbs.map((crumb, i) => {
        if (i > 0) {
            let prettyName = crumb
            if (i > 1) {
                prettyName.crumbLabel = capitalize(prettyName.crumbLabel.toLowerCase().replaceAll('-', ' ').replaceAll('/', ''))
            } else {
                prettyName.crumbLabel = breadcrumb.home[lang]
            }
            return prettyName
        }
        return crumb;
    })

    return (
        <Container>
            <Seo
                title={ data.mdx.frontmatter.title }
                image={ seoImage }
                description={ data.mdx.frontmatter.excerpt }
                lang={lang}
            />
            <FeatureImage image={ featureImage } alt={ data.mdx.frontmatter.title } hideOnMobile={ true } />
            <ToC isTablet={ false } headings={headings ? headings : []} lang={ lang } />
            <Article>
                <Breadcrumb
                    crumbs={crumbs.slice(1, crumbs.length)}
                    crumbSeparator=" » "
                />
                <H1 
                    margin="1.5rem 0 0 0 !important"
                    tabletMargin=".75rem 0 0 0 !important"
                    mobileMargin="0 0 .25rem 0 !important"
                >
                    {data.mdx.frontmatter.title}
                </H1>
                <DateShareWrapper>
                    <ShareButtons url={ url } title={ title } description={ excerpt } />
                    <Date lang={ lang } originalDate={ date } modifiedDate={ modifiedDate } />
                </DateShareWrapper>
                <MDXRenderer headings={headings} lang={lang} img={ featureImage } products={ products }>
                    {data.mdx.body}
                </MDXRenderer>
            </Article>
        </Container>
    )
}

export default SingleArticle;

export const pageQuery = graphql`
    query SingleArticleQuery($id: String!, $lang: String!) {
        mdx(
            id: {eq: $id}
            frontmatter: {lang: {eq: $lang}}
            ) {
            body
            frontmatter {
              date
              modifiedDate
              excerpt
              title
              slug
              featureImage {
                publicURL
                childImageSharp {
                    gatsbyImageData(placeholder: BLURRED)
                }
              }
              products {
                image {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED)
                  }
                }
                href
                description
                stars
                name
                tags
              }
            }
            headings {
                value
                depth
            }
        }
    }
`

const DateShareWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1rem;

    @media ${props => props.theme.breakpoints.mobile} {    
        margin-top: .75rem;
    }
`