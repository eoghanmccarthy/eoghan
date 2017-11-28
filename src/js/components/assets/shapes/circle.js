import React, { Component } from "react"

export default class Logo extends Component {
    render() {
        return (
            <div style={this.props.style}>
                <div
                    style={{
                        width: "100px",
                        height: "100px",
                        border: "1px solid #ffffff",
                        borderRadius: "50%",
                        backgroundColor: "#00bb5d"
                    }}
                />
            </div>
        )
    }
}
