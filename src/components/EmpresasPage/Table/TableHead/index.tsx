import React from 'react'
import DividerTable from '../../../shared/Divider'
import Divider from '../../../shared/Divider'

export default function TableHead(){
    return (
        <thead>
            <tr className='flex gap-6 items-center h-auto w-full px-3'>
                <th className="md:text-base xl:text-lg 2xl:text-lg font-semibold text-gray-800 flex justify-start w-[70%] min-w-[10rem]">
                    {`Nome`}
                </th>
                <th className="md:text-base xl:text-lg 2xl:text-lg font-semibold text-gray-800 flex justify-end w-full min-w-[8rem]">
                    {`Ações`}
                </th>
            </tr>
        </thead>
    )
}