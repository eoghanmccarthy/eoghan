import React, { Component } from "react";
import Lottie from "react-lottie";

import ContentMain from "../contentmain";
import ContentSidebar from "../contentsidebar";

import * as animationData from "./data/preloader.json";

export default class Preloader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPaused: false
        };
    }

    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData
            // rendererSettings: {
            //   preserveAspectRatio: xMidYMid slice
            // }
        };

        return [
            <ContentMain>
                <div className="content-column">
                    <div
                        className="btn btn-circle btn-trigger"
                        onClick={() =>
                            this.setState({ isPaused: !this.state.isPaused })
                        }
                    />

                    <Lottie
                        options={defaultOptions}
                        height={400}
                        width={400}
                        isPaused={this.state.isPaused}
                    />
                </div>
            </ContentMain>,
            <ContentSidebar>
                <h3>Lottie</h3>
                <p>Looping animation with pause button.</p>
                <p>
                    <a
                        href="https://www.lottiefiles.com/51-preloader"
                        target="_blank"
                    >
                        animation
                    </a>
                </p>
            </ContentSidebar>
        ];
    }
}
