import React, { useEffect, useState } from 'react'
import { ImCross } from "react-icons/im";
import AbilityLoading from '../Loadings/AbilityLoading';

const PokemonAbilityInfo = ({ability, setToggle}) => {

  const [abilityInfo, setAbilityInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
      const fetchAbilityInfo = async () => {
        try {
          const abilityRes = await fetch(ability.url);
          if (!abilityRes.ok) throw new Error('Network response was not ok');
          const abilityData = await abilityRes.json();
          const abilityInfo = {
            name: abilityData.name,
            effect: abilityData.effect_entries.find(
              (entry) => entry.language.name === 'en'
            )?.effect || 'No effect description available'
          };
          setAbilityInfo(abilityInfo);
        } catch(e) {
          console.log(e.message);
          setError(e)
        } finally {
          setLoading(false);
        }
      };

      fetchAbilityInfo();
    
  }, [ability]);

  if (error) {
    <>
      <button className='visible absolute px-3 py-2 right-0 rounded-tr-2xl top-0 bg-gray-400 items-center z-[999] cursor-pointer flex rounded-bl-2xl  hover:bg-gray-300'
        onClick={() => setToggle()}>
        <span className=''><ImCross/>Close</span>
      </button>
      <p>Error: {error.message}</p>
    </>
  }

  if (loading) {
    return(
      <>
        <button className='visible absolute px-3 py-2 right-0 rounded-tr-2xl justify-center top-0 bg-black items-center z-[999] cursor-pointer flex gap-1  rounded-bl-2xl text-white hover:bg-gray-400 hover:text-black hover:shadow-lg'
          onClick={() => setToggle()}>
          <span className='text-[0.8rem] font-poppins font-[900]'><ImCross/></span>
          <span className='font-poppons font-bold'>Close</span>
        </button>
        <AbilityLoading/>
      </>
    )
  }

  return (
    <>
      <button 
      className='visible absolute px-3 py-2 right-0 rounded-tr-2xl justify-center top-0 bg-black items-center z-[999] cursor-pointer flex gap-1  rounded-bl-2xl text-white hover:bg-gray-400 hover:text-black hover:shadow-lg'
      onClick={() => setToggle()}>
        <span className='text-[0.8rem] font-poppins font-[900]'><ImCross/></span>
        <span className='font-poppons font-bold'>Close</span>
      </button>
      <h1 className='text-gray-300 font-bold text-[1rem] mb-5 font-quickSand'>Ability Info</h1>
      <h2 className='text-[1.7rem] text-white font-bold mb-5 font-quickSand'>{abilityInfo.name.charAt(0).toUpperCase() + abilityInfo.name.slice(1)}</h2>
      <p className='font-poppins md:text-[1.1rem] text-[0.9rem] text-gray-100 font-semi-bold'>{abilityInfo.effect}</p>
    </>
  )
}

export default PokemonAbilityInfo
