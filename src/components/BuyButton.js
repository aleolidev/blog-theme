import React from 'react'
import styled from 'styled-components'
import { BuyButtonElement } from '../elements'

const BuyButton = ({ text, href, icon, style }) => {
    return (
        <Button>
            <ButtonLink href={ href } target="_blank" >
                <BuyButtonElement style={ style }>

                    <ContentWrapper>
                        { icon }
                        { text }
                    </ContentWrapper>
                </BuyButtonElement>
            </ButtonLink>
        </Button>
    )
}

export default BuyButton

const ContentWrapper = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: .95em;
    font-size: 1rem;
    font-weight: 700;
    color: ${props => props.theme.colors.light1};

    svg {
        margin: .25em .5em 0 0;
    }
`

const ButtonLink = styled.a`
    width: 100%;
    text-decoration: none !important;
`

const Button = styled.div`
    margin-top: 1em;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 100%;
    width: 100%;

    @media ${props => props.theme.breakpoints.mobile} {  
        margin-top: 1.5em;
    }
`