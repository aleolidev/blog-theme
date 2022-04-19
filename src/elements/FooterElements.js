import styled from "styled-components"

export const FooterWrapper = styled.footer`
    grid-column: 2 / span 12;
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2 / span 6;
    }
`