import React from 'react'
import { Link } from 'react-router-dom'
import { getBackgroundColor } from '../services/typesColor'
import { pad } from '../services/apiFetch'

const PokemonListCard = ({pokemon}) => {

  return (
      <Link to={`/detail/${pokemon.id}`}>
        <div key={pokemon.id} className='px-[2rem] py-7 md:px-4 dark:bg-zinc-800 bg-slate-200 md:bg-transparent dark:md:bg-transparent dark:md:shadow-slate-900 md:hover:-translate-y-5 sm:border-none md:hover:shadow-lg rounded-md ' >
          <img className='p-4 rounded-md w-[200px] h-[200px] md:w-[180px] md:h-[180px] bg-gray-100 dark:bg-slate-600'  src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${pad(pokemon.id, 3)}.png`} alt="" />
          <p className='text-gray-400 font-bold text-[1.2rem]'>#{pokemon.id}</p>

          <h2 className='my-3 dark:text-white font-poppins font-[500] text-[1.5rem]'>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>

          <div className='flex gap-2'>
            {pokemon.types.map((t, index) =>(
              <p key={index} className={`px-3 rounded-lg py-1 text-[#f5f5f5] font-bold`} style={{background: getBackgroundColor(t.type.name)}}>{t.type.name}</p>
            ))}
          </div>
        </div>
      </Link>
  )
}

export default PokemonListCard
