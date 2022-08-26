import { createTheme } from "@mui/material";

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 700,
            md: 1080,
            lg: 1350,
            xl: 1536
        }
    },

    palette: {
        background: {
            paper: '#fff',
            default: '#f7f7f7'
        },
    },

    typography: {
        fontFamily: 'Nunito Sans, sans-serif',
    }
})

export { theme }