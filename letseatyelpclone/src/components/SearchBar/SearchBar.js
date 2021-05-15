import React, { useState } from 'react';
import './SearchBar.css';

//Yelp API object called sortByOptions that uses the businessess/search string parameters as key and value pairs
const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count"
};

export const SearchBar = () => 
{
    const [Options, setOptions] = useState("Please make a search...");

    const renderSortByOptions = () => 
    {
        return Object.keys(sortByOptions) //using theobject keys method to get the keys from sortByOptions.
        .map((sortByOption) => { //next we use the map method to iterate through the keys using a callback arrow function.
            let sortByOptionValue = setOptions(prevOptions => prevOptions = sortByOptions[sortByOption]); //sortByOptions object's values are stored in a variable sortByOptionValue.
            return <li key={sortByOptionValue}> {sortByOption} </li>; //return a list item with attribute key set to the var and the contnent of sortByOption.
        }); 
    }

    return(
        <div className="SearchBar">
            <div className="SearchBar-sort-options">
                <ul>
                    {Options}
                </ul>
            </div>
            <div className="SearchBar-fields">
                <input placeholder="Search Businesses" />
                <input placeholder="Where?" />
            </div>
            <button className="SearchBar-submit" onClick={renderSortByOptions}>Let's Go</button>
        </div>
    );
}