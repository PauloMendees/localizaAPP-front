import React from 'react'
import Alerts from '../../shared/Alerts/Alerts'
import Button from '../../shared/Button'
import OutlinedButton from '../../shared/OutlinedButton'
import UploadZone from '../../shared/UploadZone'
import { When } from '../../shared/When'
import useChargeDbCard from './hooks/useChargeDbCard'

type ChargeDbCard = {
    open: boolean
    close: () => void
}

export function ChargeDbCard(props: ChargeDbCard) {
    const { open, close } = props
    const {
        handleFile,
        errorMessage,
        handleSubmit,
        successMessage,
        isError,
        isLoading,
        clearState
    } = useChargeDbCard()

    return (
        <When value={open} >
            <Alerts
                message={isError ? errorMessage : successMessage}
                severity={isError ? "error" : "success"}
                clearState={clearState}
            />
            <div className='bg-white rounded-xl py-5 px-9 w-full flex flex-col gap-3'>
                <span className="md:text-base xl:text-lg 2xl:text-lg font-semibold text-gray-800 flex justify-start w-[10%] min-w-[6rem]">{`Upload de dados`}</span>
                <div className='w-full '>
                    <UploadZone
                        handleUploadedFile={handleFile}
                        accept={{
                            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': [],
                            'application/vnd.ms-excel': []
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
                        type="button"
                        className=' text-gray-600 w-[80px]'
                        isLoading={isLoading}
                        onClick={async () => {
                            await handleSubmit()
                        }}
                    >
                        {`Salvar`}
                    </Button>
                </div>
            </div>
        </When>
    )
}