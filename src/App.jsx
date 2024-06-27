import { useEffect, useState } from "react"
import PokemonList from "./componenets/PokemonList";
import PokemonInfo from "./componenets/PokemonInfo";
import { Routes, Route } from "react-router-dom";
import LoadingList from "./Loadings/LoadingList";
import ScrollToTop from './services/ScrollToTop';
import Nav from "./Layout/Nav";
import Footer from "./Layout/Footer";
import Favourite from "./componenets/Favourite";
import swal from 'sweetalert';
import About from "./Page/About";
import Contact from "./Page/Contact";


function App() {
  const initialState = JSON.parse(localStorage.getItem('favorites')) || [];
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredPokemonList, setFilteredPokemonList] = useState([]);
  const [favourite, setFavourite] = useState(initialState);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=905`);
        const data = await res.json();
        const results = data.results;

        const pokemonList = await Promise.all(
          results.map(async (pokemon) => {
            const pokemonDetailRes = await fetch(pokemon.url);
            const pokemonDetail = await pokemonDetailRes.json();
            return pokemonDetail;
          })
        );

        setPokemonList(pokemonList);
        setFilteredPokemonList(pokemonList)
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false)
      }
    };
    fetchData();
    localStorage.setItem('favorites', JSON.stringify(favourite))
  }, [favourite]);

  const addFavourite = (pokemon) => {
    favourite.find(fav => fav.id === pokemon.id) ? setFavourite(favourite) : setFavourite([...favourite, pokemon]);
    swal({
      title: "Yay!",
      text: "This pokemon is added to your favorite list!",
      icon: "success",
      button: "OK",
    });
    
  }

  const deleteFav = (id) => {
    favourite.find(fav => fav.id === id) ? setFavourite(favourite.filter(fav => fav.id !== id)): setFavourite(favourite);
    
  }

  const toggleBtn = () => {
    setDarkMode(!darkMode);
  }



  if (error) {
    <p>There is Error</p>
  } 

  return (
    <main className={`${darkMode ? 'dark bg-slate-700' : ''} min-h-screen flex flex-col`}>
      <ScrollToTop/>
      <Nav 
       darkMode={darkMode}
       toggleBtn={toggleBtn}
      />

      {loading ? (
        <LoadingList/>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<PokemonList pokemonList={pokemonList} filteredPokemonList={filteredPokemonList} setFilteredPokemonList={setFilteredPokemonList}/>} />
            <Route
             path="/detail/:id"
             element={
             <PokemonInfo
              pokemonList={pokemonList}
              favourite={favourite}
              addFavourite={addFavourite}
              deleteFav={deleteFav}
              darkMode={darkMode}
              />
             } />

            <Route path="/favourite" 
            element={
             <Favourite
             favourite={favourite}
             addFavourite={addFavourite}
             deleteFav={deleteFav}
             />
            } 
             />

             <Route path="/about" element={<About/>} />
             <Route path="/contact" element={<Contact/>}/>
          </Routes> 
          <Footer />
        </>
      )}
      
    
    </main>
  )
}

export default App
