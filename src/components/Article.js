import React from "react"
import { ArticleWrapper } from "../elements"

export const Article = ({ children }) => {
    return (
        <ArticleWrapper>
            { children }
        </ArticleWrapper>
    )
}