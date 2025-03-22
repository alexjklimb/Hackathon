import React from 'react';
import {Link} from 'react-router-dom';
function Rent() {
    return (
    <div className="Buypage">
        <div className="hero">
            <div className='heroimage'>
                <div className='herogradient'>
                    <h2 className="white">GET STARTED</h2>
                    <div className='calculator navlink' id='calculateButton'>
                        <Link to="/calculator">Calculate $$</Link>
                    </div>
                    <p className='white'>See affordable housing based on your income</p>
                </div>
            </div>
        </div>
        <div className='homeCards'>
            <div className="homeCard">
                <div className="cardImage image1">
                    <div className="cardText">
                        <div className="price">$8,000,000</div>
                        <div className="bottom">
                            <div className='info'>4 bed | 7 bath | 2,000 sqft</div>
                            <div className='cardLink'>See more</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="homeCard">
                <div className="cardImage image2">
                    <div className="cardText">
                    <div className="price">$8,000,000</div>
                        <div className="bottom">
                            <div className='info'>4 bed | 7 bath | 2,000 sqft</div>
                            <div className='cardLink'>See more</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="homeCard">
                <div className="cardImage image3">
                    <div className="cardText">
                    <div className="price">$8,000,000</div>
                        <div className="bottom">
                            <div className='info'>4 bed | 7 bath | 2,000 sqft</div>
                            <div className='cardLink'>See more</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="homeCard">
                <div className="cardImage image4">
                    <div className="cardText">
                    <div className="price">$8,000,000</div>
                        <div className="bottom">
                            <div className='info'>4 bed | 7 bath | 2,000 sqft</div>
                            <div className='cardLink'>See more</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="homeCard">
                <div className="cardImage image1">
                    <div className="cardText">
                        <div className="price">$8,000,000</div>
                        <div className="bottom">
                            <div className='info'>4 bed | 7 bath | 2,000 sqft</div>
                            <div className='cardLink'>See more</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="homeCard">
                <div className="cardImage image2">
                    <div className="cardText">
                    <div className="price">$8,000,000</div>
                        <div className="bottom">
                            <div className='info'>4 bed | 7 bath | 2,000 sqft</div>
                            <div className='cardLink'>See more</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="homeCard">
                <div className="cardImage image3">
                    <div className="cardText">
                    <div className="price">$8,000,000</div>
                        <div className="bottom">
                            <div className='info'>4 bed | 7 bath | 2,000 sqft</div>
                            <div className='cardLink'>See more</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="homeCard">
                <div className="cardImage image4">
                    <div className="cardText">
                    <div className="price">$8,000,000</div>
                        <div className="bottom">
                            <div className='info'>4 bed | 7 bath | 2,000 sqft</div>
                            <div className='cardLink'>See more</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="hero">
            <div className='heroimage2'>
                <div className='herogradient'>
                    <h2 className="white">Search for homes near you</h2>
                    <div className='calculator navlink' id='calculateButton'>
                        <Link to="/calculator">Search</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
  export default Rent;