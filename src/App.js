import './App.css';
import imageRickMorty from './img/morty-rick.png';
import imageCredencial from './img/foto-credencial.png'
import { useState } from 'react';
import Characters from './components/Characters';

function App() {
  const [characters, setCharacters] = useState(null);
  const restapi =  async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character')
    const characterapi = await api.json();
    setCharacters(characterapi.results);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        <h1 className='nombre'>Aaron Emiliano</h1>
        <h1 className='apellido'>Torres Nuñez</h1>
        <h1 className='matricula'>zs20006726</h1>
        <h1 className='gradogrupo'>6 semestre del 601</h1>
        <h1 className='carrera'>Ingenieria de software</h1>
        <h1 className='escuela'>Universidad veracruzana</h1>
        <img src={imageCredencial} alt="credencial" className='img-credencial'></img>
        

        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters}/>
        ) : ( 
          <>
            <img src={imageRickMorty} alt="Rick & Morty" className='img-home'></img>
            <button onClick={restapi} className='btn-search'>Buscar Personajes 1</button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
