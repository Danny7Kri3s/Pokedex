import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PokeBall from '/pokeball-pokemon-catch-svgrepo-com.svg'

import FavouriteListCard from './FavouriteListCard'

const Favourite = ({favourite, addFavourite, deleteFav}) => {

  return (
    <div className='py-5 flex flex-col mt-[4rem] items-center '>
      <Link to={'/'}>
        <button className='px-5 mb-5 py-2 rounded-lg bg-blue-400 text-white'>Go To Home</button>
      </Link>

      <h1 className='my-5 font-quickSand font-[500] text-[1.2rem] dark:text-white '>Your Favorite POKéMONS</h1>

      <div className='flex flex-wrap w-[90%] md:w-[100%] mx-auto justify-center gap-3'>
        {favourite.length > 0 ? (
          favourite.map(pokemon => (
            <div key={pokemon.id}>
              
              <FavouriteListCard 
              pokemon={pokemon}
              deleteFav={deleteFav}
              favourite={favourite}
              />
            </div>
          ))
        ) : (
          <div className='h-screen w-full'>
            <div className='border-2 mt-10 rounded-lg md:w-[50%] mx-auto flex flex-col justify-center items-center h-[40vh]'>
              <p className='text-center dark:text-white font-[500] p-5 font-poppins'>No Favorite Pokemon</p>
              <img className='w-[50px] h-[50px]' src={PokeBall} alt="pokeball-logo" />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Favourite
