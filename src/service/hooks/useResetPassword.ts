import { AxiosResponse } from 'axios'
import { Dispatch, SetStateAction, useState } from 'react'
import { userRoutes } from '../../config/routes/api/userRoutes'
import api from '../handleAPI'
import { CodeVerifyObject, ResetPasswordObject } from './types/useResetPasswordTypes'

/**
 * 
 * @param path API path
 * @returns object with data, is a hook
 */
export const useResetPassword = () => {
    const [fetchingResetPassword, setFetchingResetPassword] = useState<boolean>(false)
    const [errorResetPassword, setErrorResetPassword] = useState<string>('')

    function clearStateReset() {
        setErrorResetPassword('')
        setFetchingResetPassword(false)
    }

    async function codeVerify(body: CodeVerifyObject, setStep: Dispatch<SetStateAction<any>>){
        setFetchingResetPassword(true)
        await api.post(userRoutes.verifyResetCode, body)
                .then((res: AxiosResponse) => {
                    setFetchingResetPassword(false)
                    api.defaults.headers.common['Authorization'] = `Bearer ${res.data.message}`
                    //@ts-ignore
                    api.defaults.headers['Authorization'] = `Bearer ${res.data.message}`
                    setStep(2)
                })
                .catch((e) => {
                    setErrorResetPassword(e.response.data.message)
                    setFetchingResetPassword(false)
                })
    }

    async function resetPassword(body: ResetPasswordObject, setStep: Dispatch<SetStateAction<any>>){
        setFetchingResetPassword(true)
        console.log(api.defaults.headers)
        await api.put(userRoutes.changePasswordReset, body)
                .then((res: AxiosResponse) => {
                    setFetchingResetPassword(false)
                    setStep(3)
                })
                .catch((e) => {
                    setErrorResetPassword(e.response.data.message)
                    setFetchingResetPassword(false)
                })
    }

    return { fetchingResetPassword, errorResetPassword, clearStateReset, codeVerify, resetPassword }
}