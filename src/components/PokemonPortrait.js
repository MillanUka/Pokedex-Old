import React, { Component } from 'react'
class PokemonPortrait extends Component {
    
    constructor(props) {
        super(props);
        this.state = {};
    }

    
    render() {
        const {pokemon} = this.props;
        
        console.log(pokemon)
        return (
            <React.Fragment>
            <div className="portrait">
                <h3>{pokemon.name}</h3>
                <div className="portraitImage">
                    <img src={"images/"+ pokemon.id + "-" + pokemon.name.toLowerCase() + ".jpg"} alt={"image of a " + pokemon.name.toLowerCase()} width = "130px" height = "130px"></img>
                </div>
            </div>
            </React.Fragment>
        );
    }

    componentDidMount() {
        console.log(this.state);
    }
}

export default PokemonPortrait