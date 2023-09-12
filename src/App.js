import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Product from './components/Product';
import View from './components/View';
import Header from './components/Header';
import SubPages from './components/SubPages';
import SubPage from './components/SubPage';

function App() {
  return (
    <div className="App">
      <Header /> 
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product/:productname" element={<Product/>}/>
          <Route path="/viwe" element={<View/>}/>
          <Route path='/subpages' element={<SubPages/>}>
            <Route path=':id' element={<SubPage/>}/>
          </Route>
      </Routes>
    </div>
  );
}

export default App;


