import React from "react";
import {
    Route,
    NavLink,
    Switch,
    useParams,
    useRouteMatch,
    useHistory
} from 'react-router-dom';

import ClassDetails from './ClassDetails';

export default function Class (props) {
    const { cDetails } = props; 
    const history = useHistory();
    const { classID } = useParams();
    const { url, path } = useRouteMatch();
    
    const workoutClass = cDetails.find(elem => elem.id === parseInt(classID))

    if (!workoutClass) {
        history.push('/userhome');
    }

    return (
        <div className='class-wrapper'>
        <div className='class-header'>
          <div className='image-wrapper'>
            <img src={workoutClass.imageUrl} alt={workoutClass.name} />
          </div>
          <div className='class-title-wrapper'>
            <h2>{workoutClass.name}</h2>
            <h4>${workoutClass.price}</h4>
          </div>
        </div>

        <nav className='class-sub-nav'>
          {/* 👉 STEP 8 - Here go the NavLinks to `<current url>/shipping` and `<current url>/description` */}
          <NavLink to={`${url}/reserve`}>Shipping</NavLink>
          <NavLink to={`${url}/description`}>Description</NavLink>
        </nav>

        <Switch>
          <Route path={`${path}/reserve`}>
            <ClassDetails text={workoutClass.shipping} />
          </Route>
          <Route path={`${path}/description`}>
            <ClassDetails 
             cType={workoutClass.type}
             date={workoutClass.date}
             time={workoutClass.time}
             duration={workoutClass.duration}
             intensity_level={workoutClass.intensity_level}
             location={workoutClass.location}
             attendees={workoutClass.attendees}
             max_size={workoutClass.max_size}
            />
          </Route>
        </Switch>
      </div>
    )
}