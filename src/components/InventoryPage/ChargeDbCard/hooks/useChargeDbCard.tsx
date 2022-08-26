import { useState } from "react"
import useChargeDb from "../../../../hooks/item/useChargeDb"
import { ChargeDbPayload } from "../../../../service/itemService/types"
import { handleAxiosError } from "../../../../utils/axios/axiosError"

export default function useChargeDbCard(){
    const [file, setFile] = useState<File>()
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [successMessage, setSuccessMessage] = useState<string>('')

    const { mutateAsync: uploadFile, isLoading, isError } = useChargeDb()

    function handleFile(excel: File){
        if(excel) setFile(excel)
    }
    
    function clearState(){
        setErrorMessage('')
        setSuccessMessage('')
    }

    async function handleSubmit(){
        const formData = new FormData()
        if(!file) return
        formData.append('excel', file, file.name)
        const payload: ChargeDbPayload = {
            excel: formData
        }
        await uploadFile(payload, {
            onSuccess: (res) => {
                setSuccessMessage(res.data.data.message)
            },
            onError: (err) => {
                setSuccessMessage("")
                const { messageError } = handleAxiosError(err);
                setErrorMessage(messageError);
            },
        })
    }

    return {
        file,
        handleFile,
        handleSubmit,
        errorMessage,
        successMessage,
        isError,
        isLoading,
        clearState
    }
}