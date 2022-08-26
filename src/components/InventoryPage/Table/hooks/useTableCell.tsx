import { AxiosResponse } from "axios";
import { useState } from "react";

export default function useTableCell(){
    const [deleteResponse, setDeleteResponse] = useState<string>('');

    function handleDeleteResponse(message: string){
        setDeleteResponse(message)
    }

    return { deleteResponse, handleDeleteResponse }
}