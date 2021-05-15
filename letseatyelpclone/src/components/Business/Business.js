import React from 'react';
import './Business.css';


//Business object to be consumed
const business = {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
};

//Business Function Component
export const Business = () => 
{
    return(
        <div className="Business">
            <div className="image-container">
                <img src={business.imageSrc} alt='Picture of pizza as the image.'/>
            </div>
            <h2>{business.name}</h2>
            <div className="Business-information">
                <div className="Business-address">
                    <p>1{business.address}</p>
                    <p>{business.city}</p>
                    <p>{business.state}{business.zipCode}</p>
                </div>
                <div className="Business-reviews">
                    <h3>ITALIAN</h3>
                    <h3 className="rating">{business.rating} stars</h3>
                    <p>{business.reviewCount} reviews</p>
                </div>
            </div>
        </div>
    );
}