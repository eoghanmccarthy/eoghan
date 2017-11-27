import React, { Component } from "react"

export default class Track extends Component {
    render() {
        return (
            <div
                className="audioplayer-track"
                onClick={() => {
                    this.props.onClick(this.props.index)
                }}
            >
                <span className="track-name">{this.props.name}</span>
            </div>
        )
    }
}
