import React, { Component } from 'react';
class PokemonDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        const { pokemon } = this.props;

        return (
            <React.Fragment>
                <div className="display" align="center">
                    <h3>{"#" + pokemon.id}</h3>
                    <h3>{"Name: " + pokemon.name}</h3>
                    <h3>{"Type: "}{pokemon.formatType()}</h3>
                    <h3>{"Species: " + pokemon.species + " Pokemon"}</h3>
                    <h3>{"Height: " + pokemon.height}</h3>
                    <h3>{"Weight: " + pokemon.weight}</h3>
                    <div className="Abilities"><h3>{"Abilities: "}{pokemon.formatAbilities()}</h3></div>
                    <h3>{"Stats: " + pokemon.stats}</h3>
                    <h3>{"Description: " + pokemon.desc}</h3>
                </div>
            </React.Fragment>
        );
    }


    componentDidMount() { }
}

export default PokemonDisplay