import React, { Component } from "react"

export default class Controls extends Component {
    render() {
        return (
            <div className="audioplayer-controls">
                <div
                    className="btn btn-circle btn-blue btn-circle-minus"
                    onClick={this.props.prev}
                >
                    <div className="bars">
                        <span />
                    </div>
                </div>
                {this.props.isPlaying ? (
                    <div
                        className="btn btn-circle btn-green btn-circle-pause"
                        onClick={this.props.onTogglePlay}
                    >
                        <div className="bars">
                            <span />
                            <span />
                        </div>
                    </div>
                ) : (
                    <div
                        className="btn btn-circle btn-green btn-circle-target"
                        onClick={this.props.onTogglePlay}
                    >
                        <div className="bars">
                            <div />
                        </div>
                    </div>
                )}
                <div
                    className="btn btn-circle btn-red btn-circle-plus"
                    onClick={this.props.next}
                >
                    <div className="bars">
                        <span />
                        <span />
                    </div>
                </div>
            </div>
        )
    }
}
