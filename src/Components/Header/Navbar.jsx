import { AiOutlineMenu } from "react-icons/ai"; 
import { BiLogIn } from "react-icons/bi"; 
import { BiCart } from "react-icons/bi"; 
import { BiSearch } from "react-icons/bi"; 
import React, {useState} from 'react'
import './Navbar.scss'
import logo from './img/Logo.svg'
import { NavLink ,Link} from 'react-router-dom'
import { useSelector } from "react-redux";

const Navbar = () => {

    const [toggle,settogle] = useState(false)
    const carts = useSelector(s => s.cart.value)

  return (
    
 <>
    <header>

    <div className="navbar conteiner">

        <div className="logo">

          <NavLink to={"/"}>
            <img src= {logo} alt="Logo" />
          </NavLink>

        </div>

            <div className={`nav__items ${toggle ? 'show' : ''}`}>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink>Shop</NavLink>
                <NavLink>Plant Care</NavLink>
                <NavLink>Blogs</NavLink>
            </div>

            <div className="nav__cards">
                <span><BiSearch /></span> 
                <Link to={"Product__cart"}>
                <span><BiCart /> <sup id="sup">{carts.length}</sup></span>
                </Link>
                <button><BiLogIn /> Login</button>
            </div>

            <button id="menu" onClick={() => settogle(!toggle)}><AiOutlineMenu /></button>




    </div>








    </header>
 
 
 </>
  )
}

export default Navbar