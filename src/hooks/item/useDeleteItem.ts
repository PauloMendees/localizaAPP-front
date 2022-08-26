import { useMutation, useQueryClient } from "@tanstack/react-query";
import { itemService } from "../../service/itemService";

function handleMutate(id: string){
    return itemService().deleteItem(id);
}

export default function useDeleteItem(){
    const queryClient = useQueryClient()
    return useMutation(handleMutate, {
        onSuccess: () => {
            queryClient.invalidateQueries(['itemList'])
        }
    })
}