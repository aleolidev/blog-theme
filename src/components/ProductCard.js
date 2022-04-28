import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react'
import styled from 'styled-components';
import Stars from './Stars';

const ProductCard = props => {
    return (
        <>
          <Card style={{ width: "inherit" }}>
            <GatsbyImage image={props.imgSrc} fadeIn={false} alt="" />
            <CardBody>
              <CardTitle>Card Title {props.value}</CardTitle>
              <Stars stars={2.5} />
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

const CardTitle = styled.h5`
    margin: .25em 0 !important;
    padding: 0;
`

const CardText = styled.p`
    text-align: justify;
    margin: 0 !important;

`