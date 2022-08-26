import { ISignInData } from "../../../../service/context/Interfaces/ISignInData"

export interface IAuthForm {
    signIn: (data: ISignInData) => Promise<void>
    initializeFetch: () => void
    fetching: boolean
    message: string
}