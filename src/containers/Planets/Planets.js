import React, { Component } from 'react';

class Planets extends Component {
	render() {
		//const list = <ul>{this.state.planets.map((planet) => <li>{planet.name}</li>)}</ul>;
		if (this.props.planets) {
			return (
				<ul>
					{this.props.planets.map((planet, index) => (
						<li key={planet.id} onClick={() => this.props.favHandler(planet, index)}>
							{planet.name}
						</li>
					))}
				</ul>
			);
		}
		return null;
	}
}
export default Planets;
