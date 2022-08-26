import { useRouter } from "next/router";
import { destroyCookie, parseCookies } from "nookies";
import { useEffect, useState } from "react";
import { localRoutes } from "../../config/routes/local";

export default function useErrorFetch(error: unknown) {
    const router = useRouter()
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [redirected, setRedirected] = useState<boolean>(false)

    useEffect(() => {
        if(!error || redirected){
            setRedirected(false)
            return
        } else {
            //@ts-ignore
            if (error.response.status === 401) {
                destroyCookie(null, 'LocalizaAtivo-token')
                router.push(localRoutes.login)
                setRedirected(true)
            } else {
                //@ts-ignore
                setErrorMessage(error.response.data.message)
            }
        }
    }, [error])

    return { errorMessage }
}