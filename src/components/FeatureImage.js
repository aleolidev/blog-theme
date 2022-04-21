import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import { FeatureImageWrapper } from "../elements"

export const FeatureImage = ({ image }) => {

    const data = useStaticQuery(graphql`
        {
            file(relativePath: { eq: "laptop.jpeg" }) {
                childImageSharp {
                    gatsbyImageData(
                        layout: FIXED
                        placeholder: BLURRED
                    )
                }
            }
        }
    `)

    return (
        <FeatureImageWrapper>
            <GatsbyImage 
                image={ image ? image : data.file.childImageSharp.gatsbyImageData } 
                alt="" 
                loading="eager"
                style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                height: "100%"
            }} 
            />
        </FeatureImageWrapper>
    )
}