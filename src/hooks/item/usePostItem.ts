import { useMutation, useQueryClient } from "@tanstack/react-query";
import { itemService } from "../../service/itemService";
import { PostItemPayload } from "../../service/itemService/types";

function handleMutate(payload: PostItemPayload){
    return itemService().postItem(payload);
}

export default function usePostItem(){
    const queryClient = useQueryClient()

    return useMutation(handleMutate, {
        onSuccess: () => {
            queryClient.invalidateQueries(['itemList'])
        }
    })
}