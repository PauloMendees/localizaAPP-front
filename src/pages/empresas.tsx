import { Box } from "@mui/material";
import { NextPage } from "next";
import { parseCookies } from "nookies";
import { useState } from "react";
import TableEmpresa from "../components/EmpresasPage/Table";
import { EmpresasToolbar } from "../components/EmpresasPage/Toolbar";
import { SearchCard } from "../components/shared/SearchCard";
import { Toolbar } from "../components/shared/Toolbar/Toolbar";
import { AddEmpresaCard } from "../components/UsersPage/AddEmpresaCard";

const Empresas: NextPage = () => {
    const [openAddEmpresaCard, setOpenAddEmpresaCard] = useState<boolean>(false)
    const [filter, setFilter] = useState<string>('')

    return (
        <Box>
            <Toolbar />
            <div className="px-14 mt-5 flex flex-col gap-9">
                <EmpresasToolbar openEmpresaCard={() => { setOpenAddEmpresaCard(true) }} />
                <AddEmpresaCard open={openAddEmpresaCard} close={() => { setOpenAddEmpresaCard(false) }} />
                <SearchCard filter={filter} handleFilter={(e) => setFilter(e.target.value)} />
                <TableEmpresa filter={filter} />
            </div>
        </Box>
    )
}

export default Empresas;

export const getServerSideProps = async (ctx: any) => {
    const { 'LocalizaAtivo-token': savedToken } = await parseCookies(ctx)

    if (!savedToken) {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }

    return {
        props: {}
    }
}