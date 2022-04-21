import styled from "styled-components"

export const P = styled.p`
    margin: ${props => props.margin ? props.margin : 0};
    font-size: ${props => {
        switch(props.size) {
            case "medium":
                return "1.125rem"
            case "small":
                return "1rem"
            case "xSmall":
                return "0.875rem"
            case "xxSmall":
                return "0.75rem"
            default:
                return "1.125rem"
        }
    }};
    line-height: ${props => {
        switch(props.size) {
            case "medium":
                return "1.4375rem"
            case "small":
                return "1.375rem"
            case "xSmall":
                return "1.125rem"
            default:
                return "1.4375rem"
        }
    }};
    text-decoration: ${
        props => props.textDecoration ? props.textDecoration : "none"};
    font-weight: ${props => {
        switch (props.weight) {
            case "normal":
                return 400;
            case "bold":
                return 700;
            default:
                return 400;
        }
    }};
    color: ${props => {
        switch(props.color) {
            case "dark1":
                return props.theme.colors.dark1
            case "dark2":
                return props.theme.colors.dark2
            case "dark3":
                return props.theme.colors.dark3
            case "gray1":
                return props.theme.colors.gray1
            case "gray2":
                return props.theme.colors.gray2
            case "light1":
                return props.theme.colors.light1
            case "light2":
                return props.theme.colors.light2
            default:
                return props.theme.colors.dark1
        }
    }};
    text-align: ${props => props.textAlign ? props.textAlign : "left"}
`

export const H1 = styled.h1`
    font-size: 2.25rem;
    line-height: 2.5rem;
    color: ${props => {
        switch(props.color) {
            case "dark1":
                return props.theme.colors.dark1
            case "dark2":
                return props.theme.colors.dark2
            case "dark3":
                return props.theme.colors.dark3
            case "light1":
                return props.theme.colors.light1
            case "light2":
                return props.theme.colors.light2
            default:
                return props.theme.colors.dark1
        }
    }};
    font-weight: 400;
    text-align: ${props => props.textAlign ? props.textAlign : "left"};
    margin: ${props => props.margin ? props.margin : 0};

    @media ${props => props.theme.breakpoints.tablet} {
        text-align: ${props => props.mobileTextAlign ? props.mobileTextAlign : (props.textAlign ? props.textAlign : "left")};
        margin: ${props => props.mobileMargin ? props.mobileMargin : (props.margin ? props.margin : 0)};
    }
`

export const H2 = styled.h2`
    font-size: 1.5rem;
    line-height: 1.87rem;
    color: ${props => {
        switch(props.color) {
            case "dark1":
                return props.theme.colors.dark1
            case "dark2":
                return props.theme.colors.dark2
            case "dark3":
                return props.theme.colors.dark3
            case "light1":
                return props.theme.colors.light1
            case "light2":
                return props.theme.colors.light2
            default:
                return props.theme.colors.dark1
        }
    }};
    font-weight: 400;
    text-align: ${props => props.textAlign ? props.textAlign : "left"}
    margin: ${props => props.margin ? props.margin : 0};
`

export const A = styled.a`
    font-size: ${props => props.fontSize ? props.fontSize : '1em'};
    color: ${props => {
        switch(props.color) {
            case "main1":
                return props.theme.colors.main1
            case "main2":
                return props.theme.colors.main2            
            case "dark1":
                return props.theme.colors.dark1
            case "dark2":
                return props.theme.colors.dark2
            case "dark3":
                return props.theme.colors.dark3
            case "light1":
                return props.theme.colors.light1
            case "light2":
                return props.theme.colors.light2
            default:
                return props.theme.colors.dark1
        }
    }};

    cursor: pointer;
    font-weight: ${props => props.fontWeight ? props.fontWeight : '400'};
    text-align: ${props => props.textAlign ? props.textAlign : "left"};
    margin: ${props => props.margin ? props.margin : 0};
    text-decoration: ${props => props.textDecoration ? props.textDecoration : 'none'};
    transition: filter 1s ease;

    &:hover {
        color: ${props => {
            switch(props.hoverColor) {
                case "main1":
                    return props.theme.colors.main1
                case "main2":
                    return props.theme.colors.main2            
                case "dark1":
                    return props.theme.colors.dark1
                case "dark2":
                    return props.theme.colors.dark2
                case "dark3":
                    return props.theme.colors.dark3
                case "light1":
                    return props.theme.colors.light1
                case "light2":
                    return props.theme.colors.light2
                default:
                    return props.theme.colors.main1
            }
        }};
    }

    @media ${props => props.theme.breakpoints.tablet} {
        text-align: ${props => props.mobileTextAlign ? props.mobileTextAlign : (props.textAlign ? props.textAlign : "left")};
        margin: ${props => props.mobileMargin ? props.mobileMargin : (props.margin ? props.margin : 0)};
    }
`