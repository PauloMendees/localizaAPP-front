import PopupState, { bindTrigger } from 'material-ui-popup-state'
import moment from 'moment'
import 'moment/locale/pt-br'
import React from 'react'
import DeleteIcon from '../../../../icons/DeleteIcon'
import { UserDTO } from '../../../../service/userService/types'
import Alerts from '../../../shared/Alerts/Alerts'
import useTableCell from '../hooks/useTableCell'
import DeletePopover from '../Modals/DeletePopover/DeletPopover'

type TableCellProps = {
    data: UserDTO
}

export default function TableCell({ data }: TableCellProps) {
    const {errorMessage, isLoading, onDelete, successMessage, clearState} = useTableCell()
    moment.locale('pt-br')
    const momentDate = moment(`${data.created_at}`).format('LL');
    return (
        <tr className='flex gap-6 items-center h-8 w-full bg-gray-100 rounded-lg px-3'>
            <Alerts
                message={errorMessage ? errorMessage : successMessage}
                severity={errorMessage ? 'error' : 'success'}
                clearState={clearState}
            />
            <td className="md:text-xs xl:text-sm 2xl:text-sm font-medium text-gray-800 flex justify-start w-[20%] min-w-[6rem]">
                {data.email}
            </td>
            <td className="md:text-sm xl:text-sm 2xl:text-sm font-medium text-gray-800 flex justify-start w-[30%] min-w-[12rem]">
                {data.empresa?.name}
            </td>
            <td className="md:text-sm xl:text-sm 2xl:text-sm font-medium text-gray-800 flex justify-start w-[30%] min-w-[6rem]">
                {`${momentDate}`}
            </td>
            <td className="md:text-sm xl:text-sm 2xl:text-sm font-medium text-gray-800 flex justify-end flex-1">
                <PopupState variant="popover" popupId="popup-popover">
                    {(popupstate) => (
                        <>
                            <button {...bindTrigger(popupstate)}>
                                <DeleteIcon />
                            </button>
                            <DeletePopover
                                onDelete={() => {onDelete(data.id)}}
                                popupState={popupstate}
                                isLoading={isLoading}
                            />
                        </>
                    )}
                </PopupState>
            </td>
        </tr>
    )
}