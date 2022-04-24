import React from "react"
import CookieConsent from "react-cookie-consent";

export const Cookies = ({ theme }) => {
    return (
        <CookieConsent
            location="bottom"
            buttonText="Accept"
            declineButtonText="Decline"
            cookieName="gatsby-gdpr-google-analytics"
            enableDeclineButton
            style={{
                background: theme.colors.light1,
                boxShadow: '0px 0px 15px -1px rgba(0, 0, 0, 0.5)',
            }}
            contentStyle={{
                color: theme.colors.dark1
            }}
            buttonStyle={{
                padding: '0.6rem 1.5rem',
                margin: '.75rem .5rem',
                backgroundColor: theme.colors.main1,
                border: `1px solid transparent`,
                borderRadius: '0.5rem',
                color: theme.colors.light1,
                fontWeight: 700,
                fontSize: '0.875rem',
                width: 'fit-content',
                transition: 'filter 0.3s ease',
                cursor: 'pointer',
                textDecoration: 'none',
            }}
            declineButtonStyle={{
                padding: '0.6rem 1.5rem',
                margin: '.75rem .5rem',
                backgroundColor: 'transparent',
                border: `1px solid ${theme.colors.main1}`,
                borderRadius: '0.5rem',
                color: theme.colors.main1,
                fontWeight: 400,
                fontSize: '0.875rem',
                width: 'fit-content',
                transition: 'filter 0.3s ease',
                cursor: 'pointer',
                textDecoration: 'none',
            }}
        >
            {/* TODO: Change cookies text */}
            We use cookies! 
        </CookieConsent> 
    )
}