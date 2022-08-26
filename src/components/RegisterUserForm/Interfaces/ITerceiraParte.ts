import { Dispatch, SetStateAction } from "react"

export interface ITerceiraParte {
    password: string
    confirmPassword: string
    showPassword: boolean
    showConfirmPassword: boolean
    onChangePassword: (ev: any) => void
    onChangeConfirmPassword: (ev: any) => void
    setShowPassword: Dispatch<SetStateAction<boolean>>
    setShowConfirmPassword: Dispatch<SetStateAction<boolean>>
}