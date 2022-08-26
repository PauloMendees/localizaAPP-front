import React, { useEffect, useState } from 'react'
import Button from '../../../../shared/Button'
import OutlinedButton from '../../../../shared/OutlinedButton'
import PopoverModal from '../../../../shared/Popover'

type DeletePopoverProps = {
    popupState: any,
    onDelete: () => void
    isLoading: boolean
}

export default function DeletePopover({ popupState, onDelete, isLoading }: DeletePopoverProps) {
    return (
        <PopoverModal popupState={popupState}>
            <div className='py-3 px-4 flex flex-col gap-2 max-w-[380px]'>
                <h2 className='flex items-center justify-center text-2xl text-red-600 p-2 border border-red-600 rounded-lg w-[30px] h-[30px]'>!</h2>
                <h3>Essa ação é irreversível, tem certeza que deseja excluir este item?</h3>
                <div className='w-full flex justify-between items-center'>
                    <OutlinedButton
                        className='w-[70px] border-none hover:text-gray-400 ml-[-7px]'
                        onClick={() => { popupState.close() }}
                    >
                        {`Cancelar`}
                    </OutlinedButton>
                    <Button
                        className='w-[100px]'
                        onClick={onDelete}
                        isLoading={isLoading}
                    >
                        {`Sim, excluir`}
                    </Button>
                </div>
            </div>
        </PopoverModal>
    )
}