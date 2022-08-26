import { Typography } from '@mui/material'
import type { NextPage } from 'next'
import { useContext, useLayoutEffect } from 'react'
import Alerts from '../components/shared/Alerts/Alerts'
import { LogoImg } from '../components/shared/LogoImg/LogoImg'
import { AuthContext } from '../service/context/AuthContext'
import { parseCookies } from 'nookies'
import { AuthCard } from '../components/Auth/AuthCard/AuthCard'
import { AuthForm } from '../components/Auth/AuthForm/AuthForm'

const Auth: NextPage = () => {
    const { signIn, fetching, initializeFetch, message, clearState } = useContext(AuthContext)

    return (
        <AuthCard height="27rem">
            <LogoImg />
            <Typography variant="h1" sx={{fontSize: 20, fontWeight: '600'}} >
                Entrar
            </Typography>
            <AuthForm signIn={signIn} initializeFetch={initializeFetch} fetching={fetching} message={message} />
            <Alerts
                message={message}
                severity="error"
                clearState={clearState}
            />
        </AuthCard>
    )
}

export default Auth

export const getServerSideProps = async (ctx: any) => {
    const { 'LocalizaAtivo-token': savedToken } = parseCookies(ctx)

    if(!!savedToken){
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {}
    }
}