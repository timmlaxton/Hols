import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/screens/Home';
import Products from './components/screens/Products';
import Services from './components/screens/Services';
import SingUp from './components/screens/SignUp';

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/products" exact component={Products} />
					<Route path="/services" exact component={Services} />
					<Route path="/sign-up" exact component={SingUp} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
