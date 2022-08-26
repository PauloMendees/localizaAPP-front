import { Typography } from "@mui/material"
import { useRouter } from "next/router"

const Confirmacao = () => {
    const router = useRouter()

    return <Typography variant='body1' sx={{fontSize: 11, marginTop: 5}}>Operação realizada com sucesso. <a className="link" onClick={() => { router.push("/auth") }}>Clique aqui</a> para voltar ao login.</Typography>
}

export { Confirmacao }