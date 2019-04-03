import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Form from './pages/Form';
// import Navbar from './components/Navbar';
// import Discover from './pages/Discover';
// import About from './pages/About';
// import Search from './pages/Search';

class App extends Component {

	state = {
		fields: {},
	};

	onSubmit = fields =>{
		this.setState({fields});
		//console.log("App component got: ", fields)
	};

	render() {
		return (

            <div className="form">
                <Form onSubmit={fields => this.onSubmit(fields)}/>
				<p>{}</p>
            </div>


			// <Router>
			// 	<div>
			// 	<Navbar />
			// 		{/* <Wrapper> */}
			// 		<Route exact path="/" component={About} />
			// 		<Route exact path="/about" component={About} />
			// 		<Route exact path="/discover" component={Discover} />
			// 		<Route exact path="/search" component={Search} />
            //         <Route exact path="/form" component={Form} />
			// 		{/* </Wrapper> */}
			// 		{/* <Footer /> */}
			// 	</div>
			// </Router>
		);
	}
}

export default App;