import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import useListUsers from '../../../hooks/users/useListUsers'
import { UserDTO } from '../../../service/userService/types'
import DividerTable from '../../shared/Divider'
import TableCell from './TableCell'
import TableHead from './TableHead'

type TableUserProps = {
    filter: string
}

export default function TableUser({filter}: TableUserProps) {
    const {data: listUsersResponse, error} = useListUsers()
    const router = useRouter()

    useEffect(() => {
        if(error){
            //@ts-ignore
            if(error.response.data.message === 'Você não tem permissão para realizar essa ação.'){
                router.push('/')
            }
        }
    }, [error])

    const filteredList = listUsersResponse?.data.data.filter(
      (item) => item.email.includes(filter) || item.empresa?.name.includes(filter)
    ) || []
    
    return (
        <div className='bg-white rounded-xl py-5 px-6 w-full'>
            <div className="overflow-x-auto sm:pb-2 md:pb-2 lg:pb-2 xl:pb-2 2xl:pb-0">
                <table className='w-full'>
                    <TableHead />
                    <tbody className="flex flex-col gap-3 mt-2">
                        <DividerTable />
                        {filteredList?.map((item, index) => {
                            return(
                                <TableCell data={item} key={index} />
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}