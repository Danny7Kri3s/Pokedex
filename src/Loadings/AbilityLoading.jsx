import React from 'react'
import PokeBall from '/pngaaa.com-96212.png'

const AbilityLoading = () => {
  return (
    <div className='absolute flex flex-col justify-center items-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
      <img className='w-[60px] animate-spin fill-[#ffffff] h-[60px]' src={PokeBall} alt='loading' />
      <p className='mt-5 text-gray-100 font-quickSand text-[0.8rem] md:text-[1rem]'>Loading Please Wait...</p>
    </div>
  )
}

export default AbilityLoading
