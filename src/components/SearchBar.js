import React, { Component } from 'react'
import Pokemon from '../classes/Pokemon';

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
        var { pokemonList, fullList, ListComponent } = this.props;
        
        if (e.target.value === "") {
            console.log("The input is empty")
            this.copyList(fullList,  pokemonList);
            if (ListComponent.state != null) {
                ListComponent.setState({ displayMode: ListComponent.state.displayMode, selectedPokemon: null });
            }
            return;
        }

        this.emptyList(pokemonList);

        fullList.forEach(element => {
            if (element.name.toLowerCase().includes(e.target.value.toLowerCase())) {
                console.log(element.name + " includes " + e.target.value)
                pokemonList.push(element);
            }

        });

        if (ListComponent.state != null) {
            ListComponent.setState({ displayMode: ListComponent.state.displayMode, selectedPokemon: null });
        }
        this.setState({ searchInput: this.state.searchInput + e.target.value });

    }

    emptyList(list) {
        list.length = 0;
    }

    copyList(listToCopyFrom,  listToCopyTo) {
        this.emptyList(listToCopyTo);

        listToCopyFrom.forEach(element => {
            listToCopyTo.push(element);
        });
    }
}



export default SearchBar;