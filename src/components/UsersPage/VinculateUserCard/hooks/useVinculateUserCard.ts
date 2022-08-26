import { useQueryClient } from "@tanstack/react-query";
import { FormEvent, useState } from "react";
import useVinculateUser from "../../../../hooks/users/useVinculateUser";
import { PayloadVinculateUser } from "../../../../service/userService/types";
import { handleAxiosError } from "../../../../utils/axios/axiosError";

export default function useVinculateUserCard(){
    const { mutateAsync: vinculate, isLoading, reset } = useVinculateUser()
    const query = useQueryClient()
    const [successMessage, setSuccessMessage] = useState<string>('')
    const [errorMessage, setErrorMessage] = useState<string>('')

    function clearState(){
        setErrorMessage('')
        setSuccessMessage('')
        reset()
    }

    async function onSubmit(e: FormEvent){
        e.preventDefault()
        const userSelect = document.getElementById('userSelect') as HTMLSelectElement
        const empresaSelect = document.getElementById('empresaSelect') as HTMLSelectElement

        const userId = userSelect.value;
        const empresaId = empresaSelect.value;

        const vinculatePayload: PayloadVinculateUser = {
            id: userId,
            idEmpresa: empresaId
        }

        await vinculate(vinculatePayload, {
            onSuccess: (res) => {
                query.invalidateQueries(['userList'])
                setSuccessMessage(res.data.message)
            },
            onError: (err) => {
                setSuccessMessage("")
                const { messageError } = handleAxiosError(err);
                setErrorMessage(messageError);
            },
        })
    }

    return {onSubmit, isLoading, successMessage, errorMessage, clearState}
}