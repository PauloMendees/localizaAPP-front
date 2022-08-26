import { AxiosError } from "axios";

export type CustomAxiosError =  AxiosError<{
    error?: string;
}>