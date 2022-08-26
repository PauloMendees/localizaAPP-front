import { userRoutes } from "../../config/routes/api/userRoutes";
import api from "../handleAPI"
import { middleware } from "../middleware"
import { ListUsersData, PayloadVinculateUser } from "./types";

export function userService(){
    const authApi = middleware(api);
    const { getAll, vinculate, delete: deleteRoute } = userRoutes

    async function listUsers(){
        return await authApi.get<ListUsersData>(getAll).then((res) => res);
    }

    async function vinculateUser(payload: PayloadVinculateUser){
        return await authApi.put(vinculate(payload.id), {idEmpresa: payload.idEmpresa}).then((res) => res)
    }

    async function deleteUser(id: string){
        return await authApi.delete(deleteRoute(id)).then((res) => res)
    }

    return {listUsers, vinculateUser, deleteUser}
}