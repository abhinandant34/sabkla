import React from 'react'
import './Header.css'
import logo from './images/xlmymind_logo.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { useStateValue } from '../StateProvider';

function Header() {
  // const [cart, dispatch] = useStateValue();
  return (
    <div className='header'>
      <Link to="/"><img src={logo} className='header-logo' /></Link>
      <div className='header-items'>
        <div className='header-item'><Link to="/login" style={{ color: 'inherit', textDecoration: 'inherit' }}>Login</Link></div>
        <div className='eader-item'><Link to="/register" style={{ color: 'inherit', textDecoration: 'inherit' }}>Register</Link></div>
        <div className='header-item'><Link to="/cart" style={{ color: 'inherit', textDecoration: 'inherit' }}><ShoppingCartOutlinedIcon className="header__cartIcon" />My Cart</Link></div>
      </div>
    </div>
  )
}

export default Header