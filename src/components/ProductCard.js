import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import Stars from './Stars';
import BuyButton from './BuyButton';
import { productcard } from '../translations/translations';
import { GrAmazon } from "react-icons/gr"
import Tag from './Tag';

const ProductCard = ({ lang, image, name, tags, stars, description, buyHref }) => {
    return (
        <Card style={{ width: "inherit", height: "100%" }}>
            <CardWrapper mobile={ true }>
                <CardBody>
                    <ImageWrapper>
                        {(tags !== null && tags !== undefined && tags.length > 0) &&
                            tags.map(tag => {
                                return ( <Tag tag={tag}/> )
                            }
                        )}
                        <ImageLink href={ buyHref } rel="nofollow sponsored noopener" target="_blank">
                            <GatsbyImage image={ image.childImageSharp.gatsbyImageData } alt={ name } objectFit="contain" loading='lazy'/>
                        </ImageLink>
                    </ImageWrapper>
                    <TitleWrapper>
                        <CardTitle href={ buyHref } rel="nofollow sponsored noopener" target="_blank">{ name }</CardTitle>
                    </TitleWrapper>
                    <Stars stars={ stars } />
                    <CardText>
                        { description }
                    </CardText>        
                    <BuyButton text={ productcard.viewAtAmazon[lang] } href={ buyHref } icon={<GrAmazon />}  />
                </CardBody>
            </CardWrapper>
            <CardWrapper mobile={ false }>
                {(tags !== null && tags !== undefined && tags.length > 0) &&
                    tags.map(tag => {
                        return ( <Tag tag={tag}/> )
                    }
                )}
                <ImageWrapper>
                    <a href={ buyHref } rel="nofollow sponsored noopener noreferrer" target="_blank">
                        <GatsbyImage image={ image.childImageSharp.gatsbyImageData } alt={ name } objectFit="contain"/>
                    </a>
                </ImageWrapper>
                <CardBody>
                    <TitleWrapper>
                        <CardTitle href={ buyHref } rel="nofollow sponsored noopener noreferrer" target="_blank">{ name }</CardTitle>
                    </TitleWrapper>
                    <Stars stars={ stars } />
                    <CardText>
                        { description }
                    </CardText>
                </CardBody>
                <BuyButton text={ productcard.viewAtAmazon[lang] } href={ buyHref } icon={<GrAmazon />}  />
            </CardWrapper>
        </Card>
    );
}

export default ProductCard

const Card = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 1.15em;
    border-right: 1px solid ${props => props.theme.colors.gray3};
    
    @media ${props => props.theme.breakpoints.mobile} {  
        margin: 1.5em 0;  
        padding: 0;
        border-right: 1px solid transparent;
    }
`

const CardBody = styled.span`
`

const CardWrapper = styled.div`
    display: ${props => props.mobile ? "none" : "contents"};

    @media ${props => props.theme.breakpoints.mobile} {  
        display: ${props => props.mobile ? "block" : "none"};
    }
`

const ImageLink = styled.a`
    height: inherit;

    & > div {
        height: inherit;
    }
`

const ImageWrapper = styled.div`
    margin: 1.25em 0;
    height: 10em !important;
    width: 100%;
    text-align: center;
    justify-content: center;
    align-items: center;

    img {
        height: 10em !important;
        width: 100%;
    }

    @media ${props => props.theme.breakpoints.mobile} {  
        margin: 0 0 1em 2em;
        padding: .5em 0;
        width: auto;
        float: right;
    }

    @media ${props => props.theme.breakpoints.smallMobile} {  
        margin: 0 0 2em 0;
        padding: .5em 0;
        width: auto;
        float: none;
    }
`

const CardTitle = styled.a`
    padding: 0;
    font-size: 1.25rem;
    font-weight: 700;
    color: ${props => props.theme.colors.dark1} !important;
    text-decoration: none !important;
`

const TitleWrapper = styled.div`
    margin: .25em 0 .5em 0 !important;

    @media ${props => props.theme.breakpoints.mobile} {  
        margin: 0 0 .5em 0 !important;
    }
`

const CardText = styled.p`
    &&& {
        font-size: .95rem;
        line-height: 1.5rem;
        margin: 0;
    }

`