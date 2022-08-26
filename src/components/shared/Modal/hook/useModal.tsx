import { useState } from "react";

export default function useModal(){
    const [isOpen, setIsOpen] = useState<boolean>(false);

    function handleModal(){
        setIsOpen(!isOpen)
    }

    return { isOpen, handleModal }
}