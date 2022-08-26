import { useMutation, useQueryClient } from "@tanstack/react-query";
import { itemService } from "../../service/itemService";
import { ChargeDbPayload } from "../../service/itemService/types";

function handleMutate(payload: ChargeDbPayload){
    return itemService().chargeDb(payload)
}

export default function useChargeDb(){
    const queryClient = useQueryClient()

    return useMutation(handleMutate, {
        onSuccess: () => {
            queryClient.invalidateQueries(['itemList'])
        }
    })
}