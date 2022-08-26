import { createContext, useEffect, useState } from "react";
import { parseCookies, setCookie } from 'nookies'
import { useRouter } from 'next/router'
import React from 'react'
import api from "../handleAPI"
import { IAuthContext } from "./Interfaces/IAuthContext";
import { ISignInData } from "./Interfaces/ISignInData";
import { userRoutes } from "../../config/routes/api/userRoutes";

export const AuthContext = createContext({} as IAuthContext)

export function AuthProvider({ children }: any) {
    const [token, setToken] = useState<string>('')
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
    const [fetching, setFetching] = useState<boolean>(false)
    const [message, setMessage] = useState<string>('')
    const [fail, setFail] = useState<boolean>(false)

    const router = useRouter()
    useEffect(() => {
        const { 'LocalizaAtivo-token': savedToken } = parseCookies()
        setIsAuthenticated(!!savedToken)
    }, [])

    function clearState() {
        setMessage('')
        setFail(false)
        setFetching(false)
    }

    function initializeFetch() {
        setFetching(true)
    }

    async function signIn(user: ISignInData) {
        await api.post(userRoutes.login, user)
            .then((response) => {
                setCookie(undefined, 'LocalizaAtivo-token', response.data.data, {
                    maxAge: 60 * 60 * 3 * 24 * 7, //7 dias
                })
                setCookie(undefined, 'email-user', user.email, {
                    maxAge: 60 * 60 * 3 * 24 * 7, //7 dias
                })
                api.defaults.headers.common['Authorization'] = `Bearer ${response.data.message}`
                //@ts-ignore
                api.defaults.headers['Authorization'] = `Bearer ${response.data.message}`
                setToken(response.data.data)
                setIsAuthenticated(!!response.data.data)
                setFetching(false)
                router.push('/')
            })
            .catch((ex) => {
                setFetching(false)
                console.log(ex)
                if (ex.response.data.message === 'Email ou senha inválidos.') {
                    setMessage(ex.response.data.message)
                    setFail(true)
                }
            })
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, signIn, token, fetching, initializeFetch, message, fail, clearState }}>
            {children}
        </AuthContext.Provider>
    )
}