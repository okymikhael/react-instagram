import React, { Component } from 'react'

export default class Unmount extends Component {
    componentWillUnmount(){
        this.props.nameChanges("B2")
    }

    render() {
        return (
            <div>
                <h1>Nice</h1>
            </div>
        )
    }
}
