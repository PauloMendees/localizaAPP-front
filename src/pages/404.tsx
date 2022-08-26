import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

const Home: NextPage = () => {
    const router = useRouter()

  return (
    <div className='w-screen h-screen bg-gray-100 flex flex-col items-center justify-center'>
        <img src='./404image.png' className='w-[400px]' />
        <span className='text-lg font-semibold text-gray-600'>Eita! Parece que você se perdeu no nosso construtor!</span>
        <span className='text-sm font-medium text-gray-600 mt-2'><a onClick={() => { router.push('/') }} className='hover:text-cyan-500 cursor-pointer duration-200'>Clique aqui</a> para voltar à home</span>
    </div>
  )
}

export default Home