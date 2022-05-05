import React from "react"
import { BiCookie } from 'react-icons/bi'
import styled from "styled-components"

const breadcrumb = {
    home: {
        'en-US': 'Home',
        'en-AU': 'Home',
        'en-GB': 'Home',
        'en-CA': 'Home',
        'de-DE': 'Startseite',
        'fr-FR': 'Accueil',
        'es-ES': 'Inicio'
    }
}

const cardelement = {
    read_more: {
        'en-US': 'Read More',
        'en-AU': 'Read More',
        'en-GB': 'Read More',
        'en-CA': 'Read More',
        'de-DE': 'Weiterlesen',
        'fr-FR': 'Lire la suite',
        'es-ES': 'Leer más'
    }
}

const articleelement = {
    read_more: {
        'en-US': 'Read More',
        'en-AU': 'Read More',
        'en-GB': 'Read More',
        'en-CA': 'Read More',
        'de-DE': 'Weiterlesen',
        'fr-FR': 'Lire la suite',
        'es-ES': 'Leer más'
    }
}

const navbar = {
    categories: {
        'en-US': 'Categories',
        'en-AU': 'Categories',
        'en-GB': 'Categories',
        'en-CA': 'Categories',
        'de-DE': 'Kategorien',
        'fr-FR': 'Catégories',
        'es-ES': 'Categorías'
    }
}

const footer = {
    text: {
        'en-US': '© 2022 Company. All right reserved.',
        'en-AU': '© 2022 Company. All right reserved.',
        'en-GB': '© 2022 Company. All right reserved.',
        'en-CA': '© 2022 Company. All right reserved.',
        'de-DE': '© 2022 Unternehmen. Alle Rechte vorbehalten.',
        'fr-FR': '',
        'es-ES': '© Empresa 2022. Todos los derechos reservados.'
    },
    chooseCountryText: {
        'en-US': 'Choose your country',
        'en-AU': 'Choose your country',
        'en-GB': 'Choose your country',
        'en-CA': 'Choose your country',
        'de-DE': 'Wähle dein Land',
        'fr-FR': 'Choisis ton pays',
        'es-ES': 'Elige tu país'
    },
    countryName: {
        'en-US': 'United States',
        'en-AU': 'Australia',
        'en-GB': 'United Kingdom',
        'en-CA': 'Canada',
        'de-DE': 'Deutschland',
        'fr-FR': 'France',
        'es-ES': 'España'
    }
    
}

const CookieWrapper = styled.span`
    display: flex;
    align-items: center;

    svg {
        font-size: 1.75rem;
        color: ${props => props.theme.colors.main1};
        margin-right: .5em;
    }
`

const StyledCookies = ({ children }) => {
    return (
        <CookieWrapper>
            <BiCookie />
            { children }
        </CookieWrapper>
    )
}

const cookies = {
    text: {
        'en-US': <StyledCookies><span><b>We use cookies!</b> This website uses cookies to ensure you get the best experience on our website.</span></StyledCookies>,
        'en-AU': <StyledCookies><span><b>We use cookies!</b> This website uses cookies to ensure you get the best experience on our website.</span></StyledCookies>,
        'en-GB': <StyledCookies><span><b>We use cookies!</b> This website uses cookies to ensure you get the best experience on our website.</span></StyledCookies>,
        'en-CA': <StyledCookies><span><b>We use cookies!</b> This website uses cookies to ensure you get the best experience on our website.</span></StyledCookies>,
        'de-DE': <StyledCookies><span><b>Wir verwenden Cookies!</b> Diese Website verwendet Cookies, um sicherzustellen, dass Sie die beste Erfahrung auf unserer Website erhalten.</span></StyledCookies>,
        'fr-FR': <StyledCookies><span><b>Nous utilisons des cookies !</b> Ce site utilise des cookies pour vous garantir la meilleure expérience sur notre site.</span></StyledCookies>,
        'es-ES': <StyledCookies><span><b>¡Usamos cookies!</b> Este página utiliza cookies para garantizar que obtengas la mejor experiencia en nuestro sitio web.</span></StyledCookies>,
    },
    accept: {
        'en-US': 'Accept',
        'en-AU': 'Accept',
        'en-GB': 'Accept',
        'en-CA': 'Accept',
        'de-DE': 'Annehmen',
        'fr-FR': 'Accepter',
        'es-ES': 'Aceptar'
    },
    decline: {
        'en-US': 'Decline',
        'en-AU': 'Decline',
        'en-GB': 'Decline',
        'en-CA': 'Decline',
        'de-DE': 'Ablehnen',
        'fr-FR': 'Déclin',
        'es-ES': 'Rechazar'
    }
    
}

