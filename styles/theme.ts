import { extendTheme } from "@chakra-ui/react"


const theme = extendTheme({
    fonts: {
        body: 'Poppins',
        heading: 'Poppins'
    },
    colors: {
        gray: {
            "900": "#181B23",
            "800": "#1F2029",
            "700": "#353646",
            "600": "#47585B",
            "500": "#616480",
            "400": "#797D9A",
            "300": "#9699B0",
            "200": "#B3B5C6",
            "100": "#D1D2DC",
            "50": "#F5F8FA",
        }
    },
    styles: {
        global: {
            body: {
                bg: 'gray.50',
                color: 'gray.600'
            }
        }
    }
})

export default theme;