import React from "react"
import { graphql } from "gatsby"
import { Articles, Container, Content, Pagination, Seo } from "../components"
import { H1 } from "../elements"
import theme from "../themes/theme"
import { capitalize, slugify } from "../utils/utils"

const SingleCategory = ({pageContext, data}) => {
    const articles = data.allMdx.edges

    const { currentPage, numPages, category, lang } = pageContext
    const prettyCategory = slugify(category)
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? `/${lang}/${prettyCategory}` : `/${lang}/${prettyCategory}/${currentPage - 1}`
    const nextPage = `/${lang}/${prettyCategory}/${currentPage + 1}`
    const url = typeof window !== 'undefined' ? window.location.href : '';

    // TODO: Change default metadata for categories
    let title = capitalize(pageContext.category.replaceAll('-', ' '))
    const description = `This is the description of the ${pageContext.category} category`
    const author = "Author"

    return (
        <Container>
            <Seo title={ title } description={ description } author={ author } lang={lang} keywords={ "" } url={ url } />
            <Content hideBanner={ true } padding={`${theme.spacings.large} ${theme.spacings.xLarge}`}>
                <H1 margin="0 0 .75em 0">
                    {title}
                </H1>
                <Articles articles={ articles } lang={lang}/>
                {(numPages > 1) &&
                    <Pagination 
                        isFirst={isFirst}
                        isLast={isLast}
                        prevPage={prevPage}
                        nextPage={nextPage}
                        padding={"2em 0 .5em 0"}
                    />
                }
            </Content>
        </Container>
    )
}

export const query = graphql`
  query SingleCategoryQuery($ids: [String]!, $skip: Int!, $limit: Int!, $lang: String!) {
    allMdx(
      filter: {id: {in: $ids}, frontmatter: {lang: {eq: $lang}}} 
      sort: {fields: frontmatter___modifiedDate, order: DESC}
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            date
            modifiedDate
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

export default SingleCategory