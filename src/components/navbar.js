import React from 'react';
import {Link} from 'react-router-dom';

const Navbar=()=>{
    return (    
                <div className='navBar'>
                    <div className='buy navlink'>
                        <Link to="/buy">Buy</Link>
                    </div>
                    <div className='rent navlink'>
                        <Link to="/rent">Rent</Link>
                    </div>
                    <div className='sell navlink'>
                        <Link to="/sell">Sell</Link>
                    </div>
                    <div className='homeloans navlink'>
                        <Link to="/homeloans">Home Loans</Link>
                    </div>
                    <div className='findagent navlink'>
                        <Link to="/findagent">Find Agent</Link>
                    </div>
                    <div className='calculator navlink'>
                        <Link to="/calculator">Calculator</Link>
                    </div>
                </div>
    )

}

export default Navbar;