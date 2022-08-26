import React, { ReactNode } from 'react'
import Popover from '@mui/material/Popover';
import { bindPopover } from 'material-ui-popup-state';

type PopoverProps = {
    popupState: any,
    children: ReactNode
}

export default function PopoverModal({popupState, children}: PopoverProps) {
    return (
        <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            sx={{
                marginTop: 2,
                paddingX: '56px'
            }}
        >
            { children }
        </Popover>
    )
}