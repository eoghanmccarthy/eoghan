import React, { Component, Fragment } from "react"
import Lottie from "react-lottie"

import ContentMain from "../contentmain"
import ContentSidebar from "../contentsidebar"

import * as animationData from "./data/filterbutton.json"

export default class FilterButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isStopped: true,
            speed: 1,
            active: false
        }
    }

    handleClick() {
        const { isStopped, active } = this.state
        const anim = this.refs.filterButtonRef.anim
        if (!active) {
            anim.playSegments([60, 75], true)
        } else {
            anim.playSegments([135, 150], true)
        }
        this.setState({
            isStopped: false,
            active: !active
        })
    }

    render() {
        const { isStopped, speed } = this.state

        const defaultOptions = {
            loop: false,
            autoplay: false,
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
                        className="btn btn-circle btn-trigger"
                        onClick={this.handleToggle.bind(this)}
                    /> */}

                        <div onClick={this.handleClick.bind(this)}>
                            <Lottie
                                options={defaultOptions}
                                ref={"filterButtonRef"}
                                height={200}
                                width={200}
                                isStopped={isStopped}
                                speed={speed}
                            />
                        </div>
                    </div>
                </ContentMain>
                <ContentSidebar>
                    <h3>Lottie</h3>
                    <p>
                        Toggle between two segments and force the segment right
                        away.
                    </p>
                    <p>
                        <a
                            href="https://www.lottiefiles.com/344-filter-button"
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
