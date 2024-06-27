import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { getBackgroundColor } from '../services/typesColor';
import { pad } from '../services/apiFetch';
import PokeStatBar from './PokeStatBar';
import PokemonDetail from './PokemonDetail';
import PokemonDescription from './PokemonDescription';
import LoadingList from '../Loadings/LoadingList';
import Weakness from './Weakness';
import Evolution from './Evolution';


const PokemonInfo = ({favourite, addFavourite, deleteFav, darkMode}) => {
    const [pokemon, setPokemon] = useState({});
    const [infoLoading, setInfoLoading] = useState(true); 
    const [error, setError] = useState(null);
    
    const fav = favourite.find(fav => fav.id === pokemon.id)
    
    const {id} = useParams();

  
     
  // fetching the data from pokeapi
    useEffect(() => {
      const fetchPokemon = async () => {
        try {
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
          const pokemon = await res.json();
          setPokemon(pokemon); 

        } catch (error) {
          console.log(error.message);
          setError(error)

        } finally {
          setInfoLoading(false);

        }
      };

      fetchPokemon()
    }, [pokemon]);

    const handleAddFav = (pokemon) => {
      addFavourite(pokemon);
    
    }

    const handleDelFav = (pokemon) => {
      deleteFav(pokemon.id);
    }


    if(error) {
      return(
        <h1>There is Error...</h1>
      )
    }

    if (infoLoading) {
      return (
        <>
          <div className='w-full h-screen'></div>
          <LoadingList/>
        </>
      )
    }


  // returing the jsx
  return (
    <div className='md:py-7 mt-[4rem]  py-2 bg-my-gdWhiteGray dark:bg-my-gdDarkGray'>
      <div className=' bg-white dark:shadow-slate-900 dark:bg-slate-600 flex flex-col lg:flex-row lg:w-[90%] xl:w-[80%] w-[100%] md:p-7 rounded-t-xl shadow-2xl mx-auto items-center justify-center'>
        
          <div className='column-1 md:p-7 p-4  lg:w-[70%] md:w-[80%] w-[100%]'>
            <div className='flex flex-col items-center lg:items-start justify-center w-[100%]'>
              <h1 className='my-3 font-poppins dark:text-white font-[700] text-[1.5rem]'>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
              <p className='text-gray-400 font-bold text-[1.2rem]'>Id: #{pokemon.id}</p>
              <LazyLoadImage className='max-w-[400px] md:h-[300px] md:max-w-[300px] w-[90%] h-[250px] object-contain bg-gray-200 dark:bg-slate-400 p-7 rounded-lg mb-3' src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${pad(id, 3)}.png`} alt={pokemon.name} />
            </div>

            <div className='bg-slate-500 w-[100%] px-5 py-2 shadow-lg rounded-lg'>
              <h2 className='text-white md:text-[1.1rem] mb-3 font-poppins'>Stats</h2>
              {pokemon.stats.map((stat, index) => (
                <PokeStatBar
                key={index}
                label={stat.stat.name}
                value={stat.base_stat}
                maxValue={255}
                />
              ))}
            </div>
          </div>

          <div className='column-2 w-[100%] p-4'>
            <PokemonDescription darkMode={darkMode} pokemonId={pokemon.id} /> 
            <PokemonDetail darkMode={darkMode} pokemon={pokemon}/>
            <div className='my-10'>

              <div className='type'>
                <h2 className='font-poppins dark:text-white text-[1.5rem] font-[600]'>Types</h2>
                <div className='flex my-5 gap-2'>
                  {pokemon.types.map((t, index) =>(
                    <p key={index} className='px-5 w-[100px] text-center py-3 rounded-xl text-[#fffdfd] font-bold' style={{background: getBackgroundColor(t.type.name)}}>{t.type.name}</p>
                  ))}
                </div>
              </div>

              <div className='weakness'>
                <h2 className='font-poppins dark:text-white text-[1.5rem] font-[600]'>Weaknesses</h2>
                <Weakness darkMode={darkMode} pokemon={pokemon}/>
              </div>

            </div>

            <div className='flex justify-center gap-2'>
              <Link  to={'/'}>
                <button className='bg-orange-500 shadow-md hover:bg-orange-800 font-[600] rounded-lg text-white px-2 md:px-5 py-3 text-[0.9rem] md:text-[1rem]'>Explore More POKéMON</button>
              </Link>

                  {
                    fav ? (
                      <button
                      className='bg-orange-500 shadow-md hover:bg-orange-800 font-[600] rounded-lg text-white px-2 md:px-5 py-3 text-[0.9rem] md:text-[1rem]'
                      onClick={ () => handleDelFav(pokemon)}
                      >
                        Delete from favorites
                      </button>
                    ) : (
                      <button
                      onClick={ () => handleAddFav(pokemon) }
                      className='bg-orange-500 shadow-md hover:bg-orange-800 font-[600] rounded-lg text-white px-2 md:px-5 py-3 text-[0.9rem] md:text-[1rem]'
                      >
                        Add to Favorites
                      </button>
                    )
                  }
            </div>
            {fav && (
              <div className='flex transition-all ease-in-out duration-300 justify-center items-center mt-10'>
                <p className='font-quickSand dark:text-white text-[1.2rem] font-bold'>Your favorite pokemon.</p>
              </div>
            )}
          </div>  
      </div>

      {/* Evolution */}
      <Evolution setInfoLoading={setInfoLoading} pokemon={pokemon}/>
    </div>
  )
}

export default PokemonInfo
