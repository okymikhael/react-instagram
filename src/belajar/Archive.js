import React, { Component } from 'react'

export default class Archive extends Component {
    render() {
        return (
            <div>
                <h2>Nilai Props = {this.props.nilai}</h2>
                <button onClick={() => this.props.valueChanges(9)}>Props Change Nilai</button>
            </div>
        )
    }
}
