import React, { Component } from "react"

export default class Controls extends Component {
    render() {
        return (
            <div className="audioplayer-controls">
                <div
                    className="btn btn-circle btn-green"
                    onClick={this.props.onTogglePlay}
                />
            </div>
        )
    }
}
