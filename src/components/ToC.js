import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { A, H2 } from "../elements"
import { HiMenu } from "react-icons/hi"
import { nestify, slugify } from "../utils/utils"
import { useMediaQuery } from "@material-ui/core"
import { toc } from "../translations/translations"


export const ToC = ({ headings, isMobile, showOnlyOnTablet, lang }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [contentHeight, setContentHeight] = useState('200em')
    const [contentWidth, setContentWidth] = useState('200em')
    const [sizeSet, setSizeSet] = useState(false);
    const [reset, setReset] = useState(false);
 
    const contentRef = useRef();
    
    const isTablet = useMediaQuery('(max-width: 65rem)')
    
    const filterHeadings = (obj, minDepth, maxDepth) => {
        const filteredObj = JSON.parse(JSON.stringify(obj)) // In-depth copy
        
        return filteredObj.filter((item) => {
            if (item.depth >= minDepth && item.depth <= maxDepth)
            return item;
        })
    }
    
    const minHeading = 2;
    const maxHeading = 3;
    const filteredHeadings = filterHeadings(headings, minHeading, maxHeading)
    const nestedHeadings = nestify(filteredHeadings)

    const getNestedList = (obj, isFirst) => {
        if (Object.keys(obj).length === 0) return null;

        return (
            <OrderedList isFirst={isFirst}>
            {
                Object.keys(obj).map(children => {
                    return (<>
                        <ListItem>
                            
                            <A color="main1" hoverColor="main2" 
                                href={`#${
                                    slugify(obj[children].value)
                                }`}
                            >
                                { obj[children].value }
                            </A>
                        </ListItem>
                        { getNestedList(obj[children].childrens, false) }
                    </>)
                })
            }
            </OrderedList>
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

    return (
        <>
            { 
                ((isTablet && showOnlyOnTablet && headings && headings.length > 0) || (!isTablet && !showOnlyOnTablet)) 
                ?
                <Toc contentHeight={ contentHeight } contentWidth={ contentWidth } sizeSet={ sizeSet }>
                    <TitleWrapper onClick={() => (isMobile ? setIsOpen(current => !current) : null)}>
                        <H2>{ toc.title[lang] }</H2>
                        { isMobile ? <HiMenu /> : null }
                    </TitleWrapper>
                    <ContentWrapper className={ isOpen ? "container show" : "container" }>
                        {
                            getNestedList(nestedHeadings, true)
                        }
                        {/* <OrderedList ref={ contentRef }>
                        {headings.map(heading => {
                            const startingDepth = 2;

                            if ( heading.depth < startingDepth || heading.depth > 4) {
                                return (null);
                            }

                            const inset = `${heading.depth - startingDepth}em`

                            return (
                            <ListItem key={heading.value} inset={inset}>
                                <A color="main1" hoverColor="main2" 
                                    href={`#${
                                        slugify(heading.value)
                                    }`}
                                >
                                {heading.value}
                                </A>
                            </ListItem>
                            )
                        })}
                        </OrderedList> */}
                    </ContentWrapper>
                </Toc>
                :
                null
            }
        </>
    )
}



const Toc = styled.div`  
    grid-column: 11 / span 3;
    grid-row: 4 / span 1;
    overflow: hidden;
    position: relative;
    margin: .5em 4rem 0 0rem;
    padding: ${props => 
        `${props.theme.spacings.xLarge} 0`};
    z-index: 10;
    
    @media ${props => props.theme.breakpoints.smallDesktop} {
        grid-column: 10 / span 4; 
    }

    @media ${props => props.theme.breakpoints.tablet} {
        display: inline-block;
        grid-column: 1 / span 8;
        padding: 1.25rem 1.5rem;
        margin: 2em 0 0 0;
        border: 1px solid ${props => props.theme.colors.gray3};
        border-radius: .5em;
        
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

const ListItem = styled.li`
    margin: 0.4rem 0;
`

const OrderedList = styled.ol`
    list-style: none;
    padding: ${props => props.isFirst ? '0' : null};

    & > li:first-child {
        counter-reset: item;
    }

    & > li {
        counter-increment: item;
    }

    & > li:before {
        content:counters(item, ".") ". "; 
    }

`