import { useQuery } from "@tanstack/react-query";
import empresaService from "../../service/empresaService";

function listEmpresaQuery(){
    return empresaService()
        .listEmpresas()
        .then((res) => res)
}

export default function useListEmpresa(){
    const query = useQuery(['empresaList'], listEmpresaQuery)

    return query
}