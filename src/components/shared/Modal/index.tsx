import React, { JSXElementConstructor, ReactElement, ReactNode } from 'react';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';
import { container } from './style';
import CloseIcon from '@mui/icons-material/Close';
import { When } from '../When';

type ModalBaseProps = {
    open: boolean;
    handleClose: () => void
    children: ReactElement<any, string | JSXElementConstructor<any>>
    title?: string
    className?: string
}

export function ModalBase({ open, handleClose, children, title, className }: ModalBaseProps) {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={container}>
                <div className={`sm:w-[400px] md:w-[400px] lg:w-[400px] xl:w-[500px] 2xl:w-[500px] max-w-[500px] flex flex-col gap-5 ${className}`}>
                    <When value={title}>
                        <div className='flex items-center justify-between'>
                            <h2 className='text-lg font-bold' >{title}</h2>
                            <button onClick={() => { handleClose() }} >
                                <CloseIcon fontSize="large" />
                            </button>
                        </div>
                    </When>
                    <When value={!title}>
                        <div className='w-full flex justify-end items-center'>
                            <button onClick={() => { handleClose() }} >
                                <CloseIcon fontSize="large" />
                            </button>
                        </div>
                    </When>
                </div>
                {children}
            </Box>
        </Modal>
    )
}