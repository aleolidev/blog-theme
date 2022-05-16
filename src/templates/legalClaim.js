import React from "react"
import { H1 } from "../elements"
import { Container, Content, LegalWrapper } from "../components"
import { legal, legalClaim } from "../translations/legal"
import parse from 'html-react-parser'

const LegalClaim = ({pageContext }, props) => {
    let { lang: lang_code } = pageContext
    let lang = 'en'
    const regex = /^[a-z]{2}-[a-z]{2}$/ig
    if (lang_code.match(regex))
        lang = lang_code.substring(0, 2)

    return (
        <Container>
            <Content hideBanner={ true }>
                <H1>{ legal.legalClaim[lang_code] }</H1>
                <LegalWrapper>{ parse(legalClaim[lang]) }</LegalWrapper>
            </Content>
        </Container>
    )
}

export default LegalClaim;