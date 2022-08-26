import { FormEvent, useState } from "react";
import useUpdateItem from "../../../../../../hooks/item/useUpdateItem";
import { UpdateItemPayload } from "../../../../../../service/itemService/types";
import { handleAxiosError } from "../../../../../../utils/axios/axiosError";

export default function useEditItemModal(){
    const [isOpenEditModal, setIsOpenEditModal] = useState<boolean>(false);
    const { mutateAsync: updateItem, isSuccess, isError, isLoading, reset } = useUpdateItem()
    const [successMessage, setSuccessMessage] = useState<string>('')
    const [errorMessage, setErrorMessage] = useState<string>('')

    function handleEditModal(){
        setIsOpenEditModal(!isOpenEditModal)
    }

    async function handleSubmit(e: FormEvent, id: string | undefined){
        e.preventDefault()
        if(!id) return
        const sequencial_localiza = (document.getElementById('sequencialUpdateInput') as HTMLInputElement).value
        const plaqueta = (document.getElementById('plaquetaUpdateInput') as HTMLInputElement).value
        const localizacao = (document.getElementById('localizacaoUpdateInput') as HTMLInputElement).value
        const andar = (document.getElementById("andarUpdateInput") as HTMLInputElement).value
        const codigo_de_barras = (document.getElementById("codigoUpdateInput") as HTMLInputElement).value
        const dono = (document.getElementById("donoUpdateInput") as HTMLInputElement).value
        const tipo = (document.getElementById("tipoUpdateInput") as HTMLInputElement).value
        const descricao = (document.getElementById("descricaoUpdateInput") as HTMLInputElement).value

        const payload: UpdateItemPayload = {
            id,
            data: {
                andar,
                codigo_de_barras,
                descricao,
                dono,
                lido: "false",
                localizacao,
                plaqueta,
                sequencial_localiza, 
                tipo
            }
        }

        await updateItem(payload, {
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


    return {
        isOpenEditModal,
        handleEditModal,
        handleSubmit,
        successMessage,
        errorMessage,
        isSuccess,
        isError,
        isLoading,
        reset
    }
}