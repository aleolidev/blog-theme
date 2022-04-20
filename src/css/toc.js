import theme from "../themes/theme"

const styles = ({
    desktop: {
        // display: "block",
        
        backgroundColor: "green",

        [`@media ${theme.breakpoints.tablet}`]: {
            // display: "none",        
            backgroundColor: "blue",
        },
    },
    mobile: {
        // display: "none",
        backgroundColor: "red",

        [`@media ${theme.breakpoints.tablet}`]: {
            // display: "block",
            backgroundColor: "yellow",
        },
    }
})

export default styles;