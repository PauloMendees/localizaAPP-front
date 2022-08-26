import { AxiosInstance } from "axios";
import { parseCookies } from "nookies";

export function middleware(api: AxiosInstance): AxiosInstance{
    const { 'LocalizaAtivo-token': savedToken } = parseCookies()
    api.defaults.headers.common['Authorization'] = `Bearer ${savedToken}`
    //@ts-ignore
    api.defaults.headers['Authorization'] = `Bearer ${savedToken}`

    return api
}