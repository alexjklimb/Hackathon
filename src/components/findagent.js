
import React from 'react';
function Buy() {
    return (
    <div className="Buypage">
        <div className="hero">
            <div className='realtorimage'>
                <div className="realtorgradient">
                     <h2 className="white">FIND A REALTOR</h2>
                     <p className="white">Search for your agent from more than 1 million REALTORS</p>
                     <input type="text" placeholder="City or Zipcode"/>
                    <p className="white">and or</p>
                    <input type="text" placeholder="Name of Agent"/>
                    <div className='search navlink' id='calculateButton'>
                        Search
                    </div>
                </div>
            </div>
        </div>
        <div className="realtorsection">
            <div className="realtorCard">
                <div className="cardImageR realtor1"></div>
                <div className="realtorCardText">
                    <div className='about'>
                        <h2>Jenny Marcus</h2>
                        <h3>About</h3>
                        <p>As a dedicated real estate professional, I’m passionate about helping clients navigate one of life’s most important decisions—buying or selling a home. With a strong background in [insert relevant experience, e.g., customer service, sales, design, or finance], I bring a unique blend of market knowledge, neg
                        </p>
                    </div>
                    <div className='contact'>
                        <h3>Contact</h3>
                        <p>(435)878-3456</p>
                        <p>realtor.realtor@gmail.com</p>
                        <div className="greenButton">Contact Now</div>
                    </div>
                </div>
            </div>
            <div className="realtorCard">
                <div className="cardImageR realtor2"></div>
                <div className="realtorCardText">
                    <div className='about'>
                        <h2>Jenny Marcus</h2>
                        <h3>About</h3>
                        <p>As a dedicated real estate professional, I’m passionate about helping clients navigate one of life’s most important decisions—buying or selling a home. With a strong background in [insert relevant experience, e.g., customer service, sales, design, or finance], I bring a unique blend of market knowledge, negotiation skills, and personal care to every transaction.
                        Whether you’re a first-time homebuyer, looking to upgrade, downsize, or invest, I’m committed to making the process smooth, informed, ...
                        </p>
                    </div>
                    <div className='contact'>
                        <h3>Contact</h3>
                        <p>(435)878-3456</p>
                        <p>realtor.realtor@gmail.com</p>
                        <div className="greenButton">Contact Now</div>
                    </div>
                </div>
            </div>
            <div className="realtorCard">
                <div className="cardImageR realtor3"></div>
                <div className="realtorCardText">
                    <div className='about'>
                        <h2>Jenny Marcus</h2>
                        <h3>About</h3>
                        <p>As a dedicated real estate professional, I’m passionate about helping clients navigate one of life’s most important decisions—buying or selling a home. With a strong background in [insert relevant experience, e.g., customer service, sales, design, or finance], I bring a unique blend of market knowledge, negotiation skills, and personal care to every transaction.
                        Whether you’re a first-time homebuyer, looking to upgrade, downsize, or invest, I’m committed to making the process smooth, informed, ...
                        </p>
                    </div>
                    <div className='contact'>
                        <h3>Contact</h3>
                        <p>(435)878-3456</p>
                        <p>realtor.realtor@gmail.com</p>
                        <div className="greenButton">Contact Now</div>
                    </div>
                </div>
            </div>
                
        </div>
    </div>
    );
  }
  export default Buy;