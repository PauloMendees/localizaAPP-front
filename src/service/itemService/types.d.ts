export type ChargeDbPayload = {
    excel: FormData
}

export type PostItemPayload = {
    andar: string,
    codigo_de_barras: string,
    descricao: string,
    dono: string
    lido: string
    localizacao: string
    plaqueta: string
    sequencial_localiza: string
    tipo: string
}

export type AddPhotoPayload = {
    id: string,
    photo: FormData
}

export type Item = {
    id?: string
    andar: string,
    codigo_de_barras: string,
    descricao: string,
    dono: string
    lido: string
    localizacao: string
    plaqueta: string
    sequencial_localiza: string
    tipo: string
    foto_url?: string
}

export type UpdateItemPayload = {
    data: Item
    id: string
}

export type ItemResponse = {
    error: boolean,
    message: string,
    data: any
}