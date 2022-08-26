import React, { useEffect, useState } from 'react'
import Alerts from '../../shared/Alerts/Alerts'
import Button from '../../shared/Button'
import OutlinedInput from '../../shared/Input/OutlinedInput'
import TextArea from '../../shared/Input/TextArea'
import OutlinedButton from '../../shared/OutlinedButton'
import UploadZone from '../../shared/UploadZone'
import { When } from '../../shared/When'
import useRegisterItemCard from './hooks/useRegisterItemCard'

type RegisterItemCardProps = {
    open: boolean
    close: () => void
}

export default function RegisterItemCard({ open, close }: RegisterItemCardProps) {
    const { uploadedPhoto, handlePhoto, handleSubmit, postItemLoading, uploadLoading, successMessage, clearState, errorMessage } = useRegisterItemCard()

    return (
        <When value={open}>
            <Alerts
                message={successMessage}
                severity="success"
                clearState={clearState}
            />
            <Alerts
                message={errorMessage}
                severity="error"
                clearState={clearState}
            />
            <form
                className='bg-white rounded-xl py-5 px-9 w-full flex flex-col gap-3'
                onSubmit={handleSubmit}
            >
                <span className="md:text-base xl:text-lg 2xl:text-lg font-semibold text-gray-800 flex justify-start w-[10%] min-w-[6rem]">{`Cadastrar item`}</span>
                <div className="flex flex-row flex-wrap justify-between gap-y-2">
                    <div className='w-[22%] min-w-[200px]'>
                        <OutlinedInput
                            isRequired
                            id="sequencialInput"
                            className='w-full text-sm'
                            placeholder='1111-2222-3333-4444'
                            name='sequencialInput'
                            label='Sequencial'
                        />
                    </div>
                    <div className='w-[22%] min-w-[200px]'>
                        <OutlinedInput
                            isRequired
                            id="plaquetaInput"
                            placeholder='000000'
                            name='plaquetaInput'
                            label='Plaqueta'
                            className='w-full text-sm'
                        />
                    </div>
                    <div className='w-[48%] min-w-[200px]'>
                        <OutlinedInput
                            className='w-full text-sm'
                            isRequired
                            id="localizacaoInput"
                            placeholder='Trindade - Goías, Brasil'
                            name='localizacaoInput'
                            label='Localização'
                        />
                    </div>
                    <div className='w-[22%] min-w-[200px]'>
                        <OutlinedInput
                            className='w-full text-sm'
                            isRequired
                            id="andarInput"
                            placeholder='3º'
                            name='andarInput'
                            label='Andar'
                        />
                    </div>
                    <div className='w-[22%] min-w-[200px]'>
                        <OutlinedInput
                            className='w-full text-sm'
                            isRequired
                            id="codigoInput"
                            placeholder='3º'
                            name='codigoInput'
                            label='Código de barras'
                        />
                    </div>
                    <div className='w-[22%] min-w-[200px]'>
                        <OutlinedInput
                            className='w-full text-sm'
                            isRequired
                            id="donoInput"
                            placeholder='3º'
                            name='donoInput'
                            label='Dono'
                        />
                    </div>
                    <div className='w-[22%] min-w-[200px]'>
                        <OutlinedInput
                            className='w-full text-sm'
                            isRequired
                            id="tipoInput"
                            placeholder='3º'
                            name='tipoInput'
                            label='Tipo'
                        />
                    </div>
                    <div className='w-full min-w-[200px]'>
                        <TextArea
                            isRequired
                            className=' w-full text-sm h-20 '
                            placeholder='Descreva o item...'
                            label='Descrição'
                            name='descricaoInput'
                        />
                    </div>
                </div>
                <div className='w-full '>
                    <span className="md:text-sm xl:text-sm 2xl:text-[14px]">Foto do item</span>
                    <UploadZone
                        handleUploadedFile={handlePhoto}
                        accept={{
                            'image/jpeg': [],
                            'image/png': []
                        }}
                    />
                </div>
                <div className='w-full flex justify-end items-center gap-5 mt-3'>
                    <OutlinedButton
                        onClick={() => {
                            close()
                        }}
                        className='border border-gray-600 text-gray-600 w-[80px] '
                    >
                        {`Cancelar`}
                    </OutlinedButton>
                    <Button
                        type='submit'
                        className=' text-gray-600 w-[80px]'
                        isLoading={postItemLoading || uploadLoading}
                    >
                        {`Salvar`}
                    </Button>
                </div>
            </form>
        </When>
    )
}