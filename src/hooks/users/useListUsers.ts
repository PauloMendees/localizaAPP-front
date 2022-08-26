import { useQuery } from "@tanstack/react-query";
import { userService } from "../../service/userService";

function handleMutate(){
    return userService()
        .listUsers()
        .then((res) => res)
}

export default function useListUsers(){
    const query = useQuery(['userList'], handleMutate)

    return query;
}