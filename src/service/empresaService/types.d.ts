export type EmpresaDTO = {
    id: string;
    name: string
}

export type ListEmpresaData = {
    data: EmpresaDTO[]
    error: boolean
    message: string
}

export type PayloadAddEmpresa = {
    name: string
}