import React from 'react';
import './App.css';
import {BusinessList} from '../BusinessList/BusinessList';
import {SearchBar} from '../SearchBar/SearchBar';

export const App = () => {
  return (
    <div className='App'>
      <h1 className='App-h1'>Let's Eat</h1>
      <SearchBar />
      <BusinessList/>
    </div>
  );
}