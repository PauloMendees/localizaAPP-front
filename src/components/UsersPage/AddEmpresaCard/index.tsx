import React from 'react';
import Alerts from '../../shared/Alerts/Alerts';
import Button from '../../shared/Button';
import { Input } from '../../shared/Input';
import OutlinedButton from '../../shared/OutlinedButton';
import { When } from '../../shared/When';
import useAddEmpresaCard from './hooks/useAddEmpresaCard';

type AddEmpresaCardProps = {
    open: boolean
    close: () => void
}

export function AddEmpresaCard({ open, close }: AddEmpresaCardProps) {
    const {errorMessage, isLoading, onSubmit, successMessage, clearState} = useAddEmpresaCard()

    return (
        <When value={open}>
            <Alerts
                message={errorMessage ? errorMessage : successMessage}
                severity={errorMessage ? 'error' : 'success'}
                clearState={clearState}
            />
            <form
                className='bg-white rounded-xl py-5 px-9 w-full flex flex-col gap-3'
                onSubmit={onSubmit}
            >
                <span className="md:text-base xl:text-lg 2xl:text-lg font-semibold text-gray-800 flex justify-start">
                    {`Adicionar empresa`}
                </span>
                <Input isRequired label="Nome da empresa" placeholder='Localiza' id="empresaInput" />
                <div className='w-full flex justify-end items-center gap-5 mt-3'>
                    <OutlinedButton
                        className='border border-gray-600 text-gray-600 w-[80px] '
                        type="button"
                        onClick={close}
                    >
                        {`Cancelar`}
                    </OutlinedButton>
                    <Button
                        type='submit'
                        className=' text-gray-600 w-[80px]'
                        isLoading={isLoading}
                    >
                        {`Salvar`}
                    </Button>
                </div>
            </form>
        </When>
    )
}