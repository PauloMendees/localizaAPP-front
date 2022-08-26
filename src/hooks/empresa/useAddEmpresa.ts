import { useMutation, useQueryClient } from "@tanstack/react-query";
import empresaService from "../../service/empresaService";
import { PayloadAddEmpresa } from "../../service/empresaService/types";

function handleMutate(payload: PayloadAddEmpresa){
    return empresaService()
        .addEmpresa(payload)
        .then((res) => res)
}

export default function useAddEmpresa(){
    const queryClient = useQueryClient()

    return useMutation(handleMutate, {
        onSuccess: () => {
            queryClient.invalidateQueries(['empresaList'])
        }
    })
}