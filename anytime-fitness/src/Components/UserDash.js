import React from "react";
import { useHistory } from "react-router-dom"; 

export default function UserDash () {
    const history = useHistory()

    const routeToUserHome = () => {
        history.push('/userhome');
    }

    return (
        <div className='home container'>
           
        </div>
    )
}