import { useEffect, useState} from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { FavoriteCats } from '../pages/FavoriteCats/FavoriteCats';
import { Homepage } from '../pages/Homepage/Homepage';
import './App.scss';

function App() {
  const [catsData, setCatsData] = useState([])
  const [windowLocation, setWindowLocation] = useState()

  async function getCats() {
    const URL = 'https://api.thecatapi.com/v1/images/search'
    const CATS_AMOUNT = 'limit=15'
    await fetch(`${URL}?${CATS_AMOUNT}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key' : 'de82ccf4-ea60-4946-89ff-5889cba865e0',
      },
    }) 
    .then(res => res.json())
    .then(data => setCatsData(data))
  } 

  useEffect(()=> {
    getCats()
  },[])

  return (
   <div className='cats-pinterest'>
    <header className='cats-header'>
      <nav className='cats-header__navigation'>
        <Link 
          to='/' 
          className={(windowLocation == 'http://localhost:3000/') ? 'cats-header__item cats-header__item_active' : 'cats-header__item'}
          >
              Все котики
        </Link>
        <Link 
          to='/favorite' 
          className={(windowLocation == 'http://localhost:3000/favorite') ? 'cats-header__item cats-header__item_active' : 'cats-header__item'}>
              Любимые котики
        </Link>
      </nav>
    </header>
    <Routes>
      <Route path='/' element={<Homepage catsData={catsData} getCats={getCats} setWindowLocation={setWindowLocation}/>}/>
      <Route path='/favorite' element={<FavoriteCats setWindowLocation={setWindowLocation}/>} />
    </Routes>
   </div>
  );
}

export default App;
