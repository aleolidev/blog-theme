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

    blockquote {
        padding: .65em 1.75em 0 1.75em;
        border-left: 4px solid ${props => props.theme.colors.main1};
        margin: 2.5em 0;
    }

    blockquote:before {
        color: ${props => props.theme.colors.gray2};
        content: open-quote;
        font-size: 4em;
        line-height: 0.1em;
        margin-right: 0.25em;
        vertical-align: -0.4em;
    }

    blockquote:after {
        color: ${props => props.theme.colors.gray2};
        content: close-quote;
        font-size: 4em;
        line-height: 0.1em;
        margin-left: 0.25em;
        vertical-align: -0.6em;
    }

    blockquote p {
        display: inline;
        font-style: italic;
        font-size: 1.15rem;
        margin: 0.2em 0 0 0;
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
        padding: 0.5em 0.5em 0.5em 1.5em;
        background-color: ${props => props.theme.colors.dark1};
        border-radius: 0 .5em .5em 0;
        margin: 1em 0;
        border-left: 4px solid ${props => props.theme.colors.main1};
    }

    code {
        font-family: ${props => props.theme.fonts.code};
        font-size: 1rem;
        line-height: 1.875rem;
        color: ${props => props.theme.colors.light1};
        background-color: ${props => props.theme.colors.dark1};
        border-radius: .5em;
        padding: 0.5em;
    }

    pre code {
        padding: 0;
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

    @media ${props => props.theme.breakpoints.smallDesktop} {
        grid-column: 2 / span 8; 
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