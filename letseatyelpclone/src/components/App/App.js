import React from 'react';
import './App.css';
import {BusinessList} from '../BusinessList/BusinessList';
import {SearchBar} from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';


export default class App extends React.Component {

  //App Constructor method
  constructor(props)
  {
    super(props);
    this.state = {businesses: []}; //state set to a empty array of businesses
    this.searchYelp = this.searchYelp.bind(this); //Bind the current value of this before updating it.
  }


  //searchYelp method
  searchYelp = (term, location, sortBy) => {
    Yelp.searchYelp(term, location, sortBy).then((businesses) => {
      this.setState({businesses: businesses}); //set the new state to the array of businesses
    });
  }

  render(){
    return (
      <div className='App'>
        <h1 className='App-h1'>
          Let's Eat
        </h1>
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList businesses={this.state.businesses}/>
      </div>
    );
  }
}