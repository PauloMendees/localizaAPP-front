import { useMutation, useQueryClient } from "@tanstack/react-query";
import empresaService from "../../service/empresaService";

function handleMutate(id: string){
    return empresaService()
        .deleteEmpresa(id)
        .then((res) => res)
}

export default function useDeleteEmpresa(){
    const query = useQueryClient()

    return useMutation(handleMutate, {
        onSuccess: () => {
            query.invalidateQueries(['empresaList'])
        }
    })
}