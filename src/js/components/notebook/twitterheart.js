import React, { Component, Fragment } from "react"
import Lottie from "react-lottie"

import ContentMain from "../contentmain"
import ContentSidebar from "../contentsidebar"

import * as animationData from "./data/twitterheart.json"

export default class TwiiterHeart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isStopped: false,
            speed: 1
        }
    }

    handleClick() {
        const { isStopped } = this.state
        this.setState({
            isStopped: !isStopped
        })
    }

    render() {
        const { isStopped, speed } = this.state

        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
                className: "svg",
                viewBoxOnly: true
            }
        }

        return (
            <Fragment>
                <ContentMain>
                    <div className="content-column">
                        {/* <div
                        className="btn-circle btn-trigger"
                        onClick={() => this.setState({isStopped: !this.state.isStopped})}
                    /> */}

                        <div onClick={this.handleClick.bind(this)}>
                            <Lottie
                                options={defaultOptions}
                                height={200}
                                width={200}
                                speed={speed}
                                isStopped={isStopped}
                            />
                        </div>
                    </div>
                </ContentMain>
                <ContentSidebar>
                    <h3>Lottie</h3>
                    <p>Looping animation with start/stop button.</p>
                </ContentSidebar>
            </Fragment>
        )
    }
}
