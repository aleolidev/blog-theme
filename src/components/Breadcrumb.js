import React from "react"
import { BreadcrumbWrapper } from "../elements"

export const Breadcrumb = ({ crumbs, crumbSeparator, crumbLabel }) => {
    return <BreadcrumbWrapper crumbs={ crumbs } crumbSeparator={ crumbSeparator } crumbLabel={ crumbLabel } />
}