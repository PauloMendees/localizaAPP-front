import * as React from 'react';
import EditIcon from '../../../icons/Edit';
import FileAddIcon from '../../../icons/FileAddIcon';
import PlusIcon from '../../../icons/Plus';
import Button from '../../shared/Button';
import OutlinedButton from '../../shared/OutlinedButton';

type InventoryToolbar = {
    openRegisterCard: () => void
    openChargeCard: () => void
}

export function InventoryToolbar({ openRegisterCard, openChargeCard }: InventoryToolbar) {
    return (
        <div className='flex justify-between w-full items-center'>
            <span className='text-gray-700 text-[24px] sm:text-[26px] md:text-[28px] lg:text-3xl xl:text-3xl 2xl:text-3xl font-bold'>{`Inventário`}</span>
            <div className='flex items-center gap-5 w-full justify-end flex-wrap'>
                <OutlinedButton className='h-10 min-w-[6rem] w-2 md:w-44 text-cyan-500 ' onClick={() => { openRegisterCard() }}>
                    <PlusIcon />
                    <span className='hidden md:block'>{`Adicionar`}</span>
                </OutlinedButton>
                <Button className='h-10 min-w-[6rem] w-44 ' onClick={() => { openChargeCard() }}>
                    <FileAddIcon />
                    <span>{`Upload de Planilha`}</span>
                </Button>
            </div>
        </div>
    )
}