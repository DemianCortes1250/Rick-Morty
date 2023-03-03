import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail.jsx'
import { useState,useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Form from './components/Form/Form'; 
import Favorites from './components/Favorites/Favorites'


function App () {
  const location = useLocation();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();


  const username = "demiancmusic@gmail.com"
  const password = "asd1234"

  const login = (userData) => {
    if (userData.username === username && userData.password === password){
        setAccess(true)
        navigate("/home");
  }
} 
  useEffect(() => {
    !access && navigate ('/Home')
  }, [access])


  function onSearch (txt)  {
    fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)
    .then((response) => response.json())
    .then((data) => {
       if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    })
  }

  const onClose = (id) => {
    setCharacters(
      characters.filter(character => character.id !== id)
    )
  }

  return (
    <div className='App'>
      {location.pathname === '/Home' ? <Form login={login}/> :  <Nav onSearch={onSearch} />}
      <div className = 'prueba'>
        <Routes>
          <Route path='/Home' element={<Cards onClose={onClose} characters={characters} />} />
          <Route path='/About' element={<About/>} />
          <Route path='/Detail:DetailId' element={<Detail/>} />
          <Route path='/favorites' element={<Favorites/>} /> 
        </Routes>
        <Cards
          onClose={onClose}
          characters={characters}
        />
      </div>
      </div>
  )
}

export default App
