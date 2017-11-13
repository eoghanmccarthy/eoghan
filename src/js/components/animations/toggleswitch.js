import React, { Component } from "react"
import Lottie from 'react-lottie'

import ContentMain from '../contentmain'
import ContentSidebar from '../contentsidebar'

import * as animationData from './data/toggleswitch.json'

export default class ToggleSwitch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      toggleActive: false
    };
  }

  handleToggleFilters() {
    let anim = this.refs.toggleSwitchRef.anim;
    if(this.state.toggleActive === false) {
      this.setState({
        toggleActive: true
      })
      anim.playSegments([0, 49], true);
    } else {
      this.setState({
        toggleActive: false
      })
      anim.playSegments([50, 99], true);
    }
  }

  render() {

    const defaultOptions = {
      loop: false,
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

          <div onClick={this.handleToggleFilters.bind(this)}>

            <Lottie options={defaultOptions}
              ref={'toggleSwitchRef'}
              height={200}
              width={200}
              speed={3}
  					/>

          </div>
        </div>
      </ContentMain>,
      <ContentSidebar>
				<h3>Lottie</h3>
				<p>Toggle between two segments and force the segment right away.</p><p><a href="https://www.lottiefiles.com/24-toggle-switch" target="_blank">animation</a></p>
			</ContentSidebar>
		]
  }
}
