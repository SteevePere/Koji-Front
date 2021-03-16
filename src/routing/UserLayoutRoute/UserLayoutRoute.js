import React from 'react';
import { Route } from 'react-router-dom';

import UserLayout from 'layout/UserLayout/UserLayout';


const UserLayoutRoute = ({ component: Component, ...rest }) =>
{
    return (

        <Route
            {...rest}
            render={props =>
				<UserLayout
					{...props}
					content={<Component {...props}/>}
				/>
            }
        />
    );
}


export default UserLayoutRoute;
