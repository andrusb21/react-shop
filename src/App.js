
import Header from './components/Header';
import Drawer from './components/Drawer';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';


function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false);
  useEffect(()=> {
    axios.get('https://636fa568f2ed5cb047e1f09f.mockapi.io/items').then(res=> {
      setItems(res.data);
    });
    axios.get('https://636fa568f2ed5cb047e1f09f.mockapi.io/cart').then(res=> {
      setCartItems(res.data);
    });
    axios.get('https://636fa568f2ed5cb047e1f09f.mockapi.io/favorites').then(res=> {
      setFavorites(res.data);
    });
  },[]);

  const onAddToCart = (obj) => {
    axios.post('https://636fa568f2ed5cb047e1f09f.mockapi.io/cart', obj);
    setCartItems(prev => [...prev, obj])
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://636fa568f2ed5cb047e1f09f.mockapi.io/cart/${id}`);
    setCartItems(prev => prev.filter(item=> item.id !== id ))
  }

  const onAddToFavorite = async (obj) => {
    try {
    if (favorites.find((favObj) => favObj.id === obj.id)){
      axios.delete(`https://636fa568f2ed5cb047e1f09f.mockapi.io/favorites/${obj.id}`);
      // setFavorites((prev) => prev.filter(item=> item.id !== obj.id ));
    } else {
      const {data} = await axios.post('https://636fa568f2ed5cb047e1f09f.mockapi.io/favorites', obj);
      setFavorites((prev) => [...prev, data]);
    }
  } catch (error){
    alert('Can`t add to Favorites!')
  }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className="wrapper clear">
      
      {cartOpened && <Drawer items={cartItems} onClose={()=> setCartOpened(false)} onRemove={onRemoveItem} />}
      <Header onClickCart={()=>setCartOpened(true)} />
      <Routes>
       <Route path="/" element={<Home 
         items={items}
         searchValue={searchValue}
         setSearchValue={setSearchValue}
         onChangeSearchInput={onChangeSearchInput}
         onAddToFavorite={onAddToFavorite}
         onAddToCart={onAddToCart}
        />}/>
        <Route path="/favorites" element={<Favorites items={favorites} onAddToFavorite={onAddToFavorite}/>} />
        
       
      </Routes>

    </div>
  );
}

export default App;
