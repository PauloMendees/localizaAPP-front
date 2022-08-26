import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query";
import { itemService } from "../../service/itemService";
import { AddPhotoPayload } from "../../service/itemService/types";

function handleMutate(payload: AddPhotoPayload){
    return itemService().addPhoto(payload);
}

export default function useUploadPhoto(){
    const queryClient = useQueryClient()

    return useMutation(handleMutate, {
        onSuccess: () => {
            queryClient.invalidateQueries(['itemList'])
        }
    } );
}