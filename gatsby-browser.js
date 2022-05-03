import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { MDXProvider } from "@mdx-js/react";
import Theme from "./src/themes/theme";
import { Table, ToC, ProductCarousel, FloatingImage, AmazonLink, MdxBuyButton } from "./src/components";

const GlobalStyles = createGlobalStyle`
    *:not(ol):not(ul) {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body, html {
        scroll-behavior: smooth;
        font-family: "Mulish", sans-serif;
        height: 100%;
        min-width: 23em;
    }
`

const components = {
    table: Table,
    ToC,
    ProductCarousel,
    FloatingImage,
    AmazonLink,
    MdxBuyButton,
}

export const wrapPageElement = ({ element }) => (
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