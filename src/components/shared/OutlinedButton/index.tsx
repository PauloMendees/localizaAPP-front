import React, { ReactNode } from 'react'

type ButtonProps = {
    children: ReactNode,
    className?: string,
    onClick?: () => void | void,
    type?: 'button' | 'submit' | "reset" | undefined,
    id?: string
}

export default function OutlinedButton({ children, className, type, onClick, id }: ButtonProps) {
    return (
        <button
            id={id}
            type={type}
            className={`w-full h-9 bg-transparent border border-cyan-500 rounded-md hover:opacity-60 duration-300 px-3 py-2 text-sm flex items-center justify-center gap-2 ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}