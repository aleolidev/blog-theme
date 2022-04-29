import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import Stars from './Stars';

const ProductCard = ({ image, name, tags, stars, description, buyHref }) => {
    return (
        <Card style={{ width: "inherit" }}>
            {/* Tag */}
            <ImageWrapper>
                <GatsbyImage image={ image.childImageSharp.gatsbyImageData } alt={ name }/>
            </ImageWrapper>
            <CardBody>
                <CardTitle>{ name }</CardTitle>
                <Stars stars={ stars } />
                <CardText>
                    { description }
                </CardText>
                {/* Buy button */}
            </CardBody>
        </Card>
    );
}

export default ProductCard

const Card = styled.div`
    padding: 0 1em;
    
    border-right: 1px solid ${props => props.theme.colors.gray3};
`

const CardBody = styled.div`

`

const ImageWrapper = styled.div`
    margin: 1.25em 0;
`

const CardTitle = styled.h5`
    margin: .25em 0 !important;
    padding: 0;
`

const CardText = styled.p`
    &&& {
        font-size: .95rem;
        line-height: 1.5rem;
        margin: 0;
    }

`