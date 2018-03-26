import React, { Component } from 'react';

class FilterObject extends Component {
    constructor() {
        super();

        this.state = {
            unFilteredArray: [
                {name: 'Vin', female: true, background: 'Skaa', allomancy: 'Mistborn', favorite: 'Ballgown'},
                {name: 'Dockson', male: true, background: 'Skaa'},
                {name: 'Elend', male: true, background: 'Noble', familyHeir: true}
            ],
            userInput: '',
            filteredArray: []
        }
    }

    handleInput( e ) {
        this.setState({ userInput: e })
    }

    filter ( property ) {
        var characters = this.state.unFilteredArray;

        var filteredChars = [];
        for(let i = 0; i < characters.length; i++){
            if(characters[i].hasOwnProperty(property)){
                filteredChars.push(characters[i]);
            }
        }
        this.setState({
            filteredArray: filteredChars
        })

    }

    render() {
        let { unFilteredArray, userInput, filteredArray } = this.state;


        return (
            <div className="puzzleBox FilterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: { JSON.stringify(unFilteredArray, null, 10) }</span>
                <input className="inputLine" onChange={ ( e ) => this.handleInput( e.target.value ) }/>
                <button className="confirmationButton" onClick={ () => this.filter( userInput ) }>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: { JSON.stringify(filteredArray, null, 10)}</span>
            </div>
        )
    }
}

export default FilterObject;