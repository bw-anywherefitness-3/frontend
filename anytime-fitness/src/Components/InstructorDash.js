
import React from "react";
import { Link, useRouteMatch } from 'react-router-dom';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Class from "./Class";

export default function UserDash (props) {
    const { iDetails, createdCs } = props;
    const { url } = useRouteMatch();
    const history = useHistory()

    const routeToCreate = () => {
        history.push('/instructorhome/createclass');
    }

    return (
        <div className='home container'>
           <h3>Hey instructor {iDetails.firstName}!</h3>
           <div className='nav-links'>
           <button onClick={routeToCreate}>Create Class</button>
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
    )
}

