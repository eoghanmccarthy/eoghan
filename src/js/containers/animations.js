import React, { Component } from "react"

import ContentList from "../components/contentlist"

import ToggleSwitch from "../components/animations/toggleswitch"
import FilterButton from "../components/animations/filterbutton"
import MenuButton from "../components/animations/menubutton"
import LoadingRefresh from "../components/animations/loadingrefresh"
import TwiiterHeart from "../components/animations/twitterheart"
import Preloader from "../components/animations/preloader"
import OMMEvent from "../components/animations/ommevent"
import InfinityLoader from "../components/animations/infinityloader"
import Muzzle from "../components/animations/muzzle"
import Refresh from "../components/animations/refresh"
import PinJump from "../components/animations/pinjump"

export default class Animations extends Component {

	render() {
		return (
			<div className="grid-wrapper">
				<div className="grid-header">
					<h1>Animations</h1>
				</div>
				<div className="grid-sidebar">
					<ContentList>
						<li><a href="http://airbnb.io/lottie/web/web.html" target="_blank">airbnb.io/lottie/web/web.html</a></li>
						<li><a href="https://github.com/bodymovin/bodymovin" target="_blank">github.com/bodymovin/bodymovin</a></li>
						<li><a href="https://github.com/chenqingspring/react-lottie" target="_blank">github.com/chenqingspring/react-lottie</a></li>
					</ContentList>
				</div>
				<div className="grid-main">
					<ToggleSwitch />
					<FilterButton />
					<LoadingRefresh />
					<TwiiterHeart />
					<Preloader />
					<InfinityLoader />
					<Refresh />
					<MenuButton />
					{/* <OMMEvent />
					<Muzzle />
					<PinJump /> */}
				</div>
			</div>
		);
	}
}
