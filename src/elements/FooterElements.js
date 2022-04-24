import styled from "styled-components"

export const FooterWrapper = styled.footer`
    grid-column: 1 / span 14;
    grid-row: 100;
    background-color: ${props => props.theme.colors.dark1};
    padding: 2em 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 1 / span 8;
    }
`