import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { MDXProvider } from "@mdx-js/react";
import Theme from "./src/themes/theme";
import { Table, ToC } from "./src/components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body, html {
        scroll-behavior: smooth;
        font-family: ${props => props.theme.fonts.main};
        height: 100%;
    }
`

const components = {
    table: Table,
    ToC,
}

export const wrapRootElement = ({ element }) => (
    <MDXProvider components={ components }>
        <ThemeProvider theme={ Theme }>
            <GlobalStyles />
            { element }
        </ThemeProvider>
    </MDXProvider>
)

export const shouldUpdateScroll = ({
    routerProps: { location },
    getSavedScrollPosition,
}) => {
    const { pathname } = location
    // list of routes for the scroll-to-top-hook
    const scrollToTopRoutes = [`/privacy-policy`, `/page-2`]
    // if the new route is part of the list above, scroll to top (0, 0)
    if (scrollToTopRoutes.indexOf(pathname) !== -1) {
      window.scrollTo(0, 0)
    }
  
    return false
}