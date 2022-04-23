import React from "react"
import { ContentWrapper } from "../elements"

export const Content = ({ children, hideBanner, padding, mobilePadding, tabletGridColumn }) => {
    return (
        <ContentWrapper 
            padding={ padding } 
            mobilePadding = { mobilePadding }
            hideBanner={ hideBanner } 
            tabletGridColumn={ tabletGridColumn }
        >
            { children }
        </ContentWrapper>
    )
}