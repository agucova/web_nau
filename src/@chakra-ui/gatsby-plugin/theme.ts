// src/@chakra-ui/gatsby-plugin/theme.js
import { extendTheme } from "@chakra-ui/react"
const theme = {
    textStyles: {
        h2: {
            fontFamily: "Inter",
            fontSize: "4xl"
        }
    }
}

export default extendTheme(theme)
