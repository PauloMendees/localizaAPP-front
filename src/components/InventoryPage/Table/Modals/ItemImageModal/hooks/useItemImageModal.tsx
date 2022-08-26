import { useState } from "react";
import useUploadPhoto from "../../../../../../hooks/item/useUploadPhoto";
import { AddPhotoPayload } from "../../../../../../service/itemService/types";
import { handleAxiosError } from "../../../../../../utils/axios/axiosError";

export default function useItemImageModal(){
    const [isOpenImageModal, setIsOpenImageModal] = useState<boolean>(false);
    const [onChangeImage, setOnChangeImage] = useState<boolean>(false)
    const [image, setImage] = useState<File>();
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [successMessage, setSuccessMessage] = useState<string>('')
    
    const { mutateAsync: uploadPhoto, isLoading: uploadLoading } = useUploadPhoto()

    function handleChangeImage(){
        setOnChangeImage(!onChangeImage)
    }

    function handleImageModal(){
        setIsOpenImageModal(!isOpenImageModal)
    }

    function handleImage(image: File){
        if(image){
            setImage(image)
        }
    }

    function clearState(){
        setSuccessMessage("")
        setErrorMessage("")
    }

    async function onSubmitNewPhoto(id: string){
        const formData = new FormData()
        if (!image) return
        formData.append('image', image, image.name)
        const payload: AddPhotoPayload = {
            id: id,
            photo: formData
        }
        await uploadPhoto(payload, {
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
        isOpenImageModal,
        handleImageModal,
        onChangeImage,
        handleChangeImage,
        image,
        handleImage,
        onSubmitNewPhoto,
        errorMessage,
        successMessage,
        uploadLoading,
        clearState
    }
}