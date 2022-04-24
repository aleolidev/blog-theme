import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import { A, FeatureImageWrapper, H1 } from "../elements"
import styled from "styled-components"

export const FeatureArticle = ({ title, href, image, alt, gridRow }) => {

    const data = useStaticQuery(graphql`
        {
            file(relativePath: { eq: "laptop.jpeg" }) {
                childImageSharp {
                    gatsbyImageData
                }
            }
        }
    `)

    return (
        <FeatureImageWrapper gridRow={ gridRow }>
            <A href={ href } style={{width: '100%', height: '100%'}}>
                <BlackCover>
                    <GatsbyImage 
                        image={ image ? image : data.file.childImageSharp.gatsbyImageData } 
                        alt={ alt ? alt : "" }
                        loading="eager"
                        decoding="async"
                    />
                </BlackCover>
                <TitleWrapper>
                    <H1 color="light1" fontWeight="700">
                        { title }
                    </H1>
                </TitleWrapper>
            </A>
        </FeatureImageWrapper>
    )
}

const BlackCover = styled.div`
    position:relative;
    width: 100%;
    height: 100%;

    &:after {
        content:'';
        position:absolute;
        width:100%; height:100%;
        top:0; left:0;
        background:rgba(0,0,0,0.2);
        opacity: 1;
        transition: all 0.5s;
        -webkit-transition: all 0.15s;
    }

    &:hover:after {
        opacity: 0;
    }
`

const TitleWrapper = styled.div`
    z-index: 0;
    position: absolute;
    bottom: 1.5em;
    left: 1.5em;
    width: 60%;
    text-shadow: 0 0 8px rgba(0,0,0, 0.5);
    background-color: transparent;

    @media ${props => props.theme.breakpoints.tablet} {
        width: 100%;
    }
`