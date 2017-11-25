import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class Navigation extends Component {
    render() {
        return (
            <div>
                {this.props.globalHeader && (
                    <header className="global-header">
                        <img
                            className="omm-logo"
                            src="assets/media/omm-logo.png"
                        />

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
        );
    }
}

const mapStateToProps = state => {
    return {
        globalHeader: state.global.globalHeader
    };
};

export default connect(mapStateToProps)(Navigation);
