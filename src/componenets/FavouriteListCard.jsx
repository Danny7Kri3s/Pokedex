import React from 'react'
import { Link } from 'react-router-dom'
import { getBackgroundColor } from '../services/typesColor'
import { pad } from '../services/apiFetch'
import { FaTrashCan } from "react-icons/fa6";

const FavouriteListCard = ({pokemon, deleteFav, favourite}) => {
  const fav = favourite.find( fav => fav.id === pokemon.id)

  return (
        <div key={pokemon.id} className='px-[2rem] py-7 md:px-7 bg-slate-200 md:bg-transparent   sm:border-none md:hover:shadow-lg dark:bg-zinc-800 rounded-md ' >
          <Link to={`/detail/${pokemon.id}`}>
            <img className='p-4 rounded-md w-[200px] h-[200px] md:w-[180px] md:h-[180px] bg-gray-100'  src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${pad(pokemon.id, 3)}.png`} alt="" />
          
          
            <p className='text-gray-400 font-bold text-[1.2rem]'>#{pokemon.id}</p>

            <h2 className='my-3 font-poppins font-[500] dark:text-white  text-[1.5rem]'>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>

            <div className='flex gap-2'>
              {pokemon.types.map((t, index) =>(
                <p key={index} className={`px-3 rounded-lg py-1 text-[#f5f5f5] font-bold`} style={{background: getBackgroundColor(t.type.name)}}>{t.type.name}</p>
              ))}
            </div>
          </Link>
          <div className='flex justify-end items-center mt-3 '>
            <button
             className='p-2 transition-all duration-150 ease-in-out rounded-md bg-blue-500 hover:scale-[1.2]'
             onClick={() => deleteFav(fav.id)}
            >
              <FaTrashCan className='text-white'/>
            </button>
          </div>
        </div>
        
    
  )
}

export default FavouriteListCard
