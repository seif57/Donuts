import React from 'react'
import './Header.css'
import logo from './logo.png'
import HamMenu from './icons8-menu.svg'



function Header() {
    /* Open when someone clicks on the span element */
    
    function openNav() {
        document.getElementById("myNav").style.width = "100%";
      }
      
      /* Close */
      function closeNav() {
        document.getElementById("myNav").style.width = "0%";
      }

    return (
        <div className="nav">
            <div className="topNav">
            <img src={logo} width="100" height="60"/>
            <p> Dora's Donuts </p>
            <img id="menu" onClick={openNav} src={HamMenu}/>
            </div>

            <div id="myNav" className="overlay">
                <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</a>
                <div  id="topnav" class="overlay-content">
                    <a href="#">About Us</a>
                    <a href="#">Products</a>
                    <a href="#">Contact Us</a>
                </div>

            </div>
        </div>


    )
}

export default Header


