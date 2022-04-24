import styled from "styled-components"

export const ArticleWrapper = styled.main`
    grid-column: 2 / span 9;
    grid-row: 4 / span 5;
    margin: ${props => 
        `0 0 0 ${props.theme.spacings.xLarge}`};
    padding: ${props => 
        `1.5em 0 ${props.theme.spacings.xLarge}`};
    z-index: 10;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: ${props => props.theme.colors.dark1};    
    }

    h1:not(:nth-child(2)),
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-top: 2rem;
    }

    h1 {
        font-size: 2.25rem;
        line-height: 2.5rem;
        font-weight: 400;
    }

    h2 {
        font-size: 1.5rem;
        line-height: 1.875rem;
        font-weight: 400;
    }

    h3 {
        font-size: 1.375rem;
        line-height: 1.625rem;
        font-weight: 700;
    }

    h4 {
        font-size: 1.25rem;
        line-height: 1.5rem;
        font-weight: 400;
    }

    h5 {
        font-size: 1.125rem;
        line-height: 1.375rem;
        font-weight: 700;
    }

    h6 {
        font-size: 1rem;
        line-height: 1.125rem;
        font-weight: 700;
        text-transform: uppercase;
    }

    p {
        font-size: 1.125rem;
        line-height: 1.875rem;
        font-weight: 400;
        color: ${props => props.theme.colors.dark2};
        margin-top: 2rem;
    }
    
    a {
        color: ${props => props.theme.colors.main1};
        text-decoration: underline;
    }

    strong {
        font-weight: 700;
    }

    em {
        font-style: italic;
    }

    del {
        text-decoration: line-through;
    }

    blockquoute p {
        font-style: italic;
        font-size: 1.5rem;
        line-height: 2.125rem;
        text-align: center;
        max-width: 36rem;
        margin: 3rem auto;
    }

    ul,
    ol {
        color: ${props => props.theme.colors.dark2};
        margin: 1rem 0 1rem 2rem;
    }

    li {
        margin: 0.25rem 0;
    }

    pre {
        overflow-x: auto;
        padding: 0.5em 0.5rem;
        background-color: ${props => props.theme.colors.dark1};
        border-radius: .5em;
        margin: 1em 0;
        border-left: 4px solid ${props => props.theme.colors.main1};
    }

    code {
        font-family: ${props => props.theme.fonts.code};
        font-size: 1rem;
        line-height: 1.875rem;
        color: ${props => props.theme.colors.light1};
        padding: 0.25em 0.5rem;
    }

    hr {
        border: 0;
        height: 1px;
        background: ${props => props.theme.colors.dark1};
        opacity: 0.1;
        margin-top: 2rem;
    }

    table {
        width: 100%;
        border-spacing: 0.25rem;
        border-collapse: collapse;
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: 400;
    }

    th {
        font-weight: 700;
    }

    table,
    th,
    td {
        border: 1px solid ${props => props.theme.colors.dark3};
    }

    th,
    td {
        text-align: left;
        padding: 0.5rem;
    }

    @media ${props => props.theme.breakpoints.tablet} {
        margin: 0;
        padding: ${props => 
            `${props.theme.spacings.small} ${props.theme.spacings.xLarge} 3em ${props.theme.spacings.xLarge}`};
        grid-column: 1 / span 8;  
        grid-row: 5 / span 5;
    }
    
    @media ${props => props.theme.breakpoints.mobile} {    
        grid-row: 2 / span 5;
        padding: ${props => 
            `${props.theme.spacings.small} ${props.theme.spacings.large} 3em ${props.theme.spacings.large}`};
    }
`