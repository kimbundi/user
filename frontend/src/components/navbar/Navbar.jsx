import React, { useRef, useState } from 'react'
import './Navbar.css'
import bars from '../../assets/bars.png';
import { logout } from '../config/Firebase';
import { Link } from 'react-router-dom';
import closes from '../../assets/closes.png';


const Navbar = () => {
  const menuRef = useRef();
    
  const openMenu= ()=>{
    menuRef.current.style.right = "0";
    setIsMenuOpen(true);
  }
  const closeMenu= ()=>{
    menuRef.current.style.right = "-350px";
    setIsMenuOpen(false);
  }

    const [menu, setMenu] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    
  return (
    <div className='navbar'>
        <ul ref={menuRef} className='navbar-menu'>
          {!isMenuOpen && (
             <img src={bars} alt="open"  onClick={openMenu}    className='nav-mob-open' />

          )}
          {
            isMenuOpen && (
              <img src={closes} alt="close" onClick={closeMenu}   className='nav-mob-close'/>

            )
          }
         
         
          
      <Link to='/home'>   <li     onClick={()=>setMenu("home")}    className={menu ==="home"?"active":""}>Home </li></Link> 
       <Link to='/'><li   onClick={()=>setMenu("signup")}     className={menu ==="signup"?"active":""}>Sign up</li></Link> 
      <Link to='/sms'>  <li   onClick={()=>setMenu("sms")}      className={menu ==="sms"?"active":""}>SMS</li></Link> 
       <Link to='/contact'><li   onClick={()=>setMenu("contact")}      className={menu ==="contact"?"active":""}> Contact us</li></Link> 
        
        </ul>
        <button onClick={()=>logout()}>Log Out</button>
        
        


        


    </div>
  )
}

export default Navbar