import React from 'react'
import BuyButton from './BuyButton'
import { GrAmazon } from "react-icons/gr"
import { productcard } from '../translations/translations'

export const MdxBuyButton = ({ lang, href }) => {
  return (
    <BuyButton 
        text={ productcard.viewAtAmazon[lang] }
        href={ href }
        icon={ <GrAmazon /> }
        // marginTop={ marginTop }
        hideMobile={ false }
        showJustInMobile={ true } 
        autoHeight={ true }
        marginTop={"0"}
    />
  )
}
