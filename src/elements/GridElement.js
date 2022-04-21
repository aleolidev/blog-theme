import styled from "styled-components"

export const GridWrapper = styled.section`
    display: grid;
    grid-template-columns: ${props => `repeat(${props.columns}, 1fr)`};
    grid-column-gap: ${props => props.gap};

    @media ${props => props.theme.breakpoints.tablet} {
        grid-template-columns: ${
            props => props.mobileColumns ? 
            `repeat(${props.mobileColumns}, 1fr)` : 
            `repeat(${props.columns}, 1fr)`};
    }
`