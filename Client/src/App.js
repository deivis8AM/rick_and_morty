import { useState, useEffect } from 'react';
import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeFavarite } from './redux/actions';
import Detail from './views/detail/detail';
import About from './views/about/about';
import Cards from './components/cards/Cards';
import logoRM from './assets/logorm.png'
import NavBar from './components/navBar/navBar'; 

import './App.css';
import ErrorPage from './views/error/errorPage';
import LandingPage from './views/landingPage/landingPage';
import Favarites from './views/favorites/favarites';

function App() {
   const[characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);

   const location = useLocation();
   const navigate = useNavigate();
   const dispatch = useDispatch();

   // const EMAIL = 'ejemplo@gmail.com';
   // const PASSWORD = '1Password';



   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
   }


   // function login(userData) {
   //    if (userData.password === PASSWORD && userData.email === EMAIL) {
   //       setAccess(true);
   //       navigate('/home');
   //    }
   // }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   function searchHandler(id) {
      
         axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({data}) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
    }

   function closeHandler(id) {
      let deleted = characters.filter((character) => character.id !== Number(id));

      dispatch(removeFavarite(id))

      setCharacters(deleted);
   }

   function randomHandler() {
      let haveIt = [];
      // Genera nuemro aleatorio
      let random = (Math.random() * 826).toFixed();

      random = Number(random);

      if (!haveIt.includes(random)) {
         haveIt.push(random);
         fetch(`https://rickandmortyapi.com/api/character/${random}`)
         .then((response) => response.json())
         .then((data) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               Window.alert("No hay personajes con ese ID");
            }
         });
      } else {
         console.log("Ya agregaste todos los personajes");
         return false;
      } 
   }

   return (
      <div className='App'>
         <img className='title' src={logoRM} alt='logo'/>

{location.pathname !== "/" && (
<NavBar onSearch={searchHandler} random={randomHandler}/> 
)}

<Routes>
<Route path='/' element={<LandingPage login={login} />} />
   <Route 
      path='/home' 
      element={ <Cards characters={characters} onClose={closeHandler}/>}/>
   <Route path='/detail/:id' element={<Detail/>} />
   <Route path='/about' element={<About />} />
   <Route path='/favorites' element={<Favarites/>} />
   <Route path='*' element={<ErrorPage/>} /> {/*Apuntar otra ruta no sea la indicada*/}
</Routes>
  </div>
   );
}

export default App;
