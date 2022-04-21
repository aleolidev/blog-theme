import styled from "styled-components"

export const ContentWrapper = styled.main`
    grid-column: 2 / span 12;
    grid-row: ${props => props.hideBanner ? "2 / span 5" : "4 / span 5"};
    
    padding: ${props => props.padding ? props.padding :
        `${props.theme.spacings.xLarge} ${props.theme.spacings.xLarge}`};
    z-index: 10;

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2 / span 6;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        padding: ${props => 
            `${props.theme.spacings.medium} ${props.theme.spacings.xxSmall}`};
    }
`