import React, { Component, Fragment } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as actionCreators from "../../actions/notebook"

import ContentMain from "../contentmain"
import ContentSidebar from "../contentsidebar"

import { TransitionMotion, spring } from "react-motion"

import Circle from "../assets/shapes/circle"

class TransitionOnMount extends Component {
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
        const { transitionOnMount, toggleTransitionOnMount } = this.props

        return (
            <Fragment>
                <ContentMain>
                    <div className="content-column">
                        <div
                            className="btn btn-circle btn-default btn-trigger"
                            onClick={toggleTransitionOnMount}
                        />

                        <TransitionMotion
                            styles={
                                transitionOnMount
                                    ? []
                                    : [
                                          {
                                              key: "child",
                                              data: {},
                                              style: { opacity: spring(1) }
                                          }
                                      ]
                            }
                            willEnter={this.willEnter}
                            willLeave={this.willLeave}
                        >
                            {items => {
                                return (
                                    <div>
                                        {items.map(item => {
                                            return (
                                                <Circle
                                                    key={item.key}
                                                    style={{
                                                        opacity:
                                                            item.style.opacity
                                                    }}
                                                />
                                            )
                                        })}
                                    </div>
                                )
                            }}
                        </TransitionMotion>
                    </div>
                </ContentMain>
                <ContentSidebar>
                    <h3>React Motion</h3>
                    <p>
                        Mounting and unmounting fade transition on a single
                        component. Toggle action is handled by Redux.
                    </p>
                    <p>
                        <a
                            href="https://github.com/chenglou/react-motion#transitionmotion-"
                            target="_blank"
                        >
                            reference
                        </a>
                    </p>
                </ContentSidebar>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        transitionOnMount: state.notebook.transitionOnMount
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TransitionOnMount)
