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

    handleChange(e) {
        const { pokemonList, fullList, ListComponent } = this.props;

        if (e.target.value === "") {
            console.log("The input is empty")
            copyList(fullList,  pokemonList);
            if (ListComponent.state != null) {
                ListComponent.setState({ displayMode: ListComponent.state.displayMode, selectedPokemon: null });
            }
            return;
        }

        emptyList(pokemonList);

        fullList.forEach(element => {
            if (element.name.toLowerCase().includes(e.target.value.toLowerCase())) {
                pokemonList.push(element);
            }

        });

        if (ListComponent.state != null) {
            ListComponent.setState({ displayMode: ListComponent.state.displayMode, selectedPokemon: null });
        }
        this.setState({ searchInput: this.state.searchInput + e.target.value });

    }
}



export default SearchBar;