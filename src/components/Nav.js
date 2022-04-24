import React from "react"
import { NavWrapper } from "../elements"
import { StaticImage } from "gatsby-plugin-image"
import langs from "../translations/langs"
import { useLocation } from "@reach/router"

export const Nav = () => {

    const location = useLocation();
    
    let path = location.pathname
    const regex = /(?<home>^\/.+?)\/.*/ig
    path = regex.exec(path)?.groups?.home
    path = path ? path : langs[0]
    
    return (
        <NavWrapper>
            <a href={`${path}`}>
                <StaticImage src={ "../images/logo.svg" } alt="Web Logo" placeholder="blurred" width={50} height={50}/>
            </a>
        </NavWrapper>
    )
}