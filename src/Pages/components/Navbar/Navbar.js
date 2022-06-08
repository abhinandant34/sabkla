import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='navbar-items'>
        <div className='navbar-item'><Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>Home</Link></div>
        <div className='navbar-item'><Link to="/products" style={{ color: 'inherit', textDecoration: 'inherit' }}>Products</Link></div>
        <div className='navbar-item'>For Students</div>
        <div className='navbar-item'>For Parents & Teachers</div>
        <div className='navbar-item'>E-Learning</div>
        <div className='navbar-item'><Link to="/about" style={{ color: 'inherit', textDecoration: 'inherit' }}>About Us</Link></div>
        <div className='navbar-item'><Link to="/about#events" style={{ color: 'inherit', textDecoration: 'inherit' }}>Eventsn</Link></div>
    </div>
  )
}

export default Navbar