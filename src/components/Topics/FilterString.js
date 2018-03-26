import React, { Component } from 'react';

export default class FilterString extends Component {
    constructor() {
        super();

        this.state = {
            unFilteredArray: [
                'bombs',
                'ropes',
                'whip',
                'spikey boots',
                'climbing glove',
                'catcher\'s mit',
                'jetpack',
                'mattock',
                'shotgun',
                'freeze ray',
                'boomerang',
                'golden idol'
            ],
            userInput: '',
            filteredArray: []
        }
    }

    handleInput( e ) {
        this.setState({
            userInput: e
        })
    }

    filter( input ) {
        let originalArray = this.state.unFilteredArray;
        let newArray = [];
        for( let i = 0; i < originalArray.length; i++) {
            if( originalArray[i].includes( input ) ) {
                newArray.push( originalArray[i] )
            }
        }
        console.log(originalArray);
        console.log(newArray);
        this.setState({
            filteredArray: newArray
        })

    }

    render() {

        let { unFilteredArray, userInput, filteredArray } = this.state;

        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Spelunky Items: { JSON.stringify(unFilteredArray, null, 10) }</span>
                <input className="inputLine" onChange={ ( e ) => this.handleInput( e.target.value ) }/>
                <button className="confirmationButton" onClick={ () => this.filter( userInput ) }>Filter</button>
                <span className="resultsBox filterStringRB">
                    Filtered Spelunky Items: { JSON.stringify(filteredArray, null, 10) }
                </span>

            </div>
        )
    }
}