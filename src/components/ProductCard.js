import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react'
import styled from 'styled-components';

const ProductCard = props => {
    return (
        <>
          <Card style={{ width: "inherit" }}>
            <GatsbyImage image={props.imgSrc} fadeIn={false} alt="" />
            <CardBody>
              <CardTitle>Card Title {props.value}</CardTitle>
              <CardText>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </CardText>
            </CardBody>
          </Card>
        </>
      );
}

export default ProductCard

const Card = styled.div`
    padding: 0 1em;
    
    border-right: 1px solid ${props => props.theme.colors.gray3};
`

const CardBody = styled.div`

`

const CardTitle = styled.h3`
    margin: 0 !important;
    padding: 0;
`

const CardText = styled.p`
    text-align: justify;

`