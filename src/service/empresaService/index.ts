import { empresaRoutes } from "../../config/routes/api/empresaRoutes"
import api from "../handleAPI";
import { middleware } from "../middleware";
import { ListEmpresaData, PayloadAddEmpresa } from "./types";

export default function empresaService(){
    const {getAll, post, delete: deleteEmpresaRoute} = empresaRoutes
    const authApi = middleware(api);

    async function listEmpresas(){
        return await authApi.get<ListEmpresaData>(getAll).then((res) => res)
    }

    async function addEmpresa(payload: PayloadAddEmpresa){
        return await authApi.post(post, payload).then((res) => res)
    }

    async function deleteEmpresa(id: string){
        return await authApi.delete(deleteEmpresaRoute(id)).then((res) => res)
    }

    return {listEmpresas, addEmpresa, deleteEmpresa}
}