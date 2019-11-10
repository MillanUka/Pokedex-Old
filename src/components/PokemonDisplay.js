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
                    <h5>{"#" + pokemon.id}</h5>
                    <h5>{"Name: " + pokemon.name}
                        <img src={"images/" + pokemon.id + "-" + pokemon.name.toLowerCase() + ".jpg"} alt={"image of a " + pokemon.name.toLowerCase()} width="250px" height="250px" align="right" border-style="dashed"></img>
                    </h5>
                    <h5>{"Type: "}{pokemon.formatType()}</h5>
                    <h5>{"Species: " + pokemon.species + " Pokemon"}
                    </h5>
                    <h5>{"Height: " + pokemon.height}</h5>
                    <h5>{"Weight: " + pokemon.weight}</h5>
                    <div className="Abilities"><h5>{"Abilities: "}{pokemon.formatAbilities()}</h5></div>
                    <h5>{"Stats: "}{pokemon.formatStats()}</h5>
                    <h5>{"Description: "}<br></br><br></br>{pokemon.desc}</h5>
                </div>
            </React.Fragment>
        );
    }


    componentDidMount() { }
}

export default PokemonDisplay