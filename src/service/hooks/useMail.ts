import { AxiosResponse } from 'axios'
import { Dispatch, SetStateAction, useState } from 'react'
import api from '../handleAPI'
import { emailObject } from './types/useMailTypes'

/**
 * 
 * @param path API path
 * @returns object with data, is a hook
 */
export const useMail = (path: string) => {
    const [fetching, setFetching] = useState<boolean>(false)
    const [message, setMessage] = useState<string>('')

    function clearState() {
        setMessage('')
        setFetching(false)
    }

    async function send(emailObject: emailObject, setStep: Dispatch<SetStateAction<any>>): Promise<void>{
        setFetching(true)
        api.post(`${path}`, emailObject)
            .then((res: AxiosResponse<any, any>) => {
                setFetching(false)
                setStep(1)
            })
            .catch((e) => {
                setFetching(false)
                setMessage(e.response.data.message)
            })
    }

    return { fetching, message, send, clearState }
}