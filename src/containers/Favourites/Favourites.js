import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Favourites extends Component {
	render() {
		if (this.props.favPlanets) {
			return <ul>{this.props.favPlanets.map((planet) => <li key={planet.id}>{planet.name}</li>)}</ul>;
		}
		return null;
	}
}
export default withRouter(Favourites);
