import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import UserLayoutRoute from './UserLayoutRoute/UserLayoutRoute';
import NotFound from './NotFound/NotFound';

import PostList from '../components/posts/PostList';
import ViewPost from '../components/posts/ViewPost';


const Router = () =>
{
	return (

		<BrowserRouter>
			<Switch>
				<UserLayoutRoute exact path='/posts' component={PostList}/>
				<UserLayoutRoute exact path='/posts/:id' component={ViewPost}/>
				<Route component={NotFound}/>
			</Switch>
		</BrowserRouter>
	);
}


export default Router;
