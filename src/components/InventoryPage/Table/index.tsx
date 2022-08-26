import { InterpreterModeTwoTone } from '@mui/icons-material'
import React, { useEffect } from 'react'
import useErrorFetch from '../../../hooks/errors/useErrorFetch'
import useGetAllItems from '../../../hooks/item/useGetAllItem'
import ItemsIcon from '../../../icons/ItemsIcons'
import Alerts from '../../shared/Alerts/Alerts'
import DividerTable from '../../shared/Divider'
import useTableCell from './hooks/useTableCell'
import TableCell from './TableCell'
import TableHead from './TableHead'
import { ItemType } from './types'

type TableProps = {
    filter: string
}

export default function TableItem({filter}: TableProps) {
    const { data: responseApi, error } = useGetAllItems()
    const { errorMessage: ErrorMessageGetAll } = useErrorFetch(error)
    const { deleteResponse, handleDeleteResponse } = useTableCell()

    const filteredTable = responseApi?.data.data.filter(
        (item: ItemType) => item.descricao.includes(filter)
            || item.localizacao.includes(filter)
            || item.dono.includes(filter)
            || item.plaqueta.includes(filter)
            || item.andar.includes(filter)
            || item.sequencial_localiza.includes(filter)
    ) || []

    return (
        <div className='bg-white rounded-xl py-5 px-6 w-full'>
            <Alerts
                message={ErrorMessageGetAll}
                severity="error"
            />
            <Alerts
                severity={deleteResponse.includes("Item deletado") ? "success" : "error"}
                message={deleteResponse}
                clearState={() => { handleDeleteResponse("") }}
            />
            <div className="overflow-x-auto sm:pb-2 md:pb-2 lg:pb-2 xl:pb-2 2xl:pb-0">
                <table className='w-full'>
                    <TableHead />
                    <tbody className="flex flex-col gap-3 mt-2">
                        <DividerTable />
                        {filteredTable.map((item: ItemType, index: number) => {
                            return (
                                <TableCell key={index} data={item} handleDeleteResponse={handleDeleteResponse} />
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}