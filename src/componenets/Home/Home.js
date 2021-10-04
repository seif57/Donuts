import React from 'react'
import './Home.css'
import downArrow from './down-arrow.svg'


function Home() {
    return (
        <div className="Wrap">
            <div className="ItemText">
                <h1>Welcome To Dora Donuts,The Most Unique Dounts and Pastry. </h1>
                <p>"Hot and Fresh" that is what we Promise"</p>
                
            </div>
            
            <div className="Buttons">
                <div className='ButtonGroup'>
                    <div className="leftButton">
                        Order Now
                    </div>
                    <div className="rightButton">
                        Contact Us
                    </div>
                </div>
                <img className="downArrow" src={downArrow} alt=''></img>

            </div>

        </div>
    )
}

export default Home
