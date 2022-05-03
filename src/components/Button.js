import React from "react"
import { ButtonWrapper } from "../elements"

export const Button = ({ children, href, rel, target }) => {
    return <ButtonWrapper href={href} rel={ rel } target={ target }> { children } </ButtonWrapper>
}