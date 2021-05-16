import React from 'react';
import './SearchBar.css';

const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count"
};


export class SearchBar extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = { term='', location='', sortBy='best_match'},

    }

    //Method for returning a current CSS class for sorting option

    //Method that sets the state of sorting option


     renderSortByOptions = () => 
    {
        return Object.keys(sortByOptions) //using the object keys method to get the keys from sortByOptions.
        .map((sortByOption) => { //next we use the map method to iterate through the keys using a callback arrow function.
            let sortByOptionValue = sortByOptions[sortByOption]; //sortByOptions object's values are stored in a variable sortByOptionValue.
            return <li key={sortByOptionValue}> {sortByOption} </li>; //return a list item with attribute key set to the var and the contnent of sortByOption.
        }); 
    }

    render() {

        return(
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
            </div>
        );
    }
}