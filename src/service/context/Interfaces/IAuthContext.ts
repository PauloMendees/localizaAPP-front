import { ISignInData } from "./ISignInData";

export interface IAuthContext {
    isAuthenticated: boolean;
    signIn: (data: ISignInData) => Promise<void>;
    initializeFetch: () => void;
    token: string;
    fetching: boolean;
    message: string;
    fail: boolean
    clearState: () => void
}