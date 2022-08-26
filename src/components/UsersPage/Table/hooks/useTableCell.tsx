import { useState } from "react";
import useDeleteUser from "../../../../hooks/users/useDeleteUser";

export default function useTableCell(){
    const { mutateAsync: deleteRequest, isLoading, reset } = useDeleteUser()
    const [successMessage, setSuccessMessage] = useState<string>('')
    const [errorMessage, setErrorMessage] = useState<string>('')

    function clearState(){
        setErrorMessage('')
        setSuccessMessage('')
        reset()
    }

    async function onDelete(id: string){
        await deleteRequest(id, {
            onSuccess: (res) => {
                setSuccessMessage(res.data.message)
            },
            onError: (err) => {
                setSuccessMessage("")
                //@ts-ignore
                setErrorMessage(err.response.data.message);
            },
        })
    }

    return { isLoading, successMessage, errorMessage, onDelete, clearState }
}