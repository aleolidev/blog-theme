import React from "react"
import { ContainerWrapper } from "../elements"
import { Cookies, Footer, Nav } from "../components"
import theme from "../themes/theme"
import { useLocation } from "@reach/router"
import langs from "../translations/langs"

export const Container = ({ children }) => {
    const location = useLocation();
    
    let lang = location.pathname
    const regex = /(?<home>^\/.+?)\/.*/ig
    lang = regex.exec(lang)?.groups?.home?.replaceAll('/', '')
    lang = lang ? lang : langs[0]

    return (
        <ContainerWrapper>
            <Nav lang={ lang }/>
            { children }
            <Footer lang={ lang }/>
            <Cookies theme={ theme }/>
        </ContainerWrapper>
    )
}