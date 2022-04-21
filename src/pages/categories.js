import React from "react"
import { graphql } from "gatsby"
import { Column, Container, Content, Grid, Seo } from "../components"
import { A, H1 } from "../elements"
import theme from "../themes/theme"

const Categories = ({ data }) => {
    const title = "Categories"
    const description = "This is the description of the categories page"
    const author = "Author"
    
    const dedupeCategories = (allMdx) => {
        const uniqueCategories = new Set()
        allMdx.edges.forEach(({ node }) => {
            node.frontmatter.categories.forEach(category => {
                uniqueCategories.add(category)
            })
        })

        return Array.from(uniqueCategories)
    }

    const dedupedCategories = dedupeCategories(data.allMdx);

    return (
        <Container>
            <Seo title={ title } description={ description } author={ author } />
            <Content hideBanner={true} padding={`${theme.spacings.large} ${theme.spacings.xLarge}`}>
                <H1 margin="0 0 .75em 0" mobileTextAlign="center">
                    Categories
                </H1>
                <Grid columns={3} mobileColumns={1} gap={"2em"}>
                    { 
                        dedupedCategories.map((category) => {
                            let prettyName = category.replaceAll('-', ' ');
                            prettyName = prettyName.charAt(0).toUpperCase() + prettyName.slice(1) // Capitalize

                            return (
                                <Column style={{margin: '1em 0'}}>
                                    <A href={`/${category}`} mobileTextAlign="center">
                                        {prettyName}
                                    </A>
                                </Column>
                            )
                        })
                    }
                </Grid>
            </Content>
        </Container>
    )
}

export default Categories;

export const CategoriesQuery = graphql`
    query CategoriesQuery {
        allMdx(sort: {fields: frontmatter___slug, order: ASC}) {
            edges {
                node {
                    frontmatter {
                        categories
                    }
                }
            }
        }
    }
`