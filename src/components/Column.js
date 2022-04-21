import React from "react"
import { ColumnWrapper } from "../elements"

export const Column = ({ children, style }) => {
    return (
        <ColumnWrapper style={ style }>
            { children }
        </ColumnWrapper>
    )
}