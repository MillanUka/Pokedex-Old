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
                    <h3>{"Name: " + pokemon.name}
                        <img src={"images/" + pokemon.id + "-" + pokemon.name.toLowerCase() + ".jpg"} alt={"image of a " + pokemon.name.toLowerCase()} width="250px" height="250px" align="right"></img>
                    </h3>
                    <h3>{"Type: "}{pokemon.formatType()}</h3>
                    <h3>{"Species: " + pokemon.species + " Pokemon"}
                    </h3>
                    <h3>{"Height: " + pokemon.height}</h3>
                    <h3>{"Weight: " + pokemon.weight}</h3>
                    <div className="Abilities"><h3>{"Abilities: "}{pokemon.formatAbilities()}</h3></div>
                    <h3>{"Stats: "}{pokemon.formatStats()}</h3>
                    <h3>{"Description: "}<br></br><br></br>{pokemon.desc}</h3>
                </div>
            </React.Fragment>
        );
    }


    componentDidMount() { }
}

export default PokemonDisplay