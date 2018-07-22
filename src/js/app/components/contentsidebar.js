import React, { Component } from "react"

export default class ContentSidebar extends Component {

	render() {
		return (
			<div className="content-sidebar">
				{this.props.children}
			</div>
		)
	}
}
