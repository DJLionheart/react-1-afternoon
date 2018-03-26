import React, { Component } from 'react';

export default class Palindrome extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    handleInput( e ) {
        this.setState({
            userInput: e
        })
    }

    checkPalindrome ( input ) {
        let reverseWord = input.split('').reverse().join('');
        if( input === reverseWord ) {this.setState({palindrome: 'true'})
        } else {this.setState({palindrome: 'false'})}
    }

    render() {

        var { userInput, palindrome } = this.state;

        return (
            <div className="puzzleBox palindromePB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={ (e) => this.handleInput( e.target.value )}/>
                <button className="confirmationButton" onClick={ () => this.checkPalindrome( userInput )}>Check</button>
                <span className="resultsBox">Palindrome: { palindrome }</span>
            </div>
        )
    }
}