import React from "react"
import { ContainerWrapper } from "../elements"
import { Cookies, Footer, Nav } from "../components"
import theme from "../themes/theme"

export const Container = ({ children }) => {
    return (
        <ContainerWrapper>
            <Nav />
            { children }
            <Footer />
            <Cookies theme={ theme }/>
        </ContainerWrapper>
    )
}