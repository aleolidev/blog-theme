import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { MDXProvider } from "@mdx-js/react";
import Theme from "./src/themes/theme";
import { Table, ToC, ProductCarousel, FloatingImage } from "./src/components";

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
}

export const wrapPageElement = ({ element }) => (
    <MDXProvider components={ components }>
        <ThemeProvider theme={ Theme }>
            <GlobalStyles />
            { element }
        </ThemeProvider>
    </MDXProvider>
)