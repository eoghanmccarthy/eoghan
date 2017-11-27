import React, { Component } from "react"

import ContentList from "../components/contentlist"

import StaggeredTransitionOnMount from "../components/prototypes/staggeredTransitionOnMount"
import TransitionOnMount from "../components/prototypes/transitionOnMount"
import AudioPlayer from "../components/prototypes/audioplayer/audioplayer"
import SlideShow from "../components/prototypes/slideshow/config"

export default class Transitions extends Component {
    render() {
        return (
            <div className="grid-wrapper">
                <div className="grid-header">
                    <h1>(Prototypes)</h1>
                </div>
                <div className="grid-sidebar">
                    <p>Learnings in action ...</p>
                    <ContentList>
                        <li>
                            <a
                                href="https://github.com/chenglou/react-motion"
                                target="_blank"
                            >
                                github.com/chenglou/react-motion
                            </a>
                        </li>
                    </ContentList>
                </div>
                <div className="grid-main">
                    <AudioPlayer />
                    <SlideShow />
                    <StaggeredTransitionOnMount />
                    <TransitionOnMount />
                </div>
            </div>
        )
    }
}
