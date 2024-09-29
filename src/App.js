import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './page/Login'
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import Navbar from './page/Navbar';

function App() {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path="/" element={<ProductAll/>}/>
        <Route path="/JMPage" element={<ProductAll/>}/>
        <Route path="/JMPage/login" element={<Login/>}/>
        <Route path="/JMPage/product/:id" element={<ProductDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;