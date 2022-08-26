import { itemRoutes } from "../../config/routes/api/itemRoutes";
import { S3 } from "../../config/routes/api/S3";
import api from "../handleAPI";
import { middleware } from "../middleware";
import { AddPhotoPayload, ChargeDbPayload, ItemResponse, PostItemPayload, UpdateItemPayload } from "./types";

export function itemService(){
    const authApi = middleware(api)

    async function getAllItems(){
        return await authApi.get<ItemResponse>(itemRoutes.getAll).then((res) => res)
    }

    async function deleteItem(id: string){
        return await authApi.delete<ItemResponse>(itemRoutes.delete(id)).then((res) => res)
    }

    async function postItem(payload: PostItemPayload){
        return await authApi.post<ItemResponse>(itemRoutes.post, payload).then((res) => res)
    }

    async function addPhoto(payload: AddPhotoPayload){
        return await authApi.post<ItemResponse>(S3.uploadPhoto(payload.id), payload.photo).then((res) => res)
    }

    async function updateItem(payload: UpdateItemPayload){
        return await authApi.put<ItemResponse>(itemRoutes.put(payload.id), payload.data).then((res) => res)
    }

    async function getItemById(id: string){
        return await authApi.get<ItemResponse>(itemRoutes.getById(id)).then((res) => res)
    }

    async function chargeDb(payload: ChargeDbPayload){
        return await authApi.post<ItemResponse>(itemRoutes.charge, payload.excel).then((res) => res)
    }

    return {getAllItems, deleteItem, postItem, addPhoto, updateItem, getItemById, chargeDb}
}