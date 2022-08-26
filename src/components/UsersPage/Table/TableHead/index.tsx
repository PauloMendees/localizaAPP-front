import React from 'react'
import DividerTable from '../../../shared/Divider'
import Divider from '../../../shared/Divider'

export default function TableHead(){
    return (
        <thead>
            <tr className='flex gap-6 items-center h-auto w-full px-3'>
                <th className="md:text-base xl:text-lg 2xl:text-lg font-semibold text-gray-800 flex justify-start w-[20%] min-w-[6rem]">
                    {`Email`}
                </th>
                <th className="md:text-base xl:text-lg 2xl:text-lg font-semibold text-gray-800 flex justify-start w-[30%] min-w-[12rem]">
                    {`Empresa`}
                </th>
                <th className="md:text-base xl:text-lg 2xl:text-lg font-semibold text-gray-800 flex justify-start w-[30%]  min-w-[12rem]">
                    {`Criado em`}
                </th>
                <th className="md:text-base xl:text-lg 2xl:text-lg font-semibold text-gray-800 flex justify-end flex-1">
                    {`Ações`}
                </th>
            </tr>
        </thead>
    )
}