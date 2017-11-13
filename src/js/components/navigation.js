import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navigation extends Component {
	render() {
		return (
			<header className="global-header">

				<img
					className="omm-logo"
					src="assets/media/omm-logo.png"
				/>

				<nav>
					<NavLink exact to="/">//</NavLink>
					<NavLink to="/animations">Animations</NavLink>
					<NavLink to="/transitions">Transitions</NavLink>
				</nav>

			</header>
		)
	}
}
