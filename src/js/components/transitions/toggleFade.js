import React, { Component } from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../../actions/index'

import ContentMain from '../contentmain'
import ContentSidebar from '../contentsidebar'

import { TransitionMotion, spring } from "react-motion"

import Logo from "../logo"

class ToggleFade extends Component {

	willEnter() {
	  return {
	    opacity: 0
	  }
	}

	willLeave() {
	  return {
	    opacity: spring(0)
	  }
	}

	render() {
		return [
			<ContentMain>
				<div className="content-column">

					<button
	          className="btn-circle"
	          onClick={ this.props.toggleLogo }
	        />

					<TransitionMotion
		        styles={this.props.logo ? [] : [{
		          key: 'child',
		          data: {},
		          style: { opacity: spring(1) }
		        }]}
		        willEnter={this.willEnter}
		        willLeave={this.willLeave}>
		          {(items) => {
		            return (
		              <div>
		                {items.map(item => {
		                  return (
												<Logo
													key={item.key}
													style={{
														width: "240px",
														height: "auto",
														opacity:item.style.opacity
													}}
												/>
		                  );
		                })}
		              </div>
		            )
		          }}
		      </TransitionMotion>

				</div>
			</ContentMain>,
			<ContentSidebar>
				<h3>React Motion</h3>
				<p>Mounting and unmounting fade transition on a single component. Toggle action is handled by Redux.</p><p><a href="https://github.com/chenglou/react-motion#transitionmotion-" target="_blank">reference</a></p>
			</ContentSidebar>
		]
	}
}

const mapStateToProps = (state) => {
  return {
    logo: state.logo
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ToggleFade);
