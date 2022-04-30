import React from 'react'
import styled from 'styled-components'
import { IoMdMedal } from "react-icons/io"

const Tag = ({ tag }) => {
  return (
    <TagWrapper>
        <TagSection>
            <IoMdMedal />
            { tag }
        </TagSection>
        <UnderTag />
    </TagWrapper>
  )
}

export default Tag

const TagWrapper = styled.div`
    position: absolute;
    z-index: 1;
    margin-left: -.5em;
    
    @media ${props => props.theme.breakpoints.mobile} {  
        margin-top: -1em;
    }
`

const UnderTag = styled.div`
    position: absolute;
    top: 0;
    z-index: -1;
    width: 1em;
    border-right: 1em solid ${props => props.theme.colors.main3};
    border-left: 0em solid transparent;
    border-bottom: 0.5em solid transparent;
    border-top: 1.8em solid transparent;
    box-sizing: border-box;
    border-radius: .25em;
`

const TagSection = styled.div`
    display: flex;
    align-items: center;
    padding: .25em .75em .25em .5em;
    background-color: ${props => props.theme.colors.main1};
    border-radius: .25em .25em .25em 0;
    color: ${props => props.theme.colors.light1};
    
    svg {
        color: ${props => props.theme.colors.light1};
        font-size: 1.25em;
        margin-right: .25em;
    }
`