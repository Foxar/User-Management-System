import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import App from './App';

console.log("HI");
console.log(document.URL);
const AppUpdateUser = (props) => {
	return(
		<App
			page="updateuser"
			url='http://localhost:3001/api/users'
			{...props}
		/>
	);
}

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route path="/home" component={(props) => <App  page="home"/>}/>
			<Route path="/manageUsers" component={(props) => <App url='http://localhost:3001/api/users' page="users"/>}/>
			<Route path="/manageUsergroups" component={(props) => <App url='http://localhost:3001/api/userGroups' page="usergroups"/>}/>
			<Route path="/createUser" component={(props) => <App page="newuser" url='http://localhost:3001/api/users' pollInterval={2000}/>}/>
			<Route path="/createUsergroup" component={(props) => <App page="newusergroup" url='http://localhost:3001/api/userGroups' />}/>
			<Route path="/updateUser/:_id" name="UserUpdate" render={AppUpdateUser}/>
		</Switch>
	</BrowserRouter>,
	//<App page='users'/>,
	document.getElementById('root')
);
