import React, { useEffect, useState } from 'react'
import { fetchWeakness } from '../services/apiFetch';
import { getBackgroundColor } from '../services/typesColor';
import Skeleton from 'react-loading-skeleton';

const Weakness = ({pokemon, darkMode}) => {
  const [weaknesses, setWeaknesses] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {  
      const fetchPokemonWeakness = async () => {
        try {
          const weaknesses = await fetchWeakness(pokemon.types);
          setWeaknesses(weaknesses);
        } catch(e) {
          console.log(e.message)
          setError(e)
        } finally {
          setLoading(false)
        }
      };

      if (pokemon) fetchPokemonWeakness();
    
  }, [pokemon]);

  if (loading) {
    return <Skeleton baseColor={`${darkMode ? '#676d75' : '#dbdbdb'}`} highlightColor={`${darkMode ? '#858e99': '#fff'}`} className='w-[70%] mt-4 h-[90px] rounded-lg'/>
  }

  if (error) {
    return <p>There is an Error: {error.message}</p>
  }

  return (
    <div className='flex flex-wrap my-5 gap-2 w-[100%] md:w-[80%] '>
      {weaknesses.map((weakness, index) => (
        <p className='px-5 w-[100px] text-center py-3 rounded-xl text-[#fffdfd] font-bold' key={index} style={{background: getBackgroundColor(weakness)}}>{weakness}</p>
      ))}
    </div>
  )
}

export default Weakness
