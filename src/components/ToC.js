import React from "react"
import styled from "styled-components"
import { makeStyles } from "@material-ui/core"
import theme from "../themes/theme"


export const ToC = ({ headings, desktop }) => {
    const classes = useStyles();

    return (
        <Toc className={ desktop ? classes.desktop : classes.mobile }>
            <Title>Table of contents</Title>
            <InnerScroll>
            {headings.map(heading => {
                if (heading.depth > 4) {
                return <div />
                }

                return (
                <ToCElement key={heading.value}>
                    <ToCLink
                    href={`#${heading.value.replace(/\s+/g, "-").toLowerCase()}`}
                    >
                    {heading.value}
                    </ToCLink>
                </ToCElement>
                )
            })}
            </InnerScroll>
        </Toc>
    )
}

const Toc = styled.ul`  
    grid-column: 11 / span 3;
    grid-row: 4 / span 1;
    overflow: hidden;
    position: relative;
    background-color: ${props => props.theme.colors.light2};
    margin: 0 4rem 0 0rem!important;
    padding: ${props => 
        `${props.theme.spacings.xxLarge} 0`};
    box-shadow: ${props => props.theme.shadows.shadow1};
    z-index: 10;

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 1 / span 8;
        padding: 0;
    }
`

const Title = styled.h2`
    font-size: 1.5rem;
    margin: 0 0 .75em 0 !important;
    
    @media ${props => props.theme.breakpoints.tablet} {
        margin: 1.5em 0 .5em 0 !important;
    }
`

const ToCElement = styled.li`
      padding: .75em 0;
`

const ToCLink = styled.a`
      &:hover {
          color: black;
          transition: filter 0.3s ease;
      }
`

const InnerScroll = styled.div`
  scrollbar-width: thin;
  scrollbar-color: #367ee9 rgba(48, 113, 209, 0.3);
  overflow: hidden auto;
`

const useStyles = makeStyles({
    desktop: {
        display: "block",
        
        [`@media ${theme.breakpoints.tablet}`]: {
            display: "none",     
        },
    },
    mobile: {
        display: "none",

        [`@media ${theme.breakpoints.tablet}`]: {
            display: "block",
        },
    }
})