import { FormEvent, useState } from "react"
import useAddEmpresa from "../../../../hooks/empresa/useAddEmpresa"
import { PayloadAddEmpresa } from "../../../../service/empresaService/types"
import { handleAxiosError } from "../../../../utils/axios/axiosError"

export default function useAddEmpresaCard(){
    const { mutateAsync: addEmpresa, isLoading, reset } = useAddEmpresa()
    const [successMessage, setSuccessMessage] = useState<string>('')
    const [errorMessage, setErrorMessage] = useState<string>('')

    function clearState(){
        setErrorMessage('')
        setSuccessMessage('')
        reset()
    }

    async function onSubmit(e: FormEvent){
        e.preventDefault()
        const nameInput = document.getElementById('empresaInput') as HTMLInputElement
        const name = nameInput.value

        const payload: PayloadAddEmpresa = {
            name: name
        }

        await addEmpresa(payload, {
            onSuccess: (res) => {
                setSuccessMessage(res.data.message)
            },
            onError: (err) => {
                setSuccessMessage("")
                const { messageError } = handleAxiosError(err);
                setErrorMessage(messageError);
            },
        })
    }

    return { onSubmit, successMessage, errorMessage, isLoading, clearState }
}