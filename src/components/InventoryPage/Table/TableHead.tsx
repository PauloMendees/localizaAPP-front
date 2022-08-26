import React from 'react'

export default function TableHead(){
    return (
        <thead>
            <tr className='flex gap-6 items-center h-auto w-full px-3'>
                <th className="md:text-base xl:text-lg 2xl:text-lg font-semibold text-gray-800 flex justify-start w-[10%] min-w-[6rem]">
                    {`Produto`}
                </th>
                <th className="md:text-base xl:text-lg 2xl:text-lg font-semibold text-gray-800 flex justify-start w-[15%] min-w-[12rem]">
                    {`Sequencial Localiza`}
                </th>
                <th className="md:text-base xl:text-lg 2xl:text-lg font-semibold text-gray-800 flex justify-start w-[10%] min-w-[6rem]">
                    {`Plaqueta`}
                </th>
                <th className="md:text-base xl:text-lg 2xl:text-lg font-semibold text-gray-800 flex justify-start w-[10%] min-w-[4rem]">
                    {`Andar`}
                </th>
                <th className="md:text-base xl:text-lg 2xl:text-lg font-semibold text-gray-800 flex justify-start w-[10%] min-w-[4rem]">
                    {`Lido`}
                </th>
                <th className="md:text-base xl:text-lg 2xl:text-lg font-semibold text-gray-800 flex justify-start w-[15%] min-w-[4rem]">
                    {`Localização`}
                </th>
                <th className="md:text-base xl:text-lg 2xl:text-lg font-semibold text-gray-800 flex justify-start w-[15%] min-w-[12rem]">
                    {`Data inclusão`}
                </th>
                <th className="md:text-base xl:text-lg 2xl:text-lg font-semibold text-gray-800 flex justify-end w-[15%] min-w-[12rem]">
                    {`Ações`}
                </th>
            </tr>
        </thead>
    )
}