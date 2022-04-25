import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { A, FooterWrapper, P } from "../elements"
import { Column, Grid } from "../components"
import { footer } from "../translations/translations"
import styled from "styled-components"
import { useMediaQuery } from "@material-ui/core"
import langs from "../translations/langs"
import { slugify } from "../utils/utils"

export const Footer = ({ lang }) => {
    
    const isTablet = useMediaQuery('(max-width: 65rem)')
    const isMobile = useMediaQuery('(max-width: 50rem)')

    let existingLanguages = {};

    // Initialize dict to false
    for(let lang_code in langs) {
        existingLanguages[langs[lang_code]] = false;
    }

    const data = useStaticQuery(graphql`
        query FooterQuery {
            allMdx(sort: {fields: frontmatter___slug, order: ASC}) {
                edges {
                    node {
                        frontmatter {
                            lang
                            slug
                            title
                            category
                        }
                    }
                }
            }
        }
    `)

    const maxArticlesPerCategory = 10;

    const setLang = (article_lang) => {
        existingLanguages[article_lang] = true;
    }

    const filterArticles = (allMdx) => {
        let categories = {}

        allMdx.edges.forEach(({ node }) => {
            const { lang: node_lang, slug, title, category } = node.frontmatter
            setLang(node_lang);

            if (node_lang === lang) {
                if (categories[category]) {
                    if (categories[category].length < maxArticlesPerCategory) {
                        categories[category].push({slug, title, category})
                    }
                } else {
                    categories[category] = [{slug, title, category}]
                }
            }
        })

        return categories
    }

    const categoryData = filterArticles(data.allMdx)

    const desktopColumns = 6;
    const tabletColumns = 3;
    const mobileColumns = 1;    

    return (
        <FooterWrapper>
            {/* Categories and respective articles */}
            <Grid 
                id="all-categories"
                columns={desktopColumns} 
                tabletColumns={tabletColumns} 
                mobileColumns={mobileColumns} 
                gap={"4em"} 
                style={{
                    margin: '0 2em 1.5em 2em'
                }}
            >
                { 
                    Object.keys(categoryData).map((category, i) => {
                        const prettyCategory = slugify(category);
                        let prettyName = category.replaceAll('-', ' ');
                        prettyName = prettyName.charAt(0).toUpperCase() + prettyName.slice(1) // Capitalize
                        
                        let specialMargin = '2.5em 0 0 0';
                        if (isMobile && i < mobileColumns ) {
                            specialMargin = '0'
                        } else if (!isMobile && isTablet && i < tabletColumns) {
                            specialMargin = '0'
                        } else if (!isMobile && !isTablet && i < desktopColumns) {
                            specialMargin = '0'
                        }

                        return (
                            <Column justifyContent={"start"} specialMargin={specialMargin}>
                                <A href={`/${lang}/${prettyCategory}`} 
                                    color="light1" 
                                    fontSize={'0.875em'} 
                                    fontWeight={700} 
                                    mobileTextAlign="center"
                                    textTransform={'uppercase'} 
                                >
                                    {prettyName}
                                </A>
                                <HorizontalRule margin={".55em 0 .4em 0"}/>
                                {
                                    Object.keys(categoryData[category]).map((article) => {
                                        return (
                                            <A href={`/${lang}/${prettyCategory}/${categoryData[category][article].slug}`} 
                                                color="gray2" 
                                                fontSize={'0.875em'} 
                                                fontWeight={400}
                                                mobileTextAlign="center"
                                                margin="1em 0 0 0"
                                            >
                                                { categoryData[category][article].title }
                                            </A>
                                        )

                                    })
                                }
                            </Column>
                        )
                    })
                }
            </Grid>
            <HRFullWidthWrapper>
                <HorizontalRule />
            </HRFullWidthWrapper>
            {/* Choose Country */}
            <P 
                size="xSmall"
                color="light1"
                weight="bold"
                textAlign="center"
                textTransform="uppercase"
            >
                { footer.chooseCountryText[lang] }
            </P>
            <CountryWrapper id="countries">
                {
                    Object.keys(footer.countryName).map((lang_code) => {
                        if(existingLanguages[lang_code])
                        {
                            if (lang === lang_code)
                            {
                                return (
                                    <P 
                                        color="gray1" 
                                        size='xSmall'
                                        textAlign="center"
                                    >
                                        { footer.countryName[lang_code] }
                                    </P>
                                )
                            } else {
                                return (
                                    <A href={`/${lang_code}`} 
                                        color="gray3" 
                                        fontSize={'0.875em'} 
                                        fontWeight={400}
                                        textAlign="center"
                                    >
                                        { footer.countryName[lang_code] }
                                    </A>
                                )
                            }
                        }
                        
                        return null
                    })
                }
            </CountryWrapper>
            <HRFullWidthWrapper>
                <HorizontalRule />
            </HRFullWidthWrapper>
            <P size="xSmall" color="light1">{ footer.text[lang] }</P>
        </FooterWrapper>
    )
}

const HorizontalRule = styled.hr`
    border: 0;
    height: 1px;
    background: ${props => props.theme.colors.dark2};
    margin: ${props => props.margin ? props.margin : '.5em 0'};
`

const HRFullWidthWrapper = styled.div`
    width: 100%;
    padding: 0 2em 1em 2em;
`

const CountryWrapper = styled.div`
    margin: .75em 2em;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    p, a {
        margin: .25em 1.25em;
    }
`