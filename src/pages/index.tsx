import { Box } from '@mui/system'
import type { NextPage } from 'next'
import { parseCookies } from 'nookies'
import { useState } from 'react'
import RegisterItemCard from '../components/InventoryPage/RegisterItemCard'
import {InventoryToolbar} from '../components/InventoryPage/Toolbar'
import Table from '../components/InventoryPage/Table'
import { Toolbar } from '../components/shared/Toolbar/Toolbar'
import { ChargeDbCard } from '../components/InventoryPage/ChargeDbCard'
import { SearchCard } from '../components/shared/SearchCard'

const Home: NextPage = () => {
  const [openRegisterItemCard, setOpenRegisterItemCard] = useState<boolean>(false)
  const [openChargeDbCard, setOpenChargeDbCard] = useState<boolean>(false)
  const [filter, setFilter] = useState<string>('')
  
  function openRegisterItemCardForm() {
    setOpenRegisterItemCard(true)
  }

  function closeRegisterItemCardForm() {
    setOpenRegisterItemCard(false)
  }

  function openChargeDbCardDiv(){
    setOpenChargeDbCard(true)
  }

  function closeChargeDbCardDiv(){
    setOpenChargeDbCard(false)
  }

  return (
    <Box>
      <Toolbar />
      <div className="px-14 mt-5 flex flex-col gap-9">
        <InventoryToolbar openRegisterCard={openRegisterItemCardForm} openChargeCard={openChargeDbCardDiv} />
        <div className='flex flex-col gap-5'>
          <ChargeDbCard open={openChargeDbCard} close={closeChargeDbCardDiv} />
          <RegisterItemCard open={openRegisterItemCard} close={closeRegisterItemCardForm} />
          <SearchCard filter={filter} handleFilter={(e) => setFilter(e.target.value)} />
          <Table filter={filter} />
        </div>
      </div>
    </Box>
  )
}

export default Home

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