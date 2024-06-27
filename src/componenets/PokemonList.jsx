import React, { useEffect, useState } from 'react'
import PokemonListCard from './PokemonListCard';
import { pad } from '../services/apiFetch';
import NoResult from '../Layout/NoResult';


const PokemonList = ({pokemonList, filteredPokemonList, setFilteredPokemonList}) => {
  const [search, setSearch] =  useState('');
  const [visible, setVisible] = useState(12);


  const handleClick = (e) => {
    e.preventDefault()
    const filtered = pokemonList.filter(pokemon => 
      pokemon.name.toLowerCase().includes(search.toLowerCase()) || pokemon.id.toString().includes(search.toLowerCase())
    );
    setFilteredPokemonList(filtered);
    setVisible(12);
    setSearch('')
  }


  const handleInputSearch = (e) => {
    setSearch(e.target.value)
  };

  const showMore = () => {
    setVisible(pervValue => pervValue + 15);
  };

  return (
    <div className='dark:bg-slate-700 mt-14'>
      <form className='flex flex-col md:flex-row gap-4 md:gap-2 justify-center items-center my-8'>
        <input
        type="text"
        value={search}
        onChange={handleInputSearch}
        placeholder='Type name or id of the pokemon'
        className=' w-[80%] md:w-[50%] lg:w-[40%] xl:w-[30%] dark:bg-slate-100 bg-slate-300 px-3 py-2 rounded-lg '
         />
        <button className='px-3 py-2 bg-blue-400 hover:bg-blue-600 text-poppins font-[500] rounded-md text-white' onClick={(e) => handleClick(e)}>Search</button>
      </form>
      <h1 className='text-center p-2 dark:text-white font-quickSand text-[0.9rem] md:text-[1.1rem] font-bold mb-7'>If you want the default list again empty your search box and click the search button.</h1>
      <div className='flex flex-wrap w-[90%] md:w-[96%] mx-auto justify-center gap-3'>
        {filteredPokemonList.length > 0 ? (
          filteredPokemonList.slice(0, visible).map(pokemon => (
            <div key={pokemon.id}>
              <PokemonListCard pokemon={pokemon}/>
            </div>
        ))
        ) : (
          <NoResult/>
        )}
      </div>

      <div className='flex justify-center p-4'>
        <button 
        className='p-3 hover:bg-blue-700 bg-blue-500 rounded-md text-white'
        onClick={showMore}>Load More POKéMON</button>
      </div>
    </div>
  )
}

export default PokemonList
