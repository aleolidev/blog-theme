import styled from "styled-components"

export const NavWrapper = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding: .5em 0;

    box-sizing: content-box;
    box-shadow: ${props => props.theme.shadows.shadow2};

    z-index: 10;

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 1 / span 8;
    }
`