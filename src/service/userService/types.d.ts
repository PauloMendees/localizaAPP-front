import { EmpresaDTO } from "../empresaService/types";

export type UserDTO = {
    id: string;
    email: string;
    created_at: Date;
    empresa?: EmpresaDTO | null
    empresa_id?: string | null
}

export type ListUsersData = {
    data: UserDTO[]
    error: boolean
}

export type PayloadVinculateUser = {
    idEmpresa: string
    id: string
}