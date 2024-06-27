import React, { useEffect, useState } from 'react'
import { pad } from '../services/apiFetch'
import { getPokemonEvolutionChain } from '../services/apiFetch';
import { Link } from 'react-router-dom';
import EvolutionLoading from '../Loadings/EvolutionLoading';

const Evolution = ({pokemon, setInfoLoading}) => {
  const [evolutionChain, setEvolutionChain] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchPokemonEvolution = async () => {
      try {
        const evolutionChain = await getPokemonEvolutionChain(pokemon.id);
        setEvolutionChain(evolutionChain); 
      
      fetchPokemonEvolution();

      } catch(e) {
        setError(e);

      } finally {
        setLoading(false);
      };
    };

    
      fetchPokemonEvolution();
    
  }, []);

  // https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${pad(pokeImgId, 3)}.png

  // rendering function for pokemon evolution
  const renderEvolutionChain = (chain, index) => {
    if(!chain) return null;
  
    const pokeImgId = chain.species.url.split('/').slice(-2, -1)[0];
  
    return (
      
        <div key={index} className='flex justify-center items-center flex-col lg:flex-row gap-2 md:gap-5 px-5'>
          <div className='flex flex-col items-center'>
            
            <Link to={`/detail/${pokeImgId}`}>
              <div onClick={() => setInfoLoading(true)} className='hover:bg-slate-600 w-[100%] flex items-center justify-center h-[100%] md:w-[200px] md:h-[200px] lg:w-[180px] lg:h-[180px] border-[6px] rounded-full'>
                <img className='w-[150px] h-[150px] md:w-[150px] md:h-[150px] lg:w-[130px] lg:h-[130px] object-contain' src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${pad(pokeImgId, 3)}.png`} alt='pokemon' />
              </div>
            </Link>
            <p className='font-quickSand font-bold text-white text-[1.1rem] my-5'>{chain.species.name.charAt(0).toUpperCase() + chain.species.name.slice(1)}</p>
          </div> 

          {chain.evolves_to.length > 0 && (
            <div className='flex flex-col lg:flex-row justify-center items-center gap-9'>
              <span className='text-white text-[5rem] font-bold'>{'>'}</span>
              <div className='flex gap-5 flex-wrap justify-center items-center'>
                {chain.evolves_to.map( (evo, index) => renderEvolutionChain(evo, index))}
              </div>
            </div>
          )}
        </div>
      
    )
  } 
  // ----

  if (error) {
    return <p>There is Error</p>
  }


  return (
    <div className='bg-my-gdDarkGray w-[100%] lg:w-[90%] xl:w-[80%] mx-auto flex flex-col justify-center items-center p-5 rounded-b-xl'>
      <h2 className='font-poppins text-white mb-5 w-[100%] text-center lg:text-start font-[500] text-[1.2rem]'>Evolutions</h2>
      <div className=' flex w-[100%] justify-center items-center'>
        {
          loading ? (
            <EvolutionLoading/>
          ) : (
            renderEvolutionChain(evolutionChain.chain)
          )
        }
      </div>
    </div>
  )
}

export default Evolution
