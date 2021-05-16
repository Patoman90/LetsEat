import React from 'react';
import './SearchBar.css';

const sortByOptions = {"Best Match": "best_match",
"Highest Rated": "rating",
"Most Reviewed": "review_count"};


export class SearchBar extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = { term:'', location:'', sortBy:'best_match'};
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.sortByOptions = sortByOptions;

    }

    //Method for returning a current CSS class for sorting option
    getSortByClass = (sortByOption) => {
        if(this.state.sortBy === sortByOption)
        {
            return 'active';
        } else {
            return '';
        }
    }
    //Method that sets the state of sorting option
    handleSortByChange = (sortByOption) => {
        this.setState({sortBy : sortByOption});
    }

    //Method for term change
    handleTermChange = (event) => {
        this.setState({term: event.target.value});
    }

    //Method for location change
    handleLocationChange = (event) => {
        this.setState({location: event.target.value});
    }

    //Method for the let's go button functionality.
    handleSearch = (event) => {
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        event.preventDefault();
    }


     renderSortByOptions = () => 
    {
        return Object.keys(sortByOptions) //using the object keys method to get the keys from sortByOptions.
        .map((sortByOption) => { //next we use the map method to iterate through the keys using a callback arrow function.
            let sortByOptionValue = sortByOptions[sortByOption]; //sortByOptions object's values are stored in a variable sortByOptionValue.
            return <li className= {this.getSortByClass(sortByOptionValue)} onClick={this.handleSortByChange.bind(this, sortByOptionValue)} key={sortByOptionValue}> {sortByOption} </li>; //return a list item with attribute key set to the var and the contnent of sortByOption.
        }); 
    }

    render() {

        return(
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input onChange={this.handleTermChange} placeholder="Search Businesses" />
                    <input onChange={this.handleLocationChange} placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a onClick={this.handleSearch}>Let's Go</a>
                </div>
            </div>
        );
    }
}