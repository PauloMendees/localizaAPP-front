import { Dispatch, SetStateAction } from "react";

export function HandleState(set: Dispatch<SetStateAction<any>>, ev: any) {
    set(ev.target.value)
}