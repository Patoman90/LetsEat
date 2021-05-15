import React from 'react';
import './App.css';
import {BusinessList} from '../BusinessList/BusinessList';
import {SearchBar} from '../SearchBar/SearchBar';

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

const businesses = [business, business, business, business, business, business ];

export const App = () => {
  return (
    <div className='App'>
      <h1 className='App-h1'>
        Let's Eat
      </h1>
      <SearchBar />
      <BusinessList businesses={businesses}/>
    </div>
  );
}