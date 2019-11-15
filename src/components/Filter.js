import React, { Component } from 'react';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.container = React.createRef();
        this.state = {
            showDropdown: false
        };

        this.sortByHeight = this.sortByHeight.bind(this);
        this.sortByWeight = this.sortByWeight.bind(this);
        this.sortByName = this.sortByName.bind(this);
        this.sortByID = this.sortByID.bind(this);
    }

    render() {
        return (
            <div className="filter">
                <button type="button" className="DropdownButton" onClick={this.handleButtonClick}>
                    Sort By
                </button>
                {this.state.showDropdown && (
                    <div className="dropdown">
                        <ul>
                            <button className="filterButton" onClick={this.sortByHeight}><li>Height</li></button>
                            <br></br>
                            <button className="filterButton" onClick={this.sortByWeight}><li>Weight</li></button>
                            <br></br>
                            <button className="filterButton" onClick={this.sortByName}><li>Name</li></button>
                            <br></br>
                            <button className="filterButton" onClick={this.sortByID}><li>ID</li></button>
                        </ul>
                    </div>
                )}
            </div>
        )
    }

    sortByHeight() {
        const { pokemonList, ListComponent } = this.props;
        pokemonList.sort(this.compareHeight);
        ListComponent.setState({ displayMode: ListComponent.state.displayMode, selectedPokemon: null });
    }

    sortByWeight() {
        const { pokemonList, ListComponent } = this.props;
        pokemonList.sort(this.compareWeight);
        ListComponent.setState({ displayMode: ListComponent.state.displayMode, selectedPokemon: null });
    }

    sortByName() {
        const { pokemonList, ListComponent } = this.props;
        pokemonList.sort(this.compareName);
        ListComponent.setState({ displayMode: ListComponent.state.displayMode, selectedPokemon: null });
    }

    sortByID() {
        const { pokemonList, ListComponent } = this.props;
        pokemonList.sort(this.compareID);
        ListComponent.setState({ displayMode: ListComponent.state.displayMode, selectedPokemon: null });
    }

    compareHeight(a, b) {
        if (a.height > b.height) {
            return -1;
        }
        if (a.height < b.height) {
            return 1;
        }
        return 0;
    }

    compareWeight(a, b) {
        if (a.weight > b.weight) {
            return -1;
        }
        if (a.weight < b.weight) {
            return 1;
        }
        return 0;

    }

    compareName(a, b) {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    }

    compareID(a, b) {
        if (a.id < b.id) {
            return -1;
        }
        if (a.id > b.id) {
            return 1;
        }
        return 0;
    }

    //Handles button click. Dorp downs the dropdown
    handleButtonClick = () => {
        this.setState(state => {
            return { showDropdown: !this.state.showDropdown };
        });
    }
}
export default Filter;