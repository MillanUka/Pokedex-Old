import React, { Component } from 'react'
import PokemonPortrait from './PokemonPortrait';
import pokemon from "../data/pokemon.json"
import Pokemon from '../classes/Pokemon';
import SearchBar from "./SearchBar"
import PokemonDisplay from "./PokemonDisplay"
class PokemonList extends Component {

    constructor(props) {
        super(props)
        this.pokemonList = []
        this.state = {
            displayMode: false,
            selectedPokemon: null
        };
        this.init()
    }

    init() {

        this.readInFile();

    }

    readInFile() {
        for (var i = 0; i < pokemon.length; ++i) {
            var currentPokemon = pokemon[i];

            var id = currentPokemon.id
            var name = currentPokemon.name;
            var type = currentPokemon.type;
            var species = currentPokemon.species;
            var height = currentPokemon.height;
            var weight = currentPokemon.weight;
            var abilities = currentPokemon.abilities;
            var stats = currentPokemon.stats;
            var desc = currentPokemon.desc;

            var newPokemon = new Pokemon(id, name, type, species, height, weight, abilities, stats);
            newPokemon.setDesc(desc);
            console.log(newPokemon.calculateTotalStats());
            this.pokemonList.push(newPokemon);
        }
    }

    render() {

        if (!this.state.displayMode) {
            return (
                <React.Fragment>
                    <header>
                        <SearchBar />
                    </header>
                    {this.renderPortraits()}
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                <button className = "backButton" onClick={(e) => this.displayPokemon(null)}>Back</button>
                <PokemonDisplay pokemon = {this.state.selectedPokemon}/>
                </React.Fragment>
            )
        }
    }

    renderPortraits() {
        return this.pokemonList.map(({ pokemon }, index) => {
            return (
                <React.Fragment id={this.pokemonList[index].name}>
                    <button className = "portraitButton" onClick={(e) => this.displayPokemon(this.pokemonList[index])}>
                        <PokemonPortrait
                            key={index}
                            pokemon={this.pokemonList[index]}
                        />
                    </button>
                </React.Fragment>
            );
        });
    }

    displayPokemon(pokemon) {
        this.setState({ displayMode: !this.state.displayMode, selectedPokemon: pokemon })
    }
}




export default PokemonList;