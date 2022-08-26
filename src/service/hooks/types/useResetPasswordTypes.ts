export type CodeVerifyObject = {
    code: string
    email: string
}

export type ResetPasswordObject = {
    email: string
    new_password: string
    confirm_new_password: string
}