import React from 'react'
import './DonateComponent.css'

function DonateComponent() {
    return (
        <div className="donate-sections">
            <div className="donation-box">
                <div className="title">Donation Information</div>
                <div className="fields">
                    <input type="text" id="firstName" placeholder="First Name"/>
                    <input type="text" id="lastName" placeholder="Last Name"/>
                    <input type="text" id="email" placeholder="Email"/>
                    <input type="text" id="phone" placeholder="Phone"/>
                    <input type="text" id="address" placeholder="Address"/>
                    <input type="text" id="cardNumber" placeholder="Card number"/>
                    <input type="text" id="expireDate" placeholder="MM/YY"/>
                    <input type="text" id="threedigits" placeholder="CVC"/>
                    <input type="text" id="Amount" placeholder="Amount"/>
                </div>
                <div className="donate-button">
                    <i className="fa fa-credit-card">Donate Now</i> 
                </div>
                <div className="amount">
		            <div className="button">$5</div>
		            <div className="button">$10</div>
		            <div className="button">$25</div>
                    <div className="button">$35</div>
		            <div className="button">$50</div>
	            </div>
            </div>
        </div>
    )
}

export default DonateComponent
