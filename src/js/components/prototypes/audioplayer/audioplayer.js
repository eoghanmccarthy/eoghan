import React, { Component, Fragment } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { loadMedia } from "../../../actions/audioplayer"

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
        return (
            <Fragment>
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
                </ContentMain>
                <ContentSidebar>
                    <h3>Audio Player</h3>
                    <p>
                        Blurb blurb blurb blurb blurb blurb blurb blurb blurb
                        blurb blurb.
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
            </Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ loadMedia }, dispatch)
}

export default connect(null, mapDispatchToProps)(AudioPlayer)