const toc = {
    title: {
        'en-US': 'Table of contents',
        'en-AU': 'Table of contents',
        'en-GB': 'Table of contents',
        'en-CA': 'Table of contents',
        'de-DE': 'Index',
        'fr-FR': 'Indice',
        'es-ES': 'Índice'
    }
}

const error404 = {
    message: {
        'en-US': 'Oops... Looks like we couldn\'t find what you were looking for',
        'en-AU': 'Oops... Looks like we couldn\'t find what you were looking for',
        'en-GB': 'Oops... Looks like we couldn\'t find what you were looking for',
        'en-CA': 'Oops... Looks like we couldn\'t find what you were looking for',
        'de-DE': 'Hoppla... Anscheinend konnten wir nicht finden, wonach Sie gesucht haben',
        'fr-FR': 'Oups... Il semble que nous n\'ayons pas trouvé ce que vous cherchiez',
        'es-ES': 'Vaya... Parece que no hemos podido encontrar lo que buscabas'
    }
    
}

const productcard = {
    viewAtAmazon: {
        'en-US': 'View at Amazon',
        'en-AU': 'View at Amazon',
        'en-GB': 'View at Amazon',
        'en-CA': 'View at Amazon',
        'de-DE': 'Bei Amazon ansehen',
        'fr-FR': 'Voir sur Amazon',
        'es-ES': 'Ver en Amazon'
    }
}

const date = {
    localeLangs: {
        'en-US': 'en',
        'en-AU': 'en-au',
        'en-GB': 'en-gb',
        'en-CA': 'en-ca',
        'de-DE': 'de',
        'fr-FR': 'fr',
        'es-ES': 'es'
    },
    dateRelativeFormat: {
        'en-US': {
            future: "in %s",
            past: "%s ago",
            s: 'a few seconds',
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        'en-AU': {
            future: "in %s",
            past: "%s ago",
            s: 'a few seconds',
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        'en-GB': {
            future: "in %s",
            past: "%s ago",
            s: 'a few seconds',
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        'en-CA': {
            future: "in %s",
            past: "%s ago",
            s: 'a few seconds',
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        'de-DE': {
            future: "in %s",
            past: "vor %s",
            s: 'wenigen Sekunden',
            m: "einer Minute",
            mm: "%d Minuten",
            h: "einer Stunde",
            hh: "%d Stunden",
            d: "einem Tag",
            dd: "%d Tagen",
            M: "einem Monat",
            MM: "%d Monaten",
            y: "enime Jahr",
            yy: "%d Jahren"
        },
        'fr-FR': {
            future: "Dans %s",
            past: "Il y'a %s",
            s: function (number, withoutSuffix, key, isFuture) {
                return isFuture ? 
                    "En quelques secondes" : 
                    "Il y'a quelques secondes"
            },
            m: "une minute",
            mm: "%d minutes",
            h: "une heure",
            hh: "%d heures",
            d: function (number, withoutSuffix, key, isFuture) {
                return isFuture ? 
                    "En un jour" : 
                    "Il y'a un jour"
            },
            dd: "%d jours",
            M: "un mois",
            MM: "%d mois",
            y: "un an",
            yy: "%d ans"
        },
        'es-ES': {
            future: "en %s",
            past: "hace %s",
            s: 'unos segundos',
            m: "un minuto",
            mm: "%d minutos",
            h: "una hora",
            hh: "%d horas",
            d: "un día",
            dd: "%d días",
            M: "un mes",
            MM: "%d meses",
            y: "un año",
            yy: "%d años"
        }
    }
}

export { 
    breadcrumb, 
    cardelement, 
    articleelement, 
    navbar, 
    footer, 
    cookies, 
    toc, 
    error404,
    productcard,
    date,
}