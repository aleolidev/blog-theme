import React from "react"
import styled from "styled-components"
import { A, H2 } from "../elements"


export const ToC = ({ headings }) => {

    return (
        <Toc>
            <TitleWrapper>
                <H2>Table of contents</H2>
            </TitleWrapper>
            <InnerScroll>
            {headings.map(heading => {
                if (heading.depth > 4) {
                    return (null);
                }

                return (
                <ToCElement key={heading.value}>
                    <A color="main1" hoverColor="main2" 
                        href={`#${heading.value.replace(/\s+/g, "-").toLowerCase()}`}
                    >
                    {heading.value}
                    </A>
                </ToCElement>
                )
            })}
            </InnerScroll>
        </Toc>
    )
}

const Toc = styled.div`  
    grid-column: 11 / span 3;
    grid-row: 4 / span 1;
    overflow: hidden;
    position: relative;
    margin: .5em 4rem 0 0rem !important;
    padding: ${props => 
        `${props.theme.spacings.xxLarge} 0`};
    z-index: 10;

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 1 / span 8;
        padding: 0;
    }
`

const TitleWrapper = styled.div`
    margin: 0 0 1em 0 !important;
    
    @media ${props => props.theme.breakpoints.tablet} {
        margin: 1.5em 0 .5em 0 !important;
    }
`

const ToCElement = styled.li`
      padding: .5em 0;
`

const InnerScroll = styled.ul`
  scrollbar-width: thin;
  scrollbar-color: #367ee9 rgba(48, 113, 209, 0.3);
  overflow: hidden auto;
  margin: 0 !important;
  padding: 0;
  list-style-type: none;
`