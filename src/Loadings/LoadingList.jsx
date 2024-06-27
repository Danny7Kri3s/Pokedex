import React from 'react'
import PokeBall from '/Poké_Ball_icon.svg'

const LoadingList = () => {
  return (
    
      <div className='w-[93%] md:w-[60%] lg:w-[40%] xl:w-[30%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] dark:bg-slate-100 absolute flex justify-center items-center  bg-slate-800 h-[200px] rounded-lg'>
        <div className='flex flex-col items-center'>
          <img className='w-[100px] h-[100px] animate-spin' src={PokeBall} alt="" />
          <p className='text-white text-center mt-5 font-quickSand text-[1.1rem] font-bold dark:text-black'>Fetching The Data</p>
        </div>
      </div>
  
  )
}

export default LoadingList
