import React, { Component } from 'react';

export default class Sum extends Component {
    constructor() {
        super();
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    handleNum1 ( e ) {
        this.setState({number1: parseInt(e, 10)}
    )}

    handleNum2 ( e ) {
        this.setState({number2: parseInt(e, 10)}
    )}

    add(){
        var num1 = this.state.number1;
        var num2 = this.state.number2;
        var newSum = num1+num2;
        this.setState({sum: newSum})
    }

    render() {
        let { number1, number2, sum } = this.state;
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={ ( e ) => this.handleNum1( e.target.value )}/>
                <input className="inputLine" onChange={ ( e ) => this.handleNum2( e.target.value )}/>
                <button className="confirmationButton" onClick={ () => this.add() }>Add</button>
                <span className="resultsBox">Sum: { sum }</span>
            </div>
        )
    }
}