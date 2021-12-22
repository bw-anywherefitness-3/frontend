import React from "react";
import { Link, useRouteMatch } from 'react-router-dom';
import Class from './Class';

export default function UserDash (props) {
    const { uDetails, cDetails } = props;
    const { url } = useRouteMatch();

    return (
        <div className='home container'>
           <h3>Hey {uDetails.firstName}!</h3>
           <div className='class-list'>
            {cDetails.map(choice => (
                <div 
                className='class-card' 
                key={choice.id}
                >
                    <Link to={`${url}/${choice.id}`}>
                        <Class cDetails={cDetails}/>
                    </Link>
                </div>
            ))}
           </div>
        </div>
    )
}