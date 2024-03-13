
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/NavBar/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/NavBar/ItemDetailContainer/ItemDetailContainer';
import { Cartprovider } from './context/CartContext';
import Cart from './components/Cart/Cart';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Cartprovider>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
      </Routes>
      </Cartprovider>
      </BrowserRouter>
    </div>
  );
}

export default App;
