import styled from "styled-components"

export const FeatureImageWrapper = styled.div`
    grid-column: 2 / span 12;
    grid-row: ${props => props.gridRow ? props.gridRow : '2 / span 2' };
    overflow: hidden;
    position: relative;
    margin: 0 4rem;
    display: "block";

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 1 / span 8;
        margin: 0 4rem;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        display: ${props => props.hideOnMobile ? "none" : "block"};
        grid-column: none !important;
        grid-row: none !important;
        margin: 0;
    }

    .gatsby-image-wrapper [data-main-image] {
        transition: none !important;
    }
`