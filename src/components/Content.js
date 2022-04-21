import React from "react"
import { ContentWrapper } from "../elements"

export const Content = ({ children, hideBanner, padding }) => {
    return (
        <ContentWrapper padding={ padding } hideBanner={ hideBanner }>
            { children }
        </ContentWrapper>
    )
}