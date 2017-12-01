import React, { Component, Fragment } from "react"
import { Link } from "react-router-dom"
import { withRouter } from "react-router"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as globalActions from "../../../actions/global"
import * as slideShowActions from "../../../actions/slideshow"

import ReactFileReader from "react-file-reader"

import ContentMain from "../../contentmain"
import ContentSidebar from "../../contentsidebar"
import Preview from "./preview"
import Viewer from "./viewer"

import { LibraryData } from "./data/imagelibrary"
// import { LibraryData } from "./data/videolibrary"

class Config extends Component {
    constructor(props) {
        super(props)
        this.state = {
            previewSrc: "",
            selectedFile: "",
            viewerIsActive: false
        }
    }

    handleLoadLibrary = () => {
        this.props.loadLibrary(LibraryData)
        this.props.clearPlaylist()
        // this.props.library.map((item, index) => {
        //     this[`mediaRef${index}`].load()
        // })
    }

    handleDeleteLibraryItem = index => {
        this.props.deleteLibraryItem(this.props.library[index].src)
        this.props.removePlaylistItem(this.props.library[index].src)
        // this.props.library.map((item, index) => {
        //     this[`mediaRef${index}`].load()
        // })
    }

    handleAddPlaylistItem = index => {
        this.props.addPlaylistItem(this.props.library[index].src)
        this.props.setItemStatusSelected(this.props.library[index].src)
    }

    handleRemovePlaylistItem = index => {
        this.props.removePlaylistItem(this.props.library[index].src)
        this.props.setItemStatusUnselected(this.props.library[index].src)
    }

    handleClearPlaylist = () => {
        this.props.clearPlaylist()
        this.props.setAllStatusUnselected()
    }

    handleTogglePreview = index => {
        this.props.toggleGlobalHeader()
        this.props.togglePreview()
        this.setState({
            previewSrc: this.props.library[index].src
        })
    }

    handleFileSelectChange = files => {
        this.setState({
            selectedFile: files.base64
        })
        this.handleFileSubmit()
    }

    handleFileSubmit = () => {
        this.props.addLibraryItem(this.state.selectedFile)
        this.setState({
            selectedFile: ""
        })
    }

    //   handleFileSubmit = event => {
    //     this.props.addLibraryItem(this.state.selectedFile);
    //     event.preventDefault();
    //     this.setState({
    //       selectedFile: ""
    //     });
    //   };

    handleToggleViewer = () => {
        this.props.toggleGlobalHeader()
        this.props.toggleViewer()
    }

    render() {
        const {
            library,
            playlist,
            preview,
            togglePreview,
            clearPlaylist,
            viewer
        } = this.props

        const libraryItems = library.map((item, index) => (
            <div className="card-container" key={index}>
                <div className="card">
                    <div
                        className="card-media"
                        style={{
                            backgroundImage: `url(${library[index].src})`
                        }}
                    >
                        {/* <img
              ref={image => {
                this[`mediaRef${index}`] = image;
              }}
              src={library[index].src}
            /> */}
                        {/* <video
              ref={video => {
                this[`mediaRef${index}`] = video;
              }}
              playsInline
              autoPlay
              muted
              loop
            >
              <source src={library[index].src} type="video/mp4" />
            </video> */}
                    </div>

                    <div
                        className="btn-preview"
                        onClick={this.handleTogglePreview.bind(this, index)}
                    >
                        <span>
                            Click To<br />Preview
                        </span>
                    </div>

                    {library[index].selected ? (
                        <div
                            className="btn btn-circle btn-circle-minus btn-remove-playlist-item"
                            onClick={this.handleRemovePlaylistItem.bind(
                                this,
                                index
                            )}
                        >
                            <span>
                                {playlist.findIndex(
                                    o => o.src === library[index].src
                                ) + 1}
                            </span>
                        </div>
                    ) : (
                        <div
                            className="btn btn-circle btn-circle-plus btn-add-playlist-item"
                            onClick={this.handleAddPlaylistItem.bind(
                                this,
                                index
                            )}
                        >
                            <div className="bars">
                                <span />
                                <span />
                            </div>
                        </div>
                    )}

                    {/* <div className="card-playlist-position">
            {playlist.findIndex(o => o.src === library[index].src) + 1}
          </div> */}

                    <div
                        className="btn btn-circle btn-circle-cross btn-delete-library-item"
                        onClick={this.handleDeleteLibraryItem.bind(this, index)}
                    >
                        <div className="bars">
                            <span />
                            <span />
                        </div>
                    </div>
                </div>
            </div>
        ))

        return (
            <Fragment>
                <ContentMain>
                    <div className="content-column">
                        <div className="slideshow-config">
                            <div className="config-controls">
                                <div
                                    className="btn btn-small btn-outline btn-default btn-load-library"
                                    onClick={this.handleLoadLibrary.bind(this)}
                                >
                                    Load Pre-Installed Library
                                </div>

                                {/* <div
                className="btn btn-outline btn-clear-selection"
                onClick={this.handleClearPlaylist.bind(this)}
              >
                Clear Selection
              </div> */}
                            </div>
                            <div className="config-library">
                                <div className="library-items">
                                    {libraryItems}
                                    <div className="card-container">
                                        <div className="card card-add-library-item">
                                            <ReactFileReader
                                                base64={true}
                                                fileTypes={[
                                                    ".jpg",
                                                    ".jpeg",
                                                    ".png"
                                                ]}
                                                handleFiles={
                                                    this.handleFileSelectChange
                                                }
                                            >
                                                <div className="btn btn-circle btn-default btn-circle-plus">
                                                    <div className="bars">
                                                        <span />
                                                        <span />
                                                    </div>
                                                </div>
                                            </ReactFileReader>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="config-controls">
              <div className="btn-add-library-item">
                <form onSubmit={this.handleFileSubmit.bind(this)}>
                  {this.state.selectedFile && (
                    <div>
                      <label
                        className="btn btn-circle btn-circle-target"
                        htmlFor="fileSubmit"
                      >
                        <div className="bars">
                          <div />
                        </div>
                      </label>
                      <input
                        className="hidden-form"
                        id="fileSubmit"
                        type="submit"
                      />
                    </div>
                  )}

                  <ReactFileReader
                    base64={true}
                    fileTypes={[".mp4"]}
                    handleFiles={this.handleFileSelectChange}
                  >
                    <div className="btn btn-circle btn-circle-plus">
                      <div className="bars">
                        <span />
                        <span />
                      </div>
                    </div>
                  </ReactFileReader>
                </form>
              </div>
            </div> */}

                            <div className="config-controls">
                                {playlist.length > 0 && (
                                    <div
                                        className="btn btn-large btn-green btn-outline"
                                        onClick={this.handleToggleViewer.bind(
                                            this
                                        )}
                                    >
                                        Launch
                                    </div>
                                )}
                            </div>

                            {viewer && <Viewer />}

                            {preview && (
                                <Preview previewSrc={this.state.previewSrc} />
                            )}
                        </div>
                    </div>
                </ContentMain>
                <ContentSidebar>
                    <h3>ReactJS / Redux</h3>
                    <p>
                        Configure a slideshow, add your own images or load a
                        library of images. Once configured, click to launch :)
                    </p>
                </ContentSidebar>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        library: state.prototypes.slideshow.library,
        playlist: state.prototypes.slideshow.playlist,
        preview: state.prototypes.slideshow.preview,
        viewer: state.prototypes.slideshow.viewer
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        Object.assign({}, globalActions, slideShowActions),
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Config)
