import React from "react"
import { GridWrapper } from "../elements"

export const Grid = ({columns, mobileColumns, gap, children, style}) => {
    return (
        <GridWrapper columns={ columns } mobileColumns={ mobileColumns } gap={ gap } style={ style }>
            { children }
        </GridWrapper>
    )
}