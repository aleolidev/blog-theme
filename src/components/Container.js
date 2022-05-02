import React from "react"
import { ContainerWrapper } from "../elements"
import { Cookies, Footer, Nav } from "../components"
import theme from "../themes/theme"
import { useLocation } from "@reach/router"
import langs from "../translations/langs"
import "./layout.css"

export const Container = ({ children }) => {
    const location = useLocation();
    
    let lang = location.pathname
    const regex = /(?<home>^\/.+?)\/.*/ig
    lang = regex.exec(lang)?.groups?.home?.replaceAll('/', '')
    lang = lang ? lang : langs[0]

    return (
        <>
            <Nav lang={ lang }/>
            <ContainerWrapper>
                { children }
            </ContainerWrapper>
            <Footer lang={ lang }/>
            <Cookies theme={ theme } lang={ lang }/>
        </>
    )
}