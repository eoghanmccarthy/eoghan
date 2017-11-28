import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as audioPlayerActions from "../../../actions/audioplayer"

import ContentMain from "../../contentmain"
import ContentSidebar from "../../contentsidebar"

import Image from "../../../../media/images/img_0387-folio.jpg"
import Player from "./player"
import { TrackData } from "./data/tracklist"

class AudioPlayer extends Component {
    componentWillMount = () => {
        this.props.loadMedia(TrackData)
    }

    render() {
        return [
            <ContentMain>
                <div className="content-column">
                    <div
                        className="audioplayer"
                        style={{
                            backgroundImage: `url(${Image})`
                        }}
                    >
                        <Player />
                    </div>
                </div>
            </ContentMain>,
            <ContentSidebar>
                <h3>Audio Player</h3>
                <p>
                    Blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb
                    blurb.
                </p>
                <p>
                    <a
                        href="https://www.lottiefiles.com/254-menu-button"
                        target="_blank"
                    >
                        animation
                    </a>
                </p>
            </ContentSidebar>
        ]
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

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer)
