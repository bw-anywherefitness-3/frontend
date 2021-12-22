import React from "react";
import { Link, useRouteMatch } from 'react-router-dom';
import Class from './Class';

export default function UserDash (props) {
    const { userDetails, classDetails } = props;
    const { url } = useRouteMatch();

    return (
        <div className='home container'>
           <h3>Hey {userDetails.firstName}!</h3>
           <div className='class-list'>
            {classDetails.map(choice => (
                <div 
                className='class-card' 
                key={choice.id}
                >
                    <Link to={`${url}/${choice.id}`}>
                        <Class />
                    </Link>
                </div>
            ))}
           </div>
        </div>
    )
}