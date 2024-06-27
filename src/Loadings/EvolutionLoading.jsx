import React from 'react'
import PokeBall from '/pokeball-pokemon-catch-svgrepo-com.svg'

const EvolutionLoading = () => {
  return (
    <div className='flex justify-center items-center h-[200px]'>
      <img src={PokeBall} className='animate-spin w-[100px] h-[100px]' alt="" />
    </div>
  )
}

export default EvolutionLoading
