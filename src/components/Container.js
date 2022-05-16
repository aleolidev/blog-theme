import React from "react"
import { ContainerWrapper } from "../elements"
import { Cookies, Footer, Nav } from "../components"
import theme from "../themes/theme"
import { useLocation } from "@reach/router"
import langs from "../translations/langs"
import { capitalizeNth } from "../utils/utils"

export const Container = ({ children }) => {
    const location = useLocation();
    
    let lang = location.pathname
    let regex = /(?<home>^\/.+?)\/.*/ig
    
    lang = regex.exec(lang)?.groups?.home?.replaceAll('/', '')
    lang = lang ? lang : langs[0]

    regex = /^[a-z]{2}-[a-z]{2}$/ig
    if (lang.match(regex))
        lang = capitalizeNth(capitalizeNth(lang, 3), 4)

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