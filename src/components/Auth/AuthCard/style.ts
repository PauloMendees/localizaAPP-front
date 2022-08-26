import { CssVarsProviderConfig } from "@mui/system/cssVars/createCssVarsProvider"
import { theme } from "../../../styles/theme"

export const container: object = {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

export const card = (height: string | undefined) => {
    return (
        {
            borderRadius: 2,
            backgroundColor: theme.palette.background.paper,
            boxShadow: '0px 0px 9px 1px rgba(0,0,0,0.10)',
            width: {
                xs: '20rem',
                sm: '26rem',
                md: '26rem',
                lg: '26rem',
                xl: '26rem'
            },
            height: height,
            padding: '2rem'
        }
    )
}