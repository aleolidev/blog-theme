import { useMediaQuery } from "@material-ui/core"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { A } from "../elements"

export const Articles = ({ articles, lang }) => {
    const isMobile = useMediaQuery('(max-width: 50rem)')

    return (
        <ArticlesWrapper>
            {articles.map(({ node }) => {    
            const image = node.frontmatter.featureImage.childImageSharp.gatsbyImageData;
            const category = node.frontmatter.categories[0]

            return (
                <ArticleWrapper key={ node.frontmatter.title }>
                    <ImageWrapper>
                        <A href={`/${lang}/${category}/${node.frontmatter.slug}`}>
                            <GatsbyImage 
                                image={ image ? image : null }
                                fadeIn={false} 
                                placeholder="blurred"
                                alt=""
                            />
                        </A>
                    </ImageWrapper>
                    <TitleWrapper>
                        <A 
                            href={`/${lang}/${category}/${node.frontmatter.slug}`} 
                            fontSize={isMobile ? '1.2em' : '1.5em'} 
                            fontWeight='700'
                            hoverColor="main1"
                            color="main2" 
                        >
                            {node.frontmatter.title}
                        </A>
                    </TitleWrapper>
                    {
                        !isMobile ?
                        <>
                            <ExcerptWrapper>
                                {node.frontmatter.excerpt}
                            </ExcerptWrapper>
                            <ReadMoreWrapper>
                                <A 
                                    href={`/${lang}/${category}/${node.frontmatter.slug}`} 
                                    fontSize='.8em' 
                                    fontWeight='700'
                                    color="main1"
                                >
                                    Read more »
                                </A>
                            </ReadMoreWrapper>
                        </> : null
                    }
                    <PublicationWrapper>
                        {node.frontmatter.author} - {node.frontmatter.date}
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
    // padding: 1.5em 0 0 0;
`

const PublicationWrapper = styled.div`
    font-size: 0.8em;
    margin: 2rem 0 0.5rem 0;
    color: ${props => props.theme.colors.dark3};
    text-transform: uppercase;
    font-weight: 700;

    @media ${props => props.theme.breakpoints.tablet} {   
        margin: 1rem 0 0.5rem 0;
    }

    @media ${props => props.theme.breakpoints.mobile} {    
        margin: .5rem 0;
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