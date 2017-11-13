import React, { Component } from "react"
import Lottie from 'react-lottie'

import * as animationData from './data/muzzle.json'

export default class Muzzle extends Component {

  render() {

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData
    };

		return (
			<div className="content-wrapper">
				<div className="content-main">
					<div className="content-column">

            <Lottie options={defaultOptions}
              height={400}
              width={400}
  					/>

					</div>
				</div>
				<div className="content-sidebar">
					<h3>React Motion</h3>
					<p>Transitioning a single component on mount/unmount. <a href="https://github.com/chenglou/react-motion">reference</a></p>
				</div>
			</div>
		)
  }
}
