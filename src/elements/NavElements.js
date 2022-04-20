import styled from "styled-components"

export const NavWrapper = styled.nav`
    grid-column: 2 / span 12;
    grid-row: 1 / span 0.5;
    display: flex;
    align-items: center;
    padding: 0 4em;

    box-sizing: content-box;
    box-shadow: ${props => props.theme.shadows.shadow1};

    & img {
        height: 50px;
    }

    @media ${props => props.theme.breakpoints.tablet} {
        justify-content: center;
        grid-column: 2 / span 6;
    }
`