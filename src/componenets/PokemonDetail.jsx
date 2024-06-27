import React, { useEffect, useState } from 'react'
import PokemonAbilityInfo from './PokemonAbilityInfo';
import { IoMale } from "react-icons/io5";
import { IoFemaleSharp } from "react-icons/io5";
import { MdOutlineQuestionMark } from "react-icons/md";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const PokemonDetail = ({pokemon, darkMode}) => {
  const [category, setCategory] = useState('');
  const [expandAbility, setExpandAbility] = useState(null);
  const [speciesData, setSpecieData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // fetching the category

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        // Fetch species data for category
        const speciesRes = await fetch(pokemon.species.url);
        if(!speciesRes.ok) throw new Error('Network response was not ok');
        const speciesData = await speciesRes.json();
        setSpecieData(speciesData)

        // Find the category in the species data
        const englishCategory = speciesData.genera.find(
          (genus) => genus.language.name === 'en'
        );
        setCategory(englishCategory.genus);

      } catch(e) {
        console.log(e.message);
      } finally {
        setLoading(false)
      }
    };

    fetchCategory()
  }, [pokemon]);

//  function for toggling ability info

const handleToggle = (abilityName) => {
  if (expandAbility === abilityName) {
    setExpandAbility(null);
  } else {
    setExpandAbility(abilityName)
  }
}

// function for renderingGender

const renderGender = () => {
  const genderRate = speciesData?.gender_rate;
  if (genderRate === 0) {
    return <IoMale/>
  } else if(genderRate === 8) {
    return <IoFemaleSharp/>
  } else if (genderRate === -1) {
    return <span className='text-[1.1rem] md:text-[1.4rem]'>genderless</span>
  }

  return <span className='flex gap-3'><IoMale/><IoFemaleSharp/></span>
}

// Height
  const heightInInches = pokemon.height * 3.93701;
  const feet =  Math.floor(heightInInches / 12);
  const inches = Math.round(heightInInches % 12);
  const pokemonHeight = `${feet}' ${inches}"`;

// Weight
  const weightKg = pokemon.weight / 10;
  const weightLb = weightKg * 2.20462;
  const pokemonWeight = weightLb.toFixed(2);

  if (loading) {
    return <Skeleton baseColor={`${darkMode ? '#676d75' : '#dbdbdb'}`} highlightColor={`${darkMode ? '#858e99': '#fff'}`} className='h-[230px] rounded-lg mt-5'/>
  }

  return (
    <div className='w-[100%] md:w-[90%] shadow-md md:mx-auto lg:w-[100%] bg-blue-400 p-5 rounded-2xl relative text-white flex-wrap flex my-5 z-10'>
      <div className='column-1 flex-1 bg-blue-400 '>
        <div className='mb-4'>
          <h2 className='font-quickSand text-[1.2rem] font-[600] mb-2'>Height</h2>
          <p className='text-[1.1rem] md:text-[1.4rem] font-[600] font-quickSand text-black'>{pokemonHeight}</p>
        </div>

        <div className='mb-4'>
          <h2 className='font-quickSand text-[1.2rem] font-[600] mb-2'>Weight</h2>
          <p className='text-[1.1rem] md:text-[1.4rem] font-[600] font-quickSand text-black'>{pokemonWeight} lbs</p>
        </div>
        <div className='mb-4'>
          <h2 className='font-quickSand text-[1.2rem] font-[600] mb-2'>Gender</h2>
          <p className='text-[1.3rem] md:text-[1.6rem] font-[600] font-quickSand text-black'>{renderGender()}</p>
        </div>
      </div>

      <div className='column-2 flex-1 bg-blue-400'>
        <div className='mb-4'>
          <h2 className='font-quickSand text-[1.2rem] font-[600] mb-2'>Category</h2>
          <p className='text-[1.2rem] md:text-[1.3rem] font-[600] font-quickSand text-black'>{category}</p>
        </div>

        <div className='w-[100%] mb-3'>
            <h2 className='font-quickSand text-[1.2rem] font-[600] mb-2'>Abilities</h2>
            {pokemon.abilities.map((ability, index) => (
              <div className='my-2 ' key={index}>    
                  <div className='flex flex-wrap items-center gap-2'>
                    <p className='text-[1.1rem] md:text-[1.3rem] font-[700] font-quickSand text-black'>{ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1)}</p>
                    <button 
                    className='bg-white rounded-full w-[20px] h-[20px] text-[0.9rem] text-blue-400 flex justify-center items-center'
                    onClick={() => handleToggle(ability.ability.name)}
                    ><MdOutlineQuestionMark/></button>
                  </div>
                
                  <div className={`absolute transition-all ease-in-out duration-300 top-0 left-0 text-black w-[100%]  rounded-2xl p-5 bg-gray-700
                  ${
                    expandAbility === ability.ability.name ? 
                    'opacity-100 min-h-[100%]' :
                    'opacity-0 h-0'
                  }  
                  `}>
                    {expandAbility === ability.ability.name && <PokemonAbilityInfo setToggle={() => setExpandAbility(null)} abilityName={ability.ability.name} ability={ability.ability}/>}
                  </div>
                
              </div>
          ) )}
        </div>

        <div className='w-[100%]'>
          <h2 className='font-quickSand text-[1.2rem] font-[600] mb-1'>Egg Group</h2>
          <div className='flex flex-wrap gap-2'>
            {
              speciesData.egg_groups.map((egg, index) => (
                <p key={index} className='text-[1.1rem] md:text-[1.4rem] font-[700] font-quickSand text-black'>{egg.name},</p>
              ))
            }
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default PokemonDetail
