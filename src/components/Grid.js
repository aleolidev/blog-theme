import React from "react"
import { GridWrapper } from "../elements"

export const Grid = ({ columns, tabletColumns, mobileColumns, gap, children, style, id }) => {
    return (
        <GridWrapper id={id} columns={ columns } tabletColumns={ tabletColumns } mobileColumns={ mobileColumns } gap={ gap } style={ style }>
            { children }
        </GridWrapper>
    )
}