import styled from "styled-components"

export const ProductCarouselElement = styled.div`
    display: contents;

    @media ${props => props.theme.breakpoints.mobile} {  
        display: none;
    }
`