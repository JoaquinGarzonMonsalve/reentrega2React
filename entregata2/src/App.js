import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';
import Greeting from './components/Greeting.js';
import ItemDetailContainer from './components/ItemDetailContainer';

import {BrowserRouter, Routes, Route} from 'react-router-dom';




function App() {
  return (

    <div className="App">
      
      <header className="App-header">

    <BrowserRouter>
     <NavBar />

     <Greeting/>

      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/detail/:id' element={<ItemDetailContainer/>}/>

        <Route path='/category/:id2' element={<ItemListContainer/>}/>


        <Route path='*' element={<h1>Error 404: esta pagina no existe! </h1>}/>
      </Routes>
    </BrowserRouter>

    </header>

    </div>

  );
}

export default App;
