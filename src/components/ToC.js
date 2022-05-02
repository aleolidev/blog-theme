import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { A, H2 } from "../elements"
import { HiMenu } from "react-icons/hi"
import { nestify, slugify } from "../utils/utils"
import { toc } from "../translations/translations"
import ConditionalWrapper from "./ConditionalWrapper"


export const ToC = ({ headings, showOnlyOnTablet, lang, isTablet }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [contentHeight, setContentHeight] = useState('200em')
    const [contentWidth, setContentWidth] = useState('200em')
    const [sizeSet, setSizeSet] = useState(false);
    const [reset, setReset] = useState(false);
 
    const contentRef = useRef();

    const filterHeadings = (obj, minDepth, maxDepth) => {
        const filteredObj = JSON.parse(JSON.stringify(obj)) // In-depth copy
        
        return filteredObj.filter((item) => {
            if (item.depth >= minDepth && item.depth <= maxDepth)
                return item;
            return null;
        })
    }
    
    const minHeading = 2;
    const maxHeading = 3;
    const filteredHeadings = filterHeadings(headings, minHeading, maxHeading)
    const nestedHeadings = nestify(filteredHeadings)

    const getNestedList = (obj, isFirst, indexArray) => {
        if (Object.keys(obj).length === 0) return null;

        return (
            <ConditionalWrapper
                condition={ !isFirst }
                wrapper={ children => <ListItem>{ children }</ListItem> }
            >
                <OrderedList isFirst={isFirst}>
                {
                    Object.keys(obj).map((children, i) => {
                        const newIndexArray = [...indexArray, i]
                        const itemNumber =  newIndexArray.map(num => `${num + 1}.`).join("")
                        return (<>
                            <ListItem>
                                <ItemNumber>{ itemNumber }</ItemNumber>
                                <A color="main1" hoverColor="main2" 
                                    href={`#${
                                        slugify(obj[children].value)
                                    }`}
                                >
                                    { obj[children].value }
                                </A>
                            </ListItem>
                            { getNestedList(obj[children].childrens, false, newIndexArray) }
                        </>)
                    })
                }
                </OrderedList>
            </ConditionalWrapper>
        )
    }

    useEffect(() => {
        setSizeSet(true)
        if (contentRef?.current?.clientHeight > 0 && contentHeight !== contentRef?.current?.clientHeight) {
            setContentHeight(`${contentRef.current.clientHeight}px`)
        }
    
        if (contentRef?.current?.clientWidth > 0 && contentWidth !== contentRef?.current?.clientWidth) {
            setContentWidth(`${contentRef.current.clientWidth}px`)
        }
    }, [contentRef, reset])

    useEffect(() => {
        const resizeListener = () => {
            setSizeSet(false);
            setReset(current => !current)
            setContentHeight('200em');
            setContentWidth('200em');
        };

        // set resize listener
        window.addEventListener('resize', resizeListener);
    
        // clean up function
        return () => {
            // remove resize listener
            window.removeEventListener('resize', resizeListener);
        }
    }, [])

    
    if (headings === null || headings === undefined || headings.length <= 0)
        return null;

    return (
        <Toc isTablet={ isTablet } contentHeight={ contentHeight } contentWidth={ contentWidth } sizeSet={ sizeSet }>
            <TitleWrapper onClick={() => setIsOpen(current => !current)}>
                <H2>{ toc.title[lang] }</H2>
                <IconWrapper>
                    <HiMenu />
                </IconWrapper>
            </TitleWrapper>
            <ContentWrapper className={ isOpen ? "container show" : "container" }>
                {
                    getNestedList(nestedHeadings, true, [])
                }
            </ContentWrapper>
        </Toc>
    )
}



const Toc = styled.div`  
    grid-column: 11 / span 3;
    grid-row: 4 / span 1;
    display: ${props => props.isTablet ? "none" : "block"};
    overflow: hidden;
    position: ${props => props.isTablet ? "static" : "sticky"};
    padding: 0 0 3.3em 0;
    margin-left: 1em;
    z-index: 10;
    top: 2em; // Sticky
    bottom: 1000px;
    
    @media ${props => props.theme.breakpoints.smallDesktop} {
        grid-column: 10 / span 4; 
    }

    @media ${props => props.theme.breakpoints.tablet} {
        display: ${props => props.isTablet ? "inline-block" : "none"};
        // display: inline-block;
        grid-column: 1 / span 8;
        padding: 1.25rem 1.5rem;
        margin: 1em 0 .5em 0;
        border: 1px solid ${props => props.theme.colors.gray3};
        border-radius: .5em;
        position: static;

        ${({ isTablet }) => isTablet && `
            & + * {
                margin-top: .5em !important;
            }
        `}
        
        .container {
            display: ${props => props.sizeSet ? 'block' : 'none'};
            max-height: ${props => props.sizeSet ? '0' : 'none'};
            max-width: ${props => props.sizeSet ? '0' : 'none'};
            overflow: hidden;
            transition: all .35s ease;
        }
    
        .container.show {
            display: block;
            max-height: ${props => props.contentHeight};
            max-width: ${props => props.contentWidth};
        }
    }

    @media ${props => props.theme.breakpoints.mobile} {
        display: ${props => props.isTablet ? "block" : "none"};
        position: static;
        grid-column: auto;
        grid-area: auto;
        z-index: auto;
    }

`

const ContentWrapper = styled.div``

const TitleWrapper = styled.div`
    margin: 0 0 1em 0 !important;
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
        margin-left: .75em;
        font-size: 1.25rem;
        color: ${props => props.theme.colors.main1}
    }

    @media ${props => props.theme.breakpoints.tablet} {
        margin: 0 !important;    
        cursor: pointer;
        h2 {
            margin: 0 !important;
        }
    }
`

const IconWrapper = styled.span`
    display: none;

    @media ${props => props.theme.breakpoints.tablet} {
        display: block;
    }
`

const ListItem = styled.li`
    margin: 0.4rem 0;
`

const ItemNumber = styled.span`
    margin-right: .25em;
`

const OrderedList = styled.ol`
    list-style: none;
    padding: ${props => props.isFirst ? '0' : null};
`