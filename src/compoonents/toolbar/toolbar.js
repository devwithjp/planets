import React from 'react';
import { Link } from 'react-router-dom';
const toolbar = (props) => (
	<header>
		<nav>
			<ul>
				<li>
					<Link to="/planets">Planets</Link>
				</li>
				<li>
					<Link
						to={{
							pathname: '/fav',
							state: {
								favs: props.favPlanets
							}
						}}
					>
						Favourites
					</Link>
				</li>
			</ul>
		</nav>
	</header>
);

export default toolbar;
