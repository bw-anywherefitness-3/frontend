import React from "react";
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import CreateClassForm from './CreateClassForm';
import Class from "./Class";

export default function UserDash (props) {
    const { iDetails, createdCs } = props;
    const { url } = useRouteMatch();

    return (
        <>
        <div className='home container'>
           <h3>Hey {iDetails.firstName}!</h3>
           <div className='nav-links'>
           <Link to={`${url}/createclass`}>Create Class</Link>
           </div>
           <div className='class-list'>
            {createdCs.map(choice => (
                <div 
                className='class-card' 
                key={choice.id}
                >
                    <Link to={`${url}/${choice.id}`}>
                        <Class cDetails={createdCs}/>
                    </Link>
                </div>
            ))}
           </div>
        </div>

        <Switch>
            <Route path='/instructorhome/createclass'>
                <CreateClassForm details={createdCs} />
            </Route>
        </Switch>
        </>
    )
}