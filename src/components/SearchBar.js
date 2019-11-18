import React, { Component } from 'react';
import {emptyList, copyList} from '../classes/Utils.js'

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchInput: ""
        };
    }

    render() {
        return (
            <React.Fragment>
                <input className="searchBar" onChange={(e) => {
                    this.handleChange(e);
                }
                }></input>
            </React.Fragment>
        );
    }

    /**
     * This method will handle any changes to the search
     * @param {} e 
     */
    handleChange(e) {
        const { pokemonList, fullList, ListComponent } = this.props;

        //Check if the search bar is empty
        if (e.target.value === "") {
            //If the search bar is empty then rerender the list, to show all the pokemon
            copyList(fullList,  pokemonList);
            if (ListComponent.state != null) {
                ListComponent.setState({ displayMode: ListComponent.state.displayMode, selectedPokemon: null });
            }
            return;
        }

        emptyList(pokemonList);

        //Go through the full list of pokemon an check if the user inputs matches ny of the pokemon 
        //If it oes then add it to the list
        fullList.forEach(element => {
            if (element.name.toLowerCase().includes(e.target.value.toLowerCase())) {
                pokemonList.push(element);
            }

        });

        // Render the list again to show only the search results
        if (ListComponent.state != null) {
            ListComponent.setState({ displayMode: ListComponent.state.displayMode, selectedPokemon: null });
        }

        //Update the state to include the new search input
        this.setState({ searchInput: this.state.searchInput + e.target.value });

    }
}



export default SearchBar;