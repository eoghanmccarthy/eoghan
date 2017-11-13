import React, { Component } from "react"

export default class Logo extends Component {

	render() {
		return (

      <div style={ this.props.style }>
        <img
					style={{width: "100%"}}
					src="assets/media/logo.png"
				/>
      </div>

		)
	}
}
