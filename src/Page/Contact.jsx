import React from 'react'
import PokeBall from '/pokeball-pokemon-catch-svgrepo-com.svg'

const Contact = () => {
  return (
    <div className='mt-[6rem] flex justify-center items-center p-3 pb-3'>
      <div className='flex flex-col justify-center items-center w-[100%] md:w-[80%] xl:w-[50%] mx-auto gap-4 border-2 dark:border-white border-black rounded-md p-5'>
        <ul className='flex flex-col gap-2'>
          <li>
            <span className='font-poppins font-bold dark:text-white'>Name: </span>
            <span className='font-quickSand font-[500] dark:text-white'>Thein Naing Myint</span>
          </li>

          <li>
            <span className='font-poppins font-bold dark:text-white'>Ph.No: </span> 
            <span className='font-quickSand font-[500] dark:text-white'>+95 09 781270783</span>
          </li>

          <li><span className='font-poppins font-bold dark:text-white'>Github: </span>
            <a href="https://github.com/Danny7Kri3s">
              <span className='font-quickSand font-bold hover:underline dark:text-white'>Danny </span>
            </a>
            <span className='font-quickSand font-[500] dark:text-white' >{'<'}Click the link</span>
         </li>
        </ul>

        <div className='flex flex-col justify-center items-center'>
          <h1 className='font-quickSand font-bold text-[1.2rem] mb-2 dark:text-white'>Social Links</h1>
          <p className='text-center font-quickSand font-bold text-[1.1rem] dark:text-white'>Comming Soon...</p>
        </div>
        <img className='w-[50px] h-[50px]' src={PokeBall} alt="pokeball-logo" />
      </div>
    </div>
  )
}

export default Contact
