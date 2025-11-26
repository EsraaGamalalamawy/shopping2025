import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { FiLogIn } from "react-icons/fi";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import "../App.css"
import { useSelector } from 'react-redux';

function Header() {
  const counter=useSelector(state=>state.counter.count)
  var style1=({isActive})=>{
    var style2={
      fontWeight:"unset",
      color:"grey",  
      padding:"0 5px",
    }
    return{
      color:isActive ? "white":"black",
      background:isActive ? "black":"white"
    }
  }
  var style2=({isActive})=>{
    var style1={
      color:"black",
      background:"white"
    }
    return{
      fontWeight:isActive ? "600":"unset",
      color:isActive? "black":"grey",  
      padding:"0 5px",    
    }
  }
  return (
    <div className='outofHeader'>
      <div className="Header">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="#home "><h3>E-commerce</h3></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className='flex-grow-0'>
                <Nav className="me-auto left-nav">
                  <NavLink style={style2} to="/" className="text-center"> Home </NavLink>
                  <NavLink style={style2} to="/products" className="text-center">Products</NavLink>
                  <NavLink style={style2} to="/about" className="text-center">About </NavLink>
                  <NavLink style={style2} to="/contact" className="text-center">Contact</NavLink>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse id="basic-navbar-nav" className='flex-grow-0'>
                <Nav className="me-auto right-nav text-center">
                  <NavLink style={style1} to="/login"> <FiLogIn/> Login</NavLink>
                  <NavLink style={style1} to="/register"> <BsFillPersonPlusFill/> Register </NavLink>
                  <NavLink style={style1} to="/cart"> <FaShoppingCart/> Cart ({counter})</NavLink>
                </Nav>
            </Navbar.Collapse>
            
        </Container>
        </Navbar>
    </div>
    </div>
  );
}

export default Header;

