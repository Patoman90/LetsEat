import React from 'react';
import './BusinessList.css';
import {Business} from '../Business/Business';

//BusinessList Class Component
export class BusinessList extends React.Component
{
    render()
    {
        return(
            <div className="BusinessList" >
                {
                    this.props.businesses.map(business => {
                        //The business component list item must use a unique key id. In this case it is the businesses own id.
                        return <Business key={business.id} business={business}/>;
                    })
                }
            </div>  
        );
    }
}

