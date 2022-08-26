import React, { ChangeEventHandler } from 'react'
import SearchIcon from '../../../icons/SearchIcon';
import { Input } from '../Input';

type SearchCardProps = {
    filter: string
    handleFilter: ChangeEventHandler<HTMLInputElement>;
}

export function SearchCard({filter, handleFilter}: SearchCardProps){
    return(
        <div className="bg-white w-full rounded-xl py-5 px-6">
        <Input
          onLeftIcon={<SearchIcon />}
          placeholder="Pesquisa..."
          id="searchInput"
          value={filter}
          onChange={handleFilter}
        />
      </div>
    )
}