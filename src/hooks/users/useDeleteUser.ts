import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userService } from "../../service/userService";

function handleMutate(id: string){
    return userService()
        .deleteUser(id)
        .then((res) => res)
}

export default function useDeleteUser(){
    const query = useQueryClient()

    return useMutation(handleMutate, {
        onSuccess: () => {
            query.invalidateQueries(['userList'])
        }
    })
}