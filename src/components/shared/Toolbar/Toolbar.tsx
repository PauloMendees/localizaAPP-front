import { useRouter } from 'next/router'
import { parseCookies, destroyCookie } from 'nookies'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import LeftArrow from '../../../icons/LeftArrow'
import MenuIcon from '../../../icons/Menu/MenuIcon'
import UserIcon from '../../../icons/user'
import { LogoImg } from '../LogoImg/LogoImg'
import PopupState, { bindTrigger } from 'material-ui-popup-state';
import PopoverModal from '../Popover'
import ItemsIcon from '../../../icons/ItemsIcons'
import { When } from '../When'
import EmpresaIcon from '../../../icons/Empresa'

export const Toolbar = () => {
    const router = useRouter()

    const [email, setEmail] = useState<string>('')

    useEffect(() => {
        const { 'email-user': email } = parseCookies()
        setEmail(email)
    }, [])

    return (
        <PopupState variant="popover" popupId="popup-popover">
            {(popupState) => (
                <div className='w-full flex justify-between items-center px-14 py-[15px]'>
                    <a className='cursor-pointer' onClick={() => { router.push('/') }}>
                        <LogoImg />
                    </a>
                    <div className='flex items-center gap-[30px]'>
                        <div className='items-center gap-[10px] hidden sm:hidden md:flex lg:flex xl:flex 2xl:flex '>
                            <UserIcon />
                            <span className="text-sm font-semibold">{email}</span>
                        </div>
                        <button className='flex gap-[10px] items-center hover:opacity-70 duration-300' {...bindTrigger(popupState)}>
                            <MenuIcon />
                            <span className='sm: hidden md:block text-sm font-semibold'>Menu</span>
                        </button>
                    </div>
                    <PopoverModal popupState={popupState}>
                        <div className='flex flex-col py-5 w-[200px]'>
                            <When value={email === 'localizasoft@gmail.com'}>
                                <button
                                    onClick={() => { router.push('/users') }}
                                    className='w-full h-10 flex items-center gap-[15px] hover:opacity-70 hover:bg-gray-200 duration-300 px-4'
                                >
                                    <UserIcon />
                                    <span className="text-sm font-semibold">Ir para usuários</span>
                                </button>
                            </When>
                            <When value={email === 'localizasoft@gmail.com'}>
                                <button
                                    onClick={() => { router.push('/empresas') }}
                                    className='w-full h-10 flex items-center gap-[15px] hover:opacity-70 hover:bg-gray-200 duration-300 px-4'
                                >
                                    <EmpresaIcon />
                                    <span className="text-sm font-semibold">Ir para empresas</span>
                                </button>
                            </When>
                            <button
                                onClick={() => { router.push('/') }}
                                className='w-full h-10 flex items-center gap-[15px] hover:opacity-70 hover:bg-gray-200 duration-300 px-4'
                            >
                                <ItemsIcon />
                                <span className="text-sm font-semibold">Ir para inventário</span>
                            </button>
                            <button className='w-full h-10 flex items-center gap-[15px] hover:opacity-70 hover:bg-gray-200 duration-300 px-4'
                                onClick={() => {
                                    destroyCookie(null, 'LocalizaAtivo-token')
                                    router.push('/login')
                                }}
                            >
                                <LeftArrow />
                                <span className="text-sm font-semibold">Sair</span>
                            </button>
                        </div>
                    </PopoverModal>
                </div>
            )}
        </PopupState>
    )
}