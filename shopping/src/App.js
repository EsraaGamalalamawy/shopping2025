import { BrowserRouter as BR ,Routes , Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Login from './components/login';
import Home from './components/home';
import Products from './components/products';
import About from './components/about'
import Contact from './components/contact'
import Register from './components/register'
import Cart from './components/cart'
import DetailsPage from './components/details';
import Checkout from './components/checkout';
function App() {
  return (
    <div className="App">
      <BR>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/products' element={<Products/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/cart' element={<Cart/>} />
          <Route path='/details' element={<DetailsPage/>} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='*' element={<h3>Page NotnFound</h3>} />
        </Routes>
        <p className='bg-light text-center p-3 m-0'>Front End Developer || Esraa Gamal Alamawy</p>   
      </BR>
    </div>
  );
}

export default App;
