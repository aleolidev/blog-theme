import React from 'react'
import styled from 'styled-components'

export const LegalWrapper = ({ children }) => {
  return (
    <ContentWrapper margin={'1.5rem 0 0 0'}>{ children }</ContentWrapper>
  )
}

const ContentWrapper = styled.div`
    p, li, h4 {
        font-size: 1.125rem;
        line-height: 1.4375rem;
        text-decoration: none;
        font-weight: 400;
        color: ${props => props.theme.colors.dark1};
        text-align: left;
        text-transform: none;
    }

    h4 {
        font-size: 1.15rem;
        line-height: 1.65rem;
        font-weight: 700;
    }

    ul, h4, p {
        margin: 1.5rem 0 0 0;
    }

    li {
        margin-top: .75rem;
    }

    a {
        text-decoration: none;
        color: ${props => props.theme.colors.main1};
    }
`