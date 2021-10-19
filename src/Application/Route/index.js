import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../Login/Login';


const LazyUserPage = lazy(() => import('../userPage'))
function Routes() {
    return (
        <>
            <Switch>

                <Route exact path='/' component={Login} />
                <Route path='/userpage' component={LazyUserPage} />
            </Switch>
        </>
    );
}

export default Routes;
