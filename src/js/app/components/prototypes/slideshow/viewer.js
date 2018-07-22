import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toggleGlobalHeader } from "../../../actions/global";
import { toggleViewer } from "../../../actions/slideshow";

import Modal from "../../modal";

class Viewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mediaSrc: null,
            mediaIndex: 0
        };
    }

    componentWillMount() {
        this.setState({
            mediaSrc: this.props.playlist[this.state.mediaIndex].src
        });
        this.interval = setInterval(this.tick.bind(this), 5000);
    }

    tick() {
        this.setState({
            mediaIndex: (this.state.mediaIndex + 1) % this.props.playlist.length
        });
        this.reloadMedia();
    }

    reloadMedia = () => {
        this.setState({
            mediaSrc: this.props.playlist[this.state.mediaIndex].src
        });
        // this.refs.mediaRef.load();
    };

    handleClick = () => {
        this.props.toggleGlobalHeader();
        this.props.toggleViewer();
    };

    componentWillUnmount = () => {
        clearInterval(this.interval);
    };

    render() {
        return (
            <Modal onClick={this.handleClick}>
                <div className="slideshow-viewer">
                    {<img ref="mediaRef" src={this.state.mediaSrc} />}
                    {/* <video
                    ref="mediaRef"
                    playsInline
                    autoPlay
                    muted
                    loop
                    >
                    <source src={this.state.mediaSrc} type="video/mp4" />
                    </video> */}
                </div>
            </Modal>
        );
    }
}

const mapStateToProps = state => {
    return {
        playlist: state.prototypes.slideshow.playlist
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ toggleGlobalHeader, toggleViewer }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Viewer);
