import React, { Component } from "react";

export default class Modal extends Component {
    render() {
        return (
            <div className="modal">
                <div
                    className="btn btn-circle btn-circle-cross btn-close-modal"
                    onClick={this.props.onClick}
                >
                    <div className="bars">
                        <span />
                        <span />
                    </div>
                </div>
                {this.props.children}
            </div>
        );
    }
}
