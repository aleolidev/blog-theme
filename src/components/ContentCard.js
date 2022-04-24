import React from "react"
import styled from "styled-components"
import { CardWrapper, P } from "../elements"
import { FakeButton } from "../components"
import { GatsbyImage } from "gatsby-plugin-image"

export const ContentCard = ({ date, title, image, slug, category, lang }) => {
    return (
        <CardWrapper href={`/${lang}/${category}/${slug}/`}>
            <GatsbyImage 
                image={ image ? image : null } 
                // placeholder="blurred"
                fadeIn={false}
                alt=""
            />
            <P size="small" color="dark2" margin="1rem 1rem 0 1rem">
                {title} <br />
                <DateWrapper>
                    {date}
                </DateWrapper>
                <ButtonWrapper style={{ justifyContent: 'flex-end' }}>
                    <FakeButton>Read More</FakeButton> {/* SEO Purposes */}
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