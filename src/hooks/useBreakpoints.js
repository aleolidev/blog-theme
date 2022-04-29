import React, { useEffect, useState } from "react"
import theme from "../themes/theme";
import { debounce, mediaQuery, objectMap } from "../utils/utils";

const useBreakpoints = (props) => {
    const [breakpoints, setBreakpoints] = useState(
      objectMap(theme.breakpoints, v => mediaQuery(v))
    )

    React.useEffect(() => {
        const debouncedHandleResize = debounce(function handleResize() {
          setBreakpoints(objectMap(theme.breakpoints, v => mediaQuery(v)))
        }, 50)
    
        window.addEventListener('resize', debouncedHandleResize)
    
        return _ => {
          window.removeEventListener('resize', debouncedHandleResize)
        }
    })

    return breakpoints;
}

export default useBreakpoints;