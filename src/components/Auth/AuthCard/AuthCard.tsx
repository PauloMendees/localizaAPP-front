import { Box } from "@mui/system"
import { IAuthCard } from "./IAuthCard"
import { card, container } from "./style"

const AuthCard = (props: IAuthCard) => {
    return (
        <Box sx={container} component="div">
            <Box sx={card(props.height)}>
                { props.children }
            </Box>
        </Box>
    )
}

export { AuthCard }