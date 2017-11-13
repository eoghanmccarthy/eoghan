import React, { Component } from "react"
import Lottie from 'react-lottie'

import ContentMain from '../contentmain'
import ContentSidebar from '../contentsidebar'

import * as animationData from './data/loadingrefresh.json'

export default class LoadingRefresh extends Component {

  componentDidMount = () => {
    let anim = this.refs.loadingRefreshRef.anim;
    anim.setSpeed(2);
  }

  render() {

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        className: 'svg',
        viewBoxOnly: true
      }
    };

		return [
			<ContentMain>
				<div className="content-column">

          <Lottie options={defaultOptions}
            ref={'loadingRefreshRef'}
            height={200}
            width={200}
					/>

				</div>
      </ContentMain>,
      <ContentSidebar>
				<h3>Lottie</h3>
				<p>Looping animation with custom speed setting.</p><p><a href="https://www.lottiefiles.com/126-loading-refresh" target="_blank">animation</a></p>
			</ContentSidebar>
		]
  }
}
