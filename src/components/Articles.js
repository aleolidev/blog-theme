import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { A } from "../elements"
import { articleelement } from "../translations/translations"
import { slugify } from "../utils/utils"
import { Date } from "./Date"

export const Articles = ({ articles, lang }) => {
    return (
        <ArticlesWrapper>
            {articles.map(({ node }) => {    
            const image = node.frontmatter.featureImage.childImageSharp.gatsbyImageData;
            const category = node.frontmatter.category
            const prettyCategory = slugify(category)
            const date = node.frontmatter.date
            const modifiedDate = node.frontmatter.modifiedDate
            const author = node.frontmatter.author

            return (
                <ArticleWrapper key={ node.frontmatter.title }>
                    <ImageWrapper>
                        <A href={`/${slugify(lang)}/${prettyCategory}/${node.frontmatter.slug}`}>
                            <GatsbyImage 
                                image={ image ? image : null }
                                fadeIn={false} 
                                placeholder="blurred"
                                alt={ node.frontmatter.title }
                            />
                        </A>
                    </ImageWrapper>
                    <TitleWrapper>
                        <A 
                            href={`/${slugify(lang)}/${prettyCategory}/${node.frontmatter.slug}`} 
                            fontWeight='700'
                            hoverColor="main1"
                            color="main2" 
                        >
                            {node.frontmatter.title}
                        </A>
                    </TitleWrapper>
                    <InfoWrapper>
                        <ExcerptWrapper>
                            {node.frontmatter.excerpt}
                        </ExcerptWrapper>
                        <ReadMoreWrapper>
                            <A 
                                href={`/${slugify(lang)}/${prettyCategory}/${node.frontmatter.slug}`} 
                                fontSize='.8em' 
                                fontWeight='700'
                                color="main1"
                                textTransform="uppercase"
                            >
                                { articleelement.read_more[lang] } »
                            </A>
                        </ReadMoreWrapper>
                    </InfoWrapper>
                    <PublicationWrapper>
                        {author ?
                            <>
                                <span> {node.frontmatter.author} </span>
                                <Date lang={ lang } originalDate={ date } modifiedDate={ modifiedDate } fontSize={ ".8rem" } />
                            </> 
                        :
                            <Date lang={ lang } originalDate={ date } modifiedDate={ modifiedDate } fontSize={ ".8rem" } hideDash={ true } />
                        }
                    </PublicationWrapper>
                </ArticleWrapper>
                )
            })}
        </ArticlesWrapper>
    )
}

const ArticlesWrapper = styled.div`
    & > :nth-child(1) {
        border-top: 1px solid ${props => props.theme.colors.gray3}

    }
`

const ArticleWrapper = styled.div`
    display: inline-block;
    padding: 2em 0;
    border-bottom: 1px solid ${props => props.theme.colors.gray3}
`

const InfoWrapper = styled.div`
    display: block;

    @media ${props => props.theme.breakpoints.mobile} {    
        display: none;
    }
`

const ImageWrapper = styled.div`
    float: right;
    width: 38%;
    margin: 0 0 0 3em;
    position: relative;

    @media ${props => props.theme.breakpoints.tablet} {    
        margin: 0 0 0 2em;
    }

    @media ${props => props.theme.breakpoints.mobile} {    
        margin: 0 0 0 1em;
    }
`

const TitleWrapper = styled.div`
    & > a {
        font-size: 1.5em;
    }

    @media ${props => props.theme.breakpoints.mobile} {    
        & > a {
            font-size: 1.2em;
        }
    }
`

const PublicationWrapper = styled.div`
    display: flex;
    align-items: center;
    font-size: 0.8em;
    margin: .75rem 0 0.5rem 0;
    color: ${props => props.theme.colors.dark3};
    font-weight: 700;

    & > span {
        margin: 0 .4rem 0 0;
    }

    @media ${props => props.theme.breakpoints.tablet} {   
        margin: 1rem 0 0.5rem 0;
    }

    @media ${props => props.theme.breakpoints.mobile} {    
        margin: .5rem 0;
        
        & > span {
            margin: 0 .5rem 0 0;
        }
    }
`

const ExcerptWrapper = styled.div`
    text-align: justify;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    padding: 2em 1em 0 0;

    @media ${props => props.theme.breakpoints.tablet} {    
        padding: 1em 1em 0 0;
    }
`

const ReadMoreWrapper = styled.div`
    padding: .5em 0 0 0;
    text-transform: uppercase;
`