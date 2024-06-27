import React from 'react'
import PokeBall from '/pokeball-pokemon-catch-svgrepo-com.svg'

const NoResult = () => {
  return (
    <div className='h-screen w-full'>
      <div className='border-2 mt-10 rounded-lg md:w-[50%] mx-auto flex flex-col justify-center items-center h-[40vh]'>
        <p className='text-center dark:text-white font-[500] p-5 font-poppins'>Sorry, We don't have the data of that pokemon  in our database.</p>
        <img className='w-[50px] h-[50px]' src={PokeBall} alt="pokeball-logo" />
      </div>
    </div>
  )
}

export default NoResult
