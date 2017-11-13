import React, { Component } from "react"
import Lottie from 'react-lottie'

import * as animationData from './data/twitterheart.json'

export default class TwitterHeart extends Component {

  render() {

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      // rendererSettings: {
      //   preserveAspectRatio: xMidYMid slice
      // }
    };

		return (

      <Lottie options={defaultOptions}
        height={400}
        width={400}
			/>

		)
  }
}
