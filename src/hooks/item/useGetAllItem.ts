import { useQuery } from "@tanstack/react-query";
import { itemService } from "../../service/itemService";

function listItemQuery(){
    return itemService()
        .getAllItems()
        .then((res) => res)
}

export default function useGetAllItems(){
    const query = useQuery(['itemList'], listItemQuery)

    return query
}