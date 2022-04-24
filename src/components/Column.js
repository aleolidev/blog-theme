import React from "react"
import { ColumnWrapper } from "../elements"

export const Column = ({ children, style, justifyContent, specialMargin }) => {
    return (
        <ColumnWrapper style={ style } justifyContent={justifyContent} specialMargin={specialMargin}>
            { children }
        </ColumnWrapper>
    )
}