import React from "react"
import styled from "styled-components"
import { CardWrapper, P } from "../elements"
import { FakeButton } from "../components"
import { GatsbyImage } from "gatsby-plugin-image"
import { cardelement } from "../translations/translations"
import { Date } from "./Date"

export const ContentCard = ({ date, modifiedDate, title, image, slug, category, lang }) => {
    return (
        <CardWrapper href={`/${lang}/${category}/${slug}/`}>
            <GatsbyImage 
                image={ image ? image : null } 
                fadeIn={false}
                alt={ title }
            />
            <P size="small" color="dark2" margin="1rem 1rem 0 1rem">
                {title} <br />
                <DateWrapper>
                    <Date 
                        lang={ lang } 
                        originalDate={ date } 
                        modifiedDate={ modifiedDate } 
                        hideDash={ true } 
                        fontSize={ ".8rem" }
                    />
                </DateWrapper>
                <ButtonWrapper style={{ justifyContent: 'flex-end' }}>
                    <FakeButton>{ cardelement.read_more[lang] }</FakeButton> {/* SEO Purposes */}
                </ButtonWrapper>
            </P>
        </CardWrapper>
    )
}

const DateWrapper = styled.span`
    font-size: 0.75em;
    margin: 0 0 0.5rem 0 !important;
    color: ${props => props.theme.colors.dark2}
`

const ButtonWrapper = styled.span`
    padding: .5em 0 1em 0;
    display: flex;
`