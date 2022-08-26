import { FormEvent, useEffect, useState } from "react"
import usePostItem from "../../../../hooks/item/usePostItem"
import useUploadPhoto from "../../../../hooks/item/useUploadPhoto"
import { AddPhotoPayload, PostItemPayload } from "../../../../service/itemService/types"
import { handleAxiosError } from "../../../../utils/axios/axiosError"

export default function useRegisterItemCard() {
    const [uploadedPhoto, setUploadedPhoto] = useState<File>()
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [successMessage, setSuccessMessage] = useState<string>('')

    const { mutateAsync: postItem, isLoading: postItemLoading, data: postData } = usePostItem()
    const { mutateAsync: uploadPhoto, isLoading: uploadLoading } = useUploadPhoto()

    function handlePhoto(file: File) {
        setUploadedPhoto(file)
    }

    function clearState() {
        setSuccessMessage('')
        setErrorMessage('')
    }

    async function addPhoto(id: string) {
        const formData = new FormData()
        if (!uploadedPhoto) return
        formData.append('image', uploadedPhoto, uploadedPhoto.name)
        const payload: AddPhotoPayload = {
            id: id,
            photo: formData
        }
        await uploadPhoto(payload, {
            onSuccess: () => {
                setSuccessMessage(successMessage)
            },
            onError: (err) => {
                setSuccessMessage("")
                const { messageError } = handleAxiosError(err);
                setErrorMessage(messageError);
            },
        })
    }

    async function handleSubmit(e: FormEvent) {
        e.preventDefault()
        const sequencial = (document.getElementById('sequencialInput') as HTMLInputElement).value
        const plaqueta = (document.getElementById('plaquetaInput') as HTMLInputElement).value
        const localizacao = (document.getElementById('localizacaoInput') as HTMLInputElement).value
        const andar = (document.getElementById("andarInput") as HTMLInputElement).value
        const codigo = (document.getElementById("codigoInput") as HTMLInputElement).value
        const dono = (document.getElementById("donoInput") as HTMLInputElement).value
        const tipo = (document.getElementById("tipoInput") as HTMLInputElement).value
        const descricao = (document.getElementById("descricaoInput") as HTMLInputElement).value

        if (!codigo || !sequencial || !plaqueta || !localizacao || !andar || !dono || !tipo || !descricao || !uploadedPhoto) {
            setErrorMessage("Todos campos são requeridos.")
            return
        }

        const payload: PostItemPayload = {
            andar: andar,
            codigo_de_barras: codigo,
            descricao: descricao,
            dono: dono,
            lido: "false",
            localizacao: localizacao,
            plaqueta: plaqueta,
            sequencial_localiza: sequencial,
            tipo: tipo
        }

        await postItem(payload, {
            onSuccess: async (res) => {
                setSuccessMessage(res.data.message)
                await addPhoto(res.data.data.id)
            },
            onError: (err) => {
                setSuccessMessage("")
                const { messageError } = handleAxiosError(err);
                setErrorMessage(messageError);
            },
        })
    }

    return { uploadedPhoto, handlePhoto, handleSubmit, postItemLoading, successMessage, clearState, errorMessage, uploadLoading }
}