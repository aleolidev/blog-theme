import React from "react"
import { NavWrapper } from "../elements"
import { StaticImage } from "gatsby-plugin-image"
import { HiOutlineTranslate } from 'react-icons/hi'
import styled from "styled-components"
import { navbar } from "../translations/translations"
import { slugify } from "../utils/utils"

const logoHeight = 40
const logoWidth = 40

export const Nav = ({ lang }) => {
    const path = typeof window !== 'undefined' ? window.location.pathname : '';
    return (
        <NavWrapper>
            <LogoWrapper href={ (path === `/${slugify(lang)}` || path === `/${slugify(lang)}/`) ? null : `/${slugify(lang)}`}>
                {/* TODO: Modify alt for web name */}
                <StaticImage src={ "../images/logo.svg" } alt="Web Logo" placeholder="blurred" width={ logoWidth } height={ logoHeight }/>
                <LogoText>DEMO</LogoText>
            </LogoWrapper>
            <EndWrapper>
                <Categories href='#all-categories'>
                    { navbar.categories[lang] }
                </Categories>
                <LanguageWrapper href='#countries' aria-label="Translations">
                    <LangIconWrapper>
                        <HiOutlineTranslate />
                    </LangIconWrapper>
                </LanguageWrapper>
            </EndWrapper>
        </NavWrapper>
    )
}

const LogoWrapper = styled.a`
    margin-left: 1.5rem;
    display: flex;
    align-items: center;
    text-decoration: none;
`

const LogoText = styled.p`
    font-size: 1.75rem;
    color: ${props => props.theme.colors.main1};
    font-weight: 700;
    margin-left: .5rem;
`

const EndWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(${logoHeight}px + 1rem);
`

const Categories = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 .65em;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 700;
    color ${props => props.theme.colors.main1};   
    // background-color: ${props => props.theme.colors.light1};
    text-decoration: none;
    transition: all .25s ease;

    :hover {    
        background-color: ${props => props.theme.colors.main1};
        color ${props => props.theme.colors.light1};    
    }
`

const LanguageWrapper = styled.a`    
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    cursor: pointer;
    transition: all .25s ease;

    svg {
        font-size: 1.4rem;
        color ${props => props.theme.colors.main1};   
        transition: all .25s ease; 
    }

    :hover, :focus {    
        background-color: ${props => props.theme.colors.main1};

        svg {
            font-size: 1.4rem;
            color ${props => props.theme.colors.light1};    
        }

        div {
            border-left: 1px solid transparent;
        }
    }
`

const LangIconWrapper = styled.div`
    padding: 0 .65em;
    border-left: 1px solid ${props => props.theme.colors.gray3};
    transition: all .25s ease;
`