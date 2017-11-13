import React, { Component } from "react"

export default class ContentList extends Component {

	render() {
		return (
			<ul className="content-list">
				{this.props.children}
			</ul>
		)
	}
}
