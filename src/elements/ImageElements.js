import styled from "styled-components"

export const FeatureImageWrapper = styled.div`
    grid-column: 2 / span 12;
    grid-row: 2 / 4;
    overflow: hidden;
    position: relative;
    margin: 0 4rem;

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 1 / span 8;
        margin: 0;
    }
`