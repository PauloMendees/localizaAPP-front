import React from 'react'
import { Item } from '../../../../../service/itemService/types';
import Alerts from '../../../../shared/Alerts/Alerts';
import Button from '../../../../shared/Button';
import { ModalBase } from '../../../../shared/Modal';
import useModal from '../../../../shared/Modal/hook/useModal';
import OutlinedButton from '../../../../shared/OutlinedButton';
import UploadZone from '../../../../shared/UploadZone';
import { When } from '../../../../shared/When';
import useItemImageModal from './hooks/useItemImageModal';

type EditItemModalProps = {
    open: boolean;
    handleClose: () => void
    clickedItem: Item
}

export function ItemImageModal({ open, handleClose, clickedItem }: EditItemModalProps) {
    const {
        onChangeImage,
        handleChangeImage,
        handleImage,
        onSubmitNewPhoto,
        errorMessage,
        successMessage,
        uploadLoading,
        clearState
    } = useItemImageModal()

    return (
        <>
            <Alerts
                message={errorMessage ? errorMessage : successMessage}
                severity={errorMessage ? 'error' : 'success'}
                clearState={clearState}
            />
            <ModalBase
                open={open}
                handleClose={handleClose}
                title={onChangeImage ? "Alterar imagem" : "Visualizar imagem"}
            >
                <form
                    className='flex flex-col gap-5 mt-5'
                    onSubmit={(e) => {
                        e.preventDefault()
                        if (clickedItem.id) onSubmitNewPhoto(clickedItem.id)
                    }}
                >
                    <When value={onChangeImage}>
                        <>
                            <UploadZone
                                handleUploadedFile={handleImage}
                                accept={{
                                    'image/jpeg': [],
                                    'image/png': []
                                }}
                            />
                            <div className='w-full flex items-center justify-between'>
                                <OutlinedButton
                                    className='border-none w-[60px]'
                                    onClick={() => {
                                        handleChangeImage()
                                    }}
                                >
                                    {`Voltar`}
                                </OutlinedButton>
                                <Button
                                    type="submit"
                                    className=' w-[80px]'
                                    isLoading={uploadLoading}
                                >
                                    {`Salvar`}
                                </Button>
                            </div>
                        </>
                    </When>
                    <When value={!onChangeImage}>
                        <>
                            <img src={clickedItem.foto_url} className='w-[500px] h-[500px] object-cover rounded-lg object-center' />
                            <OutlinedButton onClick={() => { handleChangeImage() }} className='h-12 text-cyan-400'>{`Alterar imagem`}</OutlinedButton>
                            <Button className='h-12'>{`Baixar imagem`}</Button>
                        </>
                    </When>
                </form>
            </ModalBase>
        </>
    )
}