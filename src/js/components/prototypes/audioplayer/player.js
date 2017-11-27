import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as audioPlayerActions from "../../../actions/audioplayer"

import TrackList from "./tracklist"
import Controls from "./controls"

class Player extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isPlaying: false,
            isPaused: true
        }
    }

    handleCurrentIndexSet = index => {
        this.props.currentIndexSet(index)
        this.handleMediaPlay()
    }

    handleMediaPlay = () => {
        let mediaRef = this.refs.mediaRef
        let playPromise = mediaRef.play()
        if (playPromise) {
            playPromise
                .then(_ => {
                    mediaRef.load()
                    mediaRef.play()
                    this.setState({
                        isPlaying: true,
                        isPaused: false
                    })
                })
                .catch(error => {})
        }
    }

    handleTogglePlay = () => {
        if (!this.state.isPaused) {
            this.refs.mediaRef.pause()
            this.setState({
                isPlaying: false,
                isPaused: true
            })
        } else {
            this.refs.mediaRef.play()
            this.setState({
                isPlaying: true,
                isPaused: false
            })
        }
    }

    handleOnTrackEnd = () => {
        this.setState({
            isPlaying: false,
            isPaused: true
        })
    }

    render() {
        const { tracklist, trackIndex } = this.props

        return (
            <div>
                <TrackList onTrackChange={this.handleCurrentIndexSet} />
                <audio
                    id="audio"
                    ref="mediaRef"
                    src={tracklist[trackIndex].src}
                    onEnded={this.handleOnTrackEnd}
                />
                <Controls onTogglePlay={this.handleTogglePlay} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        tracklist: state.prototypes.audioplayer.tracklist,
        trackIndex: state.prototypes.audioplayer.trackIndex
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(audioPlayerActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)
