import React, { Component, Fragment } from "react"
import Lottie from "react-lottie"

import ContentMain from "../contentmain"
import ContentSidebar from "../contentsidebar"

import * as animationData from "./data/toggleswitch.json"

export default class ToggleSwitch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isStopped: true,
            speed: 5,
            active: false
        }
    }

    handleClick() {
        const { isStopped, active } = this.state
        const anim = this.refs.toggleSwitchRef.anim
        if (!active) {
            anim.playSegments([0, 49], true)
        } else {
            anim.playSegments([50, 99], true)
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
                        <div onClick={this.handleClick.bind(this)}>
                            <Lottie
                                options={defaultOptions}
                                ref={"toggleSwitchRef"}
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
                            href="https://www.lottiefiles.com/24-toggle-switch"
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
