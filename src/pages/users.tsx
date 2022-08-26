import { Box } from "@mui/material"
import { NextPage } from "next"
import { parseCookies } from "nookies"
import { useState } from "react"
import { SearchCard } from "../components/shared/SearchCard"
import { Toolbar } from "../components/shared/Toolbar/Toolbar"
import { AddEmpresaCard } from "../components/UsersPage/AddEmpresaCard"
import TableUser from "../components/UsersPage/Table"
import { UsersToolbar } from "../components/UsersPage/Toolbar"
import { VinculateUserCard } from "../components/UsersPage/VinculateUserCard"

const Users: NextPage = () => {
    const [filter, setFilter] = useState<string>('')
    const [openVinculate, setOpenVinculate] = useState<boolean>(false)
    const [openAddEmpresaCard, setOpenAddEmpresaCard] = useState<boolean>(false)

    return(
        <Box>
            <Toolbar />
            <div className="px-14 mt-5 flex flex-col gap-9">
                <UsersToolbar
                  openVinculate={() => { setOpenVinculate(true) }}
                  openAddEmpresa={() => { setOpenAddEmpresaCard(true) }}
                />
                <VinculateUserCard open={openVinculate} close={() => { setOpenVinculate(false) }} />
                <AddEmpresaCard open={openAddEmpresaCard} close={() => { setOpenAddEmpresaCard(false) }} />
                <SearchCard filter={filter} handleFilter={(e) => setFilter(e.target.value)} />
                <TableUser filter={filter} />
            </div>
        </Box>
    )
}

export default Users

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