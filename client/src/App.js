import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Notfound from "./pages/notfound";
import Form from './pages/Form';
import Nav from './components/Nav/Nav';
import Discover from './pages/discover';
import Main from "./pages/Main";
import Register from "./pages/Register";
import FrontendDev from "./components/FrontendDev/frontendDev";
import BackendDev from "./components/BackendDev/backendDev";
import Technology from './pages/technology';
import Frontend from "./pages/Client";
import Profile from './pages/profile';

class App extends Component {

	state = {
		fields: {},  
	};

	onSubmit = fields =>{
		this.setState({fields});
		console.log("App component got: ", fields)
	};

	render() {
		return (
      
            // <div className="form">
            //     <FrontendDev onSubmit={fields => this.onSubmit(fields)}/>
			// 	<p>{}</p>
            // </div>


			<Router>
				<div>
      
				<Nav />
					<Switch>
					<Route exact path="/" component={Main} />
					<Route exact path="/register" component={Register} />
					<Route exact path="/discover" component={Discover} />
					{/* <Route exact path="/devTechnology" component={devTechnology} /> */}
          <Route exact path="/form" component={Form} />
					<Route exact path="/frontendDev" component={FrontendDev} />
					<Route exact path="/backendDev" component={BackendDev} />
					{/* <Route exact path="/profile" component={Profile} /> */}
					<Route exact path="/technology" component={Technology} />
					<Route exact path="/profile" component={Profile} />
					{/* <Route exact path="/profile" component={Profile} /> */}
					<Route exact path="/client" component={Frontend} />
					<Route component={Notfound} />
					</Switch>
					{/* <Footer /> */}
				</div>
			</Router>
		);
	}
}

export default App;