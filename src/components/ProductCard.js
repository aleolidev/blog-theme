import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import Stars from './Stars';

const ProductCard = ({ img, name, tags, stars, description, buyHref }) => {
  
    const srcImg = `../images/${img}`
    return (
        <Card style={{ width: "inherit" }}>
            <StaticImage src={ srcImg }/>
            <CardBody>
                <CardTitle>{ name }</CardTitle>
                <Stars stars={ stars } />
                <CardText>
                    { description }
                </CardText>
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

const CardTitle = styled.h5`
    margin: .25em 0 !important;
    padding: 0;
`

const CardText = styled.p`
    line-height: 1.5rem !important;
    margin: 0 !important;

`