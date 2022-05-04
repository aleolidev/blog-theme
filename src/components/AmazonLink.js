import React from 'react'

export const AmazonLink = ({ href, children }) => {
  return (
    <a href={ href } rel="nofollow sponsored noopener noreferrer" target="_blank">{ children }</a>
  )
}