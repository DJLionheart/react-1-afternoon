import React, { Component } from 'react';

class EvenAndOdd extends Component {
    constructor() {
        super();
        
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }
    
    handleUserInput( e ) {
        this.setState({
            userInput: e
        })
    }

    assignEvenAndOdds ( val ) {
        var userArray = val.split(',');
        for(let i = 0; i < userArray.length; i++){
            userArray[i] = +userArray[i]
        };
        var evens = userArray.filter( ((e) => e%2 === 0 ));
        var odds = userArray.filter( (e) => e%2 > 0);
        this.setState({
            evenArray: evens,
            oddArray: odds
        })
    }

    render() {
        let { evenArray, oddArray, userInput } = this.state;

        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" placeholder="Enter array of numbers..."
                onChange={ ( e ) => this.handleUserInput( e.target.value )}
                />

                <button className="confirmationButton" onClick={ () => this.assignEvenAndOdds(userInput) }>Split</button>
                
                <span className="resultsBox">
                    Evens: { JSON.stringify(evenArray) }

                </span>
                <span className="resultsBox">
                    Odds: { JSON.stringify(oddArray)}

                </span>
            </div>
        )
    }
}

export default EvenAndOdd;