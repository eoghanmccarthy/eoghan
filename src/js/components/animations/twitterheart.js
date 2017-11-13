import React, { Component } from "react"
import Lottie from 'react-lottie'

import ContentMain from '../contentmain'
import ContentSidebar from '../contentsidebar'

import * as animationData from './data/twitterheart.json'

export default class TwiiterHeart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isStopped: false
    };
  }

  render() {

    const defaultOptions = {
      loop: true,
      autoplay: false,
      animationData: animationData,
      rendererSettings: {
        className: 'svg',
        viewBoxOnly: true
      }
    };

		return [
			<ContentMain>
				<div className="content-column">

          {/* <button
	          className="btn-circle"
	          onClick={() => this.setState({isStopped: !this.state.isStopped})}
	        /> */}

          <div onClick={() => this.setState({isStopped: !this.state.isStopped})}>

            <Lottie options={defaultOptions}
              height={200}
              width={200}
              isStopped={this.state.isStopped}
  					/>

          </div>

				</div>
      </ContentMain>,
      <ContentSidebar>
				<h3>Lottie</h3>
				<p>Looping animation with start/stop button.</p>
			</ContentSidebar>
		]
  }
}
