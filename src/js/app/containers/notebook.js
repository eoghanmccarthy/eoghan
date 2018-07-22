import React, { Component } from "react"

import ContentList from "../components/contentlist"

import ToggleSwitch from "../components/notebook/toggleswitch"
import FilterButton from "../components/notebook/filterbutton"
import MenuButton from "../components/notebook/menubutton"
import LoadingRefresh from "../components/notebook/loadingrefresh"
import TwiiterHeart from "../components/notebook/twitterheart"
import Preloader from "../components/notebook/preloader"
import InfinityLoader from "../components/notebook/infinityloader"
import Refresh from "../components/notebook/refresh"
import StaggeredTransitionOnMount from "../components/notebook/staggeredTransitionOnMount"
import TransitionOnMount from "../components/notebook/transitionOnMount"

export default class Notebook extends Component {
    render() {
        return (
            <div className="grid-wrapper">
                <div className="grid-header">
                    <h1>Notebook</h1>
                </div>
                <div className="grid-sidebar">
                    <p>Digital musings and experiments ...</p>
                    <ContentList>
                        <li>
                            <a
                                href="http://airbnb.io/lottie/web/web.html"
                                target="_blank"
                            >
                                airbnb.io/lottie/web/web.html
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/bodymovin/bodymovin"
                                target="_blank"
                            >
                                github.com/bodymovin/bodymovin
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/chenqingspring/react-lottie"
                                target="_blank"
                            >
                                github.com/chenqingspring/react-lottie
                            </a>
                        </li>
                    </ContentList>
                </div>
                <div className="grid-main">
                    <ToggleSwitch />
                    <FilterButton />
                    <TwiiterHeart />
                    <Preloader />
                    <MenuButton />
                    <StaggeredTransitionOnMount />
                    <TransitionOnMount />
                </div>
            </div>
        )
    }
}
