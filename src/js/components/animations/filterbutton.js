import React, { Component } from "react"
import Lottie from 'react-lottie'

import ContentMain from '../contentmain'
import ContentSidebar from '../contentsidebar'

import * as animationData from './data/filterbutton.json'

export default class FilterButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filtersActive: false
    };
  }

  handleToggleFilters() {
    let anim = this.refs.loadingRefreshRef.anim;
    if(this.state.filtersActive === false) {
      this.setState({
        filtersActive: true
      })
      anim.playSegments([0, 75], true);
    } else {
      this.setState({
        filtersActive: false
      })
      anim.playSegments([76, 150], true);
    }
  }

  render() {

    const defaultOptions = {
      loop: false,
      autoplay: false,
      animationData: animationData,
      // rendererSettings: {
      //   preserveAspectRatio: xMidYMid slice
      // }
    };

		return [
			<ContentMain>
				<div className="content-column">

          <button
	          className="btn-circle"
	          onClick={this.handleToggleFilters.bind(this)}
	        />

          <Lottie options={defaultOptions}
            ref={'loadingRefreshRef'}
            height={400}
            width={400}
            // eventListeners={
            //   [
            //     {
            //       eventName: 'complete',
            //       callback: this.handleOnComplete.bind(this)
            //     }
            //   ]
            // }
					/>

				</div>
      </ContentMain>,
			<ContentSidebar>
					<h3>Lottie</h3>
					<p>Toggle between two segments and force the segment right away.</p><p><a href="https://www.lottiefiles.com/344-filter-button" target="_blank">animation</a></p>
			</ContentSidebar>
		]
  }
}
