import React, { Component } from "react"
import { connect } from "react-redux"

class Track extends Component {
    render() {
        const { trackIndex } = this.props

        return (
            <div
                className={
                    trackIndex == this.props.index
                        ? "audioplayer-track track-active"
                        : "audioplayer-track"
                }
                onClick={() => {
                    this.props.onClick(this.props.index)
                }}
            >
                <span className="track-name">
                    {this.props.index + 1} - {this.props.name}
                </span>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        trackIndex: state.prototypes.audioplayer.trackIndex
    }
}

export default connect(mapStateToProps)(Track)
