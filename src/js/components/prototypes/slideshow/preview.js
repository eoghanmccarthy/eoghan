import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { toggleGlobalHeader } from "../../../actions/global"
import { togglePreview } from "../../../actions/slideshow"

import Modal from "../../modal"

class Preview extends Component {
    handleClick = () => {
        this.props.toggleGlobalHeader()
        this.props.togglePreview()
    }

    render() {
        return (
            <Modal onClick={this.handleClick}>
                <div className="slideshow-preview">
                    <div className="slideshow-preview-frame">
                        <img src={this.props.previewSrc} />
                        {/* <video ref="mediaRef" autoPlay muted loop>
                    <source src={this.props.previewSrc} type="video/mp4" />
                  </video> */}
                    </div>
                </div>
            </Modal>
        )
    }
}

const mapStateToProps = state => {
    return {
        preview: state.prototypes.slideshow.preview
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ togglePreview, toggleGlobalHeader }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Preview)
