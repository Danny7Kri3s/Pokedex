import React from 'react'
import PokeBall from '/pokeball-pokemon-catch-svgrepo-com.svg'

const About = () => {
  return (
    <div className='mt-[6rem] flex justify-center items-center p-3 pb-3'>
      <div className='flex flex-col justify-center items-center w-[100%] md:w-[80%] xl:w-[50%] mx-auto gap-4 border-2 dark:border-white border-black rounded-md p-5'>
        <h1 className='text-[1.1rem] dark:text-white md:text-[1.3rem] font-quickSand font-[600] text-center'>Hello I am Thein Naing Myint, creator of this pokedex website.</h1>
        <p className='text-[1.1rem] dark:text-white md:text-[1.3rem] font-quickSand font-[600] text-center'>I have stored a total of 905 of Pokemon's data on this pokedex website.</p>
        <p className='text-[1.1rem] dark:text-white md:text-[1.3rem] font-quickSand font-[600] text-center'>If you want more of Pokemon's data, I recommend for you to check on the official Pokemon websites.</p>
        <p className='text-[1.1rem] dark:text-white md:text-[1.3rem] font-quickSand font-[600] text-center'>I created this website for my portforlio's projects and to test my skills in front-end development. And ofcourse, to check the data of pokemon when you want to know.</p>
        <p className='text-[1.1rem] dark:text-white md:text-[1.3rem] font-quickSand font-[600] text-center'>Thanks for your time and reading this section,I hope you the best.</p>
        <img className='w-[50px] h-[50px]' src={PokeBall} alt="pokeball-logo" />
      </div>
    </div>
  )
}

export default About
