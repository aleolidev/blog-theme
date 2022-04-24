import styled from "styled-components"

export const NavWrapper = styled.nav`
    grid-column: 1 / span 14;
    grid-row: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;

    box-sizing: content-box;
    box-shadow: ${props => props.theme.shadows.shadow2};

    z-index: 10;

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 1 / span 8;
    }
`