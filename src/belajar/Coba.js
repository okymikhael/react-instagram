import React, { Component } from 'react'
import Archive from './Archive';

export default class Coba extends Component {
    constructor(props){
        super(props);
        this.state = {
            nilai: 10
        }
    }

    valueChanges = (value) => {
        this.setState({
            nilai: value
        })
    }
    

    render() {
        return (
            <div>
                <h2>Nilai State = {this.state.nilai}</h2>
                <button onClick={() => this.valueChanges(8)}>Change Value Nilai</button>
                <Archive nilai={this.state.nilai} valueChanges={this.valueChanges}/>
            </div>
        )
    }
}
