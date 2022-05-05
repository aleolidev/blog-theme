// TODO: Customize theme 
const theme = {
    fonts: {
        main: "sans-serif",
        code: "monospace",
    },
    colors: {
        main1: "hsl(207, 95%, 40%)",
        main2: "hsl(207, 95%, 50%)",
        main3: "hsl(217, 81%, 36%)",
        dark1: "hsl(227, 2%, 12%)",
        dark2: "hsl(227, 2%, 26%)",
        dark3: "hsl(227, 2%, 40%)",
        gray1: "hsl(227, 2%, 54%)",
        gray2: "hsl(227, 2%, 68%)",
        gray3: "hsl(227, 2%, 86%)",
        light1: "hsl(0, 0%, 97%)",
        light2: "hsl(0, 0%, 99%)",
        starColor: "hsl(38, 95%, 55%)",
        amazonBuy: "hsl(36, 100%, 50%)",
    },
    breakpoints: {
        smallMobile: "only screen and (max-width: 30rem)",
        mobile: "only screen and (max-width: 50rem)",
        tablet: "only screen and (max-width: 65rem)",
        smallDesktop: "only screen and (max-width: 75rem)",
    },
    spacings: {
        xxSmall: ".25rem",
        xSmall: ".5rem",
        small: "1rem",
        medium: "2rem",
        large: "3rem",
        xLarge: "4rem",
        xxLarge: "6rem",
    },
    animations: {
        button: "box-shadow 0.3s ease",
        link: "color 0.2s ease",
    },
    shadows: {
        shadow1: "0px 5px 20px rgba(30, 30, 31, 0.05)",
        shadow2: "0px 5px 20px rgba(30, 30, 31, 0.15)",
    },
}

module.exports = theme;