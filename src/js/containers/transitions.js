import React, { Component } from "react"

import ContentList from "../components/contentlist"

import Entrance from "../components/transitions/entrance"
import ToggleFade from "../components/transitions/ToggleFade"

export default class Transitions extends Component {

	render() {
		return (
			<div className="grid-wrapper">
				<div className="grid-header">
					<h1>Transitions</h1>
				</div>
				<div className="grid-sidebar">
					<ContentList>
						<li><a href="https://github.com/chenglou/react-motion" target="_blank">github.com/chenglou/react-motion</a></li>
					</ContentList>
				</div>
				<div className="grid-main">
					<Entrance />
					<ToggleFade />
				</div>
			</div>
		);
	}
}
