import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as audioPlayerActions from "../../../actions/audioplayer"

import Track from "./track"

class Tracklist extends Component {
    render() {
        const { tracklist } = this.props

        const mediaItems = tracklist.map((item, index) => (
            <Track
                key={index}
                index={index}
                onClick={this.props.onTrackChange}
                name={item.name}
                src={item.src}
            />
        ))

        return (
            <div>
                <div className="audioplayer-tracklist">{mediaItems}</div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        tracklist: state.prototypes.audioplayer.tracklist
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(audioPlayerActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Tracklist)
