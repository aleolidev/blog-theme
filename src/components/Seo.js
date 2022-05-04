import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import { getSrc } from "gatsby-plugin-image"

export const Seo = ({ description, keywords, title, image, url, author, lang, publishedDate, modifiedDate, isArticle, articleCategory }) => {
    
    const origin = typeof window !== 'undefined' ? window.location.origin : '';

    return (
        <StaticQuery
            query={ detailsQuery }
            render={ data => {
                const metaDescription = description || data.site.siteMetadata.description
                const metaTitle = title || data.site.siteMetadata.title
                const metaAuthor = author || data.site.siteMetadata.author
                const metaUrl = url || data.site.siteMetadata.url
                const metaImage = image || data.site.siteMetadata.image
                const metaKeywords = keywords || ["default metakeywords", "blog keywords"]

                const imageUrl = origin + getSrc(metaImage);
                const { width: imgWidth, height: imgHeight} = metaImage

                return (
                    <Helmet
                        htmlAttributes={{
                            lang: lang ? lang : 'en-US',
                        }}
                        title={title}
                        link={[
                            { rel : 'canonical', href : metaUrl  },
                        ]}
                        meta={[
                            {
                                name: `description`,
                                content: metaDescription,
                            },
                            {
                                name: `og:title`,
                                content: metaTitle,
                            },
                            {
                                name: `og:description`,
                                content: metaDescription,
                            },
                            {
                                name: `og:type`,
                                content: `website`,
                            },
                            {
                                name: `og:image`,
                                content: imageUrl,
                            },
                            {
                                name: `og:url`,
                                content: metaUrl,
                            },
                            {
                                name: `twitter:card`,
                                content: `summary_large_image`,
                            },
                            {
                                name: `twitter:creator`,
                                content: metaAuthor,
                            },
                            {
                                name: `twitter:title`,
                                content: metaTitle,
                            },
                            {
                                name: `twitter:description`,
                                content: metaDescription,
                            },
                            {
                                name: `twitter:image`,
                                content: imageUrl,
                            },
                        ].concat(
                            metaKeywords && metaKeywords.length > 0 ? {
                                name: `keywords`,
                                content: metaKeywords.join(`, `),
                            } : []
                        )}
                    >                        
                        <script type="application/ld+json">{JSON.stringify( isArticle && {
                            "@context": "https://schema.org",
                            "@type": "Article",
                            "mainEntityOfPage": metaUrl,
                            "name": metaTitle,
                            "headline": metaTitle,
                            "datePublished": publishedDate,
                            "dateModified": modifiedDate,
                            "publisher": {
                                "@type": "Organization",
                                "name": "Web Page", // TODO: Change webpage name
                            },
                            "image": {
                                "@type": "ImageObject",
                                "url": imageUrl,
                                "width": imgWidth,
                                "height": imgHeight
                            },
                            "author": {
                                "@type": "Person",
                                "name": metaAuthor,
                                "url": "https://twitter.com/InmortalKaktus",
                            },
                            "url": metaUrl,
                            "thumbnailUrl": imageUrl,
                            "articleSection": articleCategory,
                            "creator": metaAuthor,
                            "keywords": metaKeywords
                        })}</script>
                    </Helmet> 
                )
            }}
        />
    )
}

const detailsQuery = graphql`
    query DefaultSEOQuery {
        site {
            siteMetadata {
                title
                description
                author
                image
            }
        }
    }
`