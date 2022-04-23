import React from "react"
import { GridWrapper } from "../elements"

export const Grid = ({columns, tabletColumns, mobileColumns, gap, children, style}) => {
    return (
        <GridWrapper columns={ columns } tabletColumns={ tabletColumns } mobileColumns={ mobileColumns } gap={ gap } style={ style }>
            { children }
        </GridWrapper>
    )
}