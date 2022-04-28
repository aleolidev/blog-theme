import React from 'react'
import styled from 'styled-components'
import { StarsElement } from '../elements'
import { FaStar, FaStarHalf } from "react-icons/fa"

const Stars = ({ stars }) => {
    const fullStars = Math.floor(stars)
    const halfStar = stars - fullStars > 0.0
    const voidStars = Math.floor(5. - stars)

    const starsComponentes = []

    const HalfStar = () => {
        return (
            <HalfStarWrapper>
                <HalfFilledStar textAnchor='middle' alignmentBaseline='middle' />
                <HalfVoidStar textAnchor='middle' alignmentBaseline='middle' />
            </HalfStarWrapper>
        )
    }

    for (let i = 0; i < fullStars; i++){
        starsComponentes.push(<FilledStar />)
    }

    if (halfStar) {
        starsComponentes.push(<HalfStar />)
    }

    for (let i = 0; i < voidStars; i++){
        starsComponentes.push(<VoidStar />)
    }
        
    return (
        <StarsElement>
            { starsComponentes }
        </StarsElement>
    )
}

export default Stars

const FilledStar = styled(FaStar)`
    color: ${props => props.theme.colors.starColor};
`

const HalfFilledStar = styled(FaStarHalf)`
    color: ${props => props.theme.colors.starColor};
`

const HalfVoidStar = styled(FaStarHalf)`
    color: ${props => props.theme.colors.gray3};
    transform: scaleX(-1);
    position: absolute;
    left: 0;
    top: 0;
`

const VoidStar = styled(FaStar)`
    color: ${props => props.theme.colors.gray3};
`

const HalfStarWrapper = styled.span`
    display: inline-block;
    position: relative;
`