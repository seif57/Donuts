import React from 'react'
import './Header.css'


function Header() {
    /* Open when someone clicks on the span element */
    function openNav() {
        document.getElementById("myNav").style.width = "100%";
    }

    /* Close when someone clicks on the "x" symbol inside the overlay */
    function closeNav() {
        document.getElementById("myNav").style.width = "0%";
    }

    return (
        <div className="nav">

            <span onClick={openNav}>open</span>

            <div id="myNav" class="overlay">
                <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</a>
                <div class="overlay-content">
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Clients</a>
                    <a href="#">Contact</a>
                </div>

            </div>
        </div>


    )
}

export default Header


