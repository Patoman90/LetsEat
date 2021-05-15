import React, { useState } from 'react';
import './BusinessList.css';
import {Business} from '../Business/Business';

//BusinessList Function Component
export const BusinessList = (businesses) => 
{
    const [BusinessList, SetBusinessList] = useState('No listings...');

    const renderBusinessListings = () => {
        return businesses.map((business) => {
           let listOfBusinesses = SetBusinessList([business]);
           BusinessList = listOfBusinesses;
           return <Business business={business}/>;
        });
    };
    return(
        <div className="BusinessList" >
            {renderBusinessListings()} 
        </div>  
    );
}

