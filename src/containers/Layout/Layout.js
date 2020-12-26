import React, { Component, Fragment } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Toolbar from '../../compoonents/toolbar/toolbar';
import Favourites from '../Favourites/Favourites';
import Planets from '../Planets/Planets';
import axios from 'axios';

class Layout extends Component {
	state = { planets: [] };
	componentDidMount() {
		axios
			.get('https://assignment-machstatz.herokuapp.com/planet')
			.then((response) => {
				// handle success
				this.setState({ planets: response.data });
				console.log(this.state.planets);
			})
			.catch(function(error) {
				// handle error
				alert(error);
			})
			.then(function() {
				// always executed
			});
	}
	favHandler(favPlanet, index) {
		let planetsTemp = [ ...this.state.planets ];
		let planet = { ...planetsTemp[index] };
		planet.isFavourite = !planet.isFavourite;
		planetsTemp[index] = planet;
		this.setState({ planets: planetsTemp });
	}
	render() {
		if (this.state.planets) {
			return (
				<Fragment>
					<Toolbar favPlanets={this.state.planets} />
					<Route
						path="/fav"
						exact
						render={() => (
							<Favourites
								favPlanets={this.state.planets.map((planet) => {
									if (planet.isFavourite) {
										return planet;
									}
								})}
							/>
						)}
					/>
					<Route
						path="/planets"
						exact
						render={() => <Planets planets={this.state.planets} favHandler={this.favHandler} />}
					/>
				</Fragment>
			);
		}
		return null;
	}
}
export default Layout;
