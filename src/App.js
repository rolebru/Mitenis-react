
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/NavBar/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/NavBar/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={ 'Bienvenidos' }/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
