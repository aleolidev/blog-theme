import React from "react"
import { graphql } from "gatsby"
import { Container, Content, FeatureImage } from "../components"
import { H1 } from "../elements"
import { error404 } from "../translations/translations"

const notFound = ({ data }) => {
    const featureImage = data.file.childImageSharp.gatsbyImageData;

    return (
        <Container>
            <FeatureImage image={ featureImage } hideOnMobile={ false } />
            <Content>
                <H1 textAlign="center" margin="0 0 1rem 0">
                    {" "}
                    { error404.message }
                </H1>
            </Content>
        </Container>
    )
}

export default notFound;

export const notFoundQuery = graphql`
    query NotFoundQuery {
        file(relativePath: { eq: "not-found.jpeg" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`