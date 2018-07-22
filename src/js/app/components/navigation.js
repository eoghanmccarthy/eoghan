import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"

import Logo from "../../media/images/logo-alt.png"

class Navigation extends Component {
    render() {
        const { isActive } = this.props

        return (
            <div>
                {isActive && (
                    <header className="global-header">
                        <img className="logo" src={Logo} />

                        <nav>
                            <NavLink exact to="/">
                                //
                            </NavLink>
                            <NavLink to="/notebook">Notebook</NavLink>
                            <NavLink to="/prototypes">(Prototypes)</NavLink>
                        </nav>
                    </header>
                )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isActive: state.global.globalHeader.isActive
    }
}

export default connect(mapStateToProps)(Navigation)
