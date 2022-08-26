import React from 'react'
import { ModalBase } from '../../../../shared/Modal';
import OutlinedInput from '../../../../shared/Input/OutlinedInput';
import OutlinedButton from '../../../../shared/OutlinedButton';
import Button from '../../../../shared/Button';
import { Item } from '../../../../../service/itemService/types';
import TextArea from '../../../../shared/Input/TextArea';
import useEditItemModal from './hooks/useEditItemModal';
import Alerts from '../../../../shared/Alerts/Alerts';

type EditItemModalProps = {
    open: boolean;
    handleClose: () => void
    clickedItem: Item
}

export function EditItemModal({ open, handleClose, clickedItem }: EditItemModalProps) {
    const {
        handleSubmit,
        errorMessage,
        isSuccess,
        reset,
        successMessage,
        isLoading
    } = useEditItemModal()

    return (
        <>
            <Alerts
                message={isSuccess ? successMessage : errorMessage}
                severity={isSuccess ? 'success' : 'error'}
                clearState={reset}
            />
            <ModalBase
                open={open}
                handleClose={handleClose}
                title='Editar item'
                className=' sm:w-[450px] md:w-[450px] lg:w-[550px] xl:w-[800px] 2xl:w-[1000px] '
            >
                <form
                    className='flex justify-between items-center gap-5 flex-wrap'
                    onSubmit={(e) => {
                        handleSubmit(e, clickedItem.id)
                    }}
                >
                    <div className='w-[48%]'>
                        <OutlinedInput
                            defaultValue={clickedItem.sequencial_localiza}
                            isRequired
                            id="sequencialUpdateInput"
                            placeholder='1111-2222-3333-4444'
                            label='Sequencial'
                            className='w-full text-base h-11'
                        />
                    </div>
                    <div className='w-[48%]'>
                        <OutlinedInput
                            defaultValue={clickedItem.plaqueta}
                            className='w-full text-base h-11'
                            isRequired
                            id="plaquetaUpdateInput"
                            placeholder='000000'
                            label='Plaqueta'
                        />
                    </div>
                    <div className='w-[100%]'>
                        <OutlinedInput
                            defaultValue={clickedItem.localizacao}
                            className='w-full text-base h-11'
                            isRequired
                            id="localizacaoUpdateInput"
                            placeholder='Trindade - Goías, Brasil'
                            label='Localização'
                        />
                    </div>
                    <div className='w-[48%]'>
                        <OutlinedInput
                            defaultValue={clickedItem.andar}
                            className='w-full text-base h-11'
                            isRequired
                            id="andarUpdateInput"
                            placeholder='3º'
                            label='Andar'
                        />
                    </div>
                    <div className='w-[48%]'>
                        <OutlinedInput
                            defaultValue={clickedItem.codigo_de_barras}
                            className='w-full text-base h-11'
                            isRequired
                            id="codigoUpdateInput"
                            placeholder='3º'
                            label='Código de barras'
                        />
                    </div>
                    <div className='w-[48%]'>
                        <OutlinedInput
                            defaultValue={clickedItem.dono}
                            className='w-full text-base h-11'
                            isRequired
                            id="donoUpdateInput"
                            placeholder='3º'
                            label='Dono'
                        />
                    </div>
                    <div className='w-[48%]'>
                        <OutlinedInput
                            defaultValue={clickedItem.tipo}
                            className='w-full text-base h-11'
                            isRequired
                            id="tipoUpdateInput"
                            placeholder='3º'
                            label='Tipo'
                        />
                    </div>
                    <div className='w-full min-w-[200px]'>
                        <TextArea
                            defaultValue={clickedItem.descricao}
                            isRequired
                            className=' w-full text-sm h-20 '
                            placeholder='Descreva o item...'
                            label='Descrição'
                            id='descricaoUpdateInput'
                        />
                    </div>
                    <div className='w-full flex items-center justify-between'>
                        <OutlinedButton
                            className='border-none w-[60px]'
                            onClick={() => {
                                handleClose()
                            }}
                        >
                            {`Cancelar`}
                        </OutlinedButton>
                        <Button
                            type="submit"
                            className=' w-[80px]'
                            isLoading={isLoading}
                        >
                            {`Salvar`}
                        </Button>
                    </div>
                </form>
            </ModalBase>
        </>
    )
}