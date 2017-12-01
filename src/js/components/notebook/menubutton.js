import React, { Component, Fragment } from "react"
import Lottie from "react-lottie"

import ContentMain from "../contentmain"
import ContentSidebar from "../contentsidebar"

import * as animationData from "./data/menubutton.json"

export default class MenuButton extends Component {
    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData
            // rendererSettings: {
            //   preserveAspectRatio: xMidYMid slice
            // }
        }

        return (
            <Fragment>
                <ContentMain>
                    <div className="content-column">
                        <Lottie
                            options={defaultOptions}
                            height={400}
                            width={400}
                        />
                    </div>
                </ContentMain>
                <ContentSidebar>
                    <h3>Lottie</h3>
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
