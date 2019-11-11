import React from "react";
import { NavLink } from 'react-router-dom';

const Navigation = () => {

	return (
		<div className="navigation">
			<NavLink to="/Login">Login</NavLink>
			<NavLink to='/BubblePage'>Bubbles Page</NavLink>
		</div>
	);
};

export default Navigation;