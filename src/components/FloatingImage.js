import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import BuyButton from './BuyButton'
import { productcard } from '../translations/translations'
import { GrAmazon } from "react-icons/gr"

export const FloatingImage = ({ product, float, lang, showBuyButton }) => {
    return (
        <ImageWrapper float={float}>
            <ImageLink href={ product.href } target="_blank">
                <GatsbyImage image={ product.image.childImageSharp.gatsbyImageData } alt={ product.name } objectFit="contain" loading='lazy'/>
            </ImageLink>
            {
                (showBuyButton && lang) &&
                <BuyButton text={ productcard.viewAtAmazon[lang] } href={ product.href } icon={<GrAmazon />} marginTop={"1.5rem !important"} hideMobile={ true } />
            }
        </ImageWrapper>
    )
}

const ImageWrapper = styled.div`
    float: ${props => props.float ? props.float : "none" };
    margin-top: 2rem;
    padding: ${props => 
        props.float == "left" ? ".25em 1.5em .25em 0" : 
        props.float == "right" ? ".25em 0 .25em 1.5em" : "0"
    };
    max-width: 20em;
    max-height: 20em;

    @media ${props => props.theme.breakpoints.mobile} {  
        display: flex;
        float: none;
        margin: 0;
        padding: 0;
        margin-top: 1.5rem;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 100%;

        max-width: none;
        max-height: none;

        & > * {
            max-width: 20em;
            max-height: 20em;
        }
    }
`

const ImageLink = styled.a`
    height: inherit;
    width: inherit;

    & > a {
        height: inherit;
        width: inherit;
    }
`