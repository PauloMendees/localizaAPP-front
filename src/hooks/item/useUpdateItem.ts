import { useMutation, useQueryClient } from "@tanstack/react-query";
import { itemService } from "../../service/itemService";
import { UpdateItemPayload } from "../../service/itemService/types";

function handleMutate(payload: UpdateItemPayload){
    return itemService().updateItem(payload)
}

export default function useUpdateItem(){
    const queryClient = useQueryClient()

    return useMutation(handleMutate, {
        onSuccess: () => {
            queryClient.invalidateQueries(['itemList'])
        }
    })
}