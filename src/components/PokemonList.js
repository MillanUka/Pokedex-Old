import React, { Component } from 'react'
import PokemonPortrait from './PokemonPortrait';
import pokemon from "../data/pokemon.json"
import Pokemon from '../classes/Pokemon';
class PokemonList extends Component {

    constructor(props) {
        super(props)
        this.pokemonList = []
        this.state = {};
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
        return (
            <React.Fragment>
                {this.renderPortraits()}
            </React.Fragment>
        )
    }

    renderPortraits() {
        return this.pokemonList.map(({ pokemon }, index) => {
            return (
                <React.Fragment id={this.pokemonList[index].name}>
                    <PokemonPortrait
                        key={index}
                        pokemon={this.pokemonList[index]}
                    />
                </React.Fragment>
            );
        });
    }
}

export default PokemonList;