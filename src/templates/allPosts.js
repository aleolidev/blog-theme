import React from "react"
import { graphql } from "gatsby"
import { Container, Content, ContentCard, FeatureImage, Pagination, Seo } from "../components"
import { H1, P } from "../elements"

const allPosts = ({pageContext, data}) => {
    const { currentPage, numPages } = pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`
    const nextPage = `/${currentPage + 1}`

    const posts = data.allMdx.edges

    return (
        <Container>
            <Seo />
            <FeatureImage />
            <Content>
                <H1 textAlign="center" margin="0 0 1rem 0">
                    Some dummy text
                </H1>
                <P color="dark2" textAlign="center">
                    Blandit eos eu lorem ut aliquam sit. Accusam ipsum et voluptua et consetetur duo. Dolor ipsum at no duo ex volutpat ipsum. Sea ipsum magna dolor nibh nulla et diam sanctus dolore exerci at magna gubergren kasd feugait et. Et dolor gubergren possim ut sadipscing adipiscing. Lorem feugiat stet consequat invidunt eirmod elitr in. Et rebum et sea sed lorem tation et consectetuer sed invidunt dolor vero sed justo dolor.
                </P>
                {posts.map(post => (
                    <ContentCard 
                        key={post.node.frontmatter.slug}
                        date={post.node.frontmatter.date}
                        title={post.node.frontmatter.title}
                        excerpt={post.node.frontmatter.excerpt}
                        slug={post.node.frontmatter.slug}
                    />
                ))}
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

export default allPosts

export const pageQuery = graphql`
    query AllPostsQuery($skip: Int!, $limit: Int!) {
        allMdx(sort: {fields: frontmatter___date, order: DESC}, skip: $skip, limit: $limit) {
            edges {
                node {
                    frontmatter {
                        slug
                        title
                        date(formatString: "DD/MM/YYYY")
                        excerpt
                    }
                }
            }
        }
    }
`