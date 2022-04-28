import React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { H1, ProductCarouselElement } from "../elements"
import Slider from "react-slick"
import ProductCard from "./ProductCard"
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs"

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../css/carousel.css";

export const ProductCarousel = ({ products, baseImg }) => {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3.05,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <CustomArrow isLeft={false} />,
        prevArrow: <CustomArrow isLeft={true} />,   
    }
    
    return (
        <ProductCarouselElement>
            <Slider {...settings} style={{padding: '0 .5em'}}>
                {
                    products.map((product, i) => {
                        // return product
                        return (
                            <div key={i}>
                                <ProductCard value={i} imgSrc={baseImg} />
                            </div>
                        )
                    })
                }
            </Slider>
        </ProductCarouselElement>
    )
}

const CustomArrow = props => {
    const { className, style, onClick, isLeft } = props;
    return (
        <CustomArrowDiv
            className={className}
            style={{ ...style }}
            onClick={onClick}
        >
            {
                isLeft ? <BsArrowLeftShort /> : <BsArrowRightShort />
            }
        </CustomArrowDiv>
    );
}

const CustomArrowDiv = styled.div`
    background-color: ${props => props.theme.colors.light1};
    transition: all .25s ease;

    svg{
        color: ${props => props.theme.colors.main1};
        width: 70%;
        font-size: 3.5rem;
        transition: all .25s ease;
    }

    :hover, :focus {
        background-color: ${props => props.theme.colors.light1};
    }
`;