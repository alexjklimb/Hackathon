import React from 'react';
function Calculator() {
    return (
    <div>
        <div className="hero"> 
            <div className='calculateImage'>
                <div className="buyPageGradient">
                     <h2 className="white">Calculate what you can Afford</h2>
                     <p className="white">Answer a few questions to see what housing is affordable based on your income</p>
                    <div className='navlink' id='calculateButton'>
                        Calculate Now
                    </div>
                </div>
            </div>
        </div>
        <div className="calculateSection">
        <div className="formCard">
                <div className="formCardText">
                    <div className='about'>
                        <h2>Possibility Calculator</h2>
                        <h3>Yearly Salary</h3>
                        <input className="calculateInput" type="text"/>
                        <h3>Number of Incomes</h3>
                        <input className="calculateInput" type="text"/>
                        <h3>Down Payment</h3>
                        <input className="calculateInput" type="text"/>
                        <h3>Interest Rate</h3>
                        <input className="calculateInput" type="text"/>
                        <h3>Loan Term Years</h3>
                        <input className="calculateInput" type="text"/>
                        <h3>Debts Currently Paying (monthly)</h3>
                        <input className="calculateInput" type="text"/>
                        <div className="purpleButton">Contact Now</div>
                    </div>
                </div>
                <div className="cardImageC calculate"></div>
            </div>
        </div>
    </div>
    );
}
export default Calculator;