import React from 'react'
import styled from 'styled-components'
import { 
    FacebookShareButton, 
    TwitterShareButton, 
    PocketShareButton,
    EmailShareButton 
} from 'react-share'

import { RiFacebookFill, RiTwitterFill } from "react-icons/ri"
import { FaGetPocket } from "react-icons/fa"
import { MdMail } from "react-icons/md"


const ShareButtons = ({ url, title, description }) => {
  return (
    <ButtonsWrapper>
        <FacebookShareButton url={ url } quote={ title }>
            <IconWrapper color='#3B5988'>
                <RiFacebookFill />
            </IconWrapper>
        </FacebookShareButton>
        <TwitterShareButton url={ url } title={ title }>
            <IconWrapper color='#00ACEE'>
                <RiTwitterFill />
            </IconWrapper>
        </TwitterShareButton>
        <PocketShareButton url={ url } title={ title }>
            <IconWrapper color='#EE4056'>
                <FaGetPocket />
            </IconWrapper>
        </PocketShareButton>
        <EmailShareButton url={ url } subject={ title } body={ description } separator={`\n\n`} openShareDialogOnClick onClick={() => {}}>
            <IconWrapper color='#47944A'>
                <MdMail />
            </IconWrapper>
        </EmailShareButton>
    </ButtonsWrapper>
  )
}

export default ShareButtons

const ButtonsWrapper = styled.div`
    display: flex;
    align-items: center;

    & svg {
        color: white;
    }

    & + p {
        margin-top: 1.5em;
    }

    @media ${props => props.theme.breakpoints.mobile} {    
        margin-top: .5em;

        & svg {
            font-size: .9em;
        }

        & + p {
            margin-top: 1em;
        }
    }
`

const IconWrapper = styled.div`
    padding: .45em;
    margin: .75em .5em 0 0;
    background-color: ${props => props.color};
    border-radius: .25em;
    display: flex;

    @media ${props => props.theme.breakpoints.mobile} {    
        margin: 0em .4em 0 0;
        padding: .35em;
    }
`