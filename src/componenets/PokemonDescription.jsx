import React, { useEffect, useState } from 'react'
import { fetchPokemonSpecies } from '../services/apiFetch';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const PokemonDescription = ({pokemonId, darkMode}) => {
  const [pokemonSpecie , setPokemonSpecie] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const pokemonSpecie = await fetchPokemonSpecies(pokemonId);
        setPokemonSpecie(pokemonSpecie)
      } catch(e) {
        console.log(e.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [pokemonId]);



// finding the description
const descriptionEntry = pokemonSpecie.flavor_text_entries?.find(entry =>
  entry.language.name === 'en'
);

const description = descriptionEntry ? descriptionEntry.flavor_text : 'Description not available';


  // -------

  if(loading) return <Skeleton baseColor={`${darkMode ? '#676d75' : '#dbdbdb'}`} highlightColor={`${darkMode ? '#858e99': '#fff'}`} className='h-[100px] rounded-lg'/>

  return (
      <p className='md:w-[80%] w-[100%] mx-auto dark:text-white lg:mx-0 lg:text-start text-[1.18rem] text-center md:text-[1.3rem] font-quickSand font-[600] md:font-[500]'>
        {description}
      </p>
  )
}

export default PokemonDescription
