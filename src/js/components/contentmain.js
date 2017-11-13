import React, { Component } from "react"

export default class ContentMain extends Component {

	render() {
		return (
			<div className="content-main">
				{this.props.children}
			</div>
		)
	}
}
