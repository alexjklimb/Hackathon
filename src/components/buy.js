import React from 'react';
function Buy() {
    return (
    <div className="Buypage">
        <div className="hero">
            
            <div className='buyPageImage'>
                <div className="buyPageGradient">
                     <h2 className="white">Find your new HOME</h2>
                     <p className="white">Search for your new home from more than 1 million HOUSES</p>
                     <input type="text" placeholder="City or Zipcode"/>
                    <div className='search navlink' id='calculateButton'>
                        Search
                    </div>
                    
                </div>
            </div>
        </div>
        <div id="buyBody">
            <div id="filterNavBar">
                <input id="BuySearchBar" type="text" placeholder="City or Zipcode"/>
                <select class="buyFilter" name="price" id="price">
                    <option>Price</option>
                    <option  value="500000">$500,000</option>
                    <option  value="600000">$600,000</option>
                    <option  value="700000">$700,000</option>
                    <option  value="800000">$800,000</option>
                </select>
                <select class="buyFilter" placeholder="City or Zipcode" name="Bedrooms" id="Bedrooms">
                    <option>Bedroom</option>
                    <option  value="1">1</option>
                    <option  value="2">2</option>
                    <option  value="3">3</option>
                    <option  value="4">4</option>
                </select>
                <select class="buyFilter" name="Bathrooms" id="Bathrooms">
                    <option>Bathrooms</option>
                    <option  value="1">1</option>
                    <option  value="2">2</option>
                    <option  value="3">3</option>
                    <option  value="4">4</option>
                </select>
                <select class="buyFilter" name="Square Feet" id="Square Feet">
                    <option>Square Footage</option>
                    <option  value="1000">1,000</option>
                    <option  value="1500">1,500</option>
                    <option  value="2000">2,000</option>
                    <option  value="2000">2,500</option>
                </select>
            </div>
            <div id="mapAndHouses">
                <div id="map"></div>
                <div id="housesForSale">
                
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
                
            </div>
        </div>
    </div>
    
    );
  }
  export default Buy;
  