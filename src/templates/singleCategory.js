import React from "react"
import { graphql } from "gatsby"
import { Articles, Container, Content, Pagination, Seo } from "../components"
import { H1 } from "../elements"
import theme from "../themes/theme"

const SingleCategory = ({pageContext, data}) => {
    const articles = data.allMdx.edges

    const { currentPage, numPages, category, articlesPerPage } = pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? `/${category}` : `/${category}/${currentPage - 1}`
    const nextPage = `/${category}/${currentPage + 1}`

    let title = pageContext.category.replaceAll('-', ' ')
    title = title.charAt(0).toUpperCase() + title.slice(1) // Capitalize
    const description = `This is the description of the ${pageContext.category} category`
    const author = "Author"

    return (
        <Container>
            <Seo title={ title } description={ description } author={ author } />
            <Content hideBanner={ true } padding={`${theme.spacings.large} ${theme.spacings.xLarge}`}>
                <H1 margin="0 0 .75em 0" mobileTextAlign="center">
                    {title}
                </H1>
                <Articles articles={ articles }/>
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
  query SingleCategoryQuery($ids: [String]!, $skip: Int!, $limit: Int!) {
    allMdx(filter: { id: { in: $ids } }, sort: {fields: frontmatter___date, order: DESC}, skip: $skip, limit: $limit) {
      edges {
        node {
          frontmatter {
            slug
            title
            date(formatString: "DD/MM/YYYY")
            excerpt
            author
            categories
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