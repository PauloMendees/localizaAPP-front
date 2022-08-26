import { useMutation } from "@tanstack/react-query";
import { userService } from "../../service/userService";
import { PayloadVinculateUser } from "../../service/userService/types";

function handleMutate(payload: PayloadVinculateUser){
    return userService()
        .vinculateUser(payload)
        .then((res) => res)
}

export default function useVinculateUser(){
    return useMutation(handleMutate);
}