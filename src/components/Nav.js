import React from "react"
import { NavWrapper } from "../elements"
import { StaticImage } from "gatsby-plugin-image"

export const Nav = () => {
    return (
        <NavWrapper>
            <a href="/">
                <StaticImage src={ "../images/logo.svg" } alt="Web Logo" placeholder="blurred" width={50} height={50}/>
            </a>
        </NavWrapper>
    )
}