import React from "react"
import { PaginationWrapper, PaginationElement } from "../elements"

export const Pagination = ({isFirst, isLast, prevPage, nextPage, padding}) => {
    return (
        <PaginationWrapper isFirst={isFirst} isLast={isLast} padding={ padding }>
            <PaginationElement href={prevPage}>Previous Page</PaginationElement>
            <PaginationElement href={nextPage}>Next Page</PaginationElement>
        </PaginationWrapper>
    )
}