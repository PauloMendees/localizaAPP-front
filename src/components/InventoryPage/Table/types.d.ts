export type ItemType = {
    andar: string
    codigo_de_barras: string
    data_inclusao: string
    descricao: string
    dono: string
    foto_url?: string
    id: string
    lido: string
    localizacao: string
    plaqueta: string
    sequencial_localiza: string
    tipo: string
}

export type TableCellProps = {
    data: ItemType
    handleDeleteResponse: (data: string) => void
}