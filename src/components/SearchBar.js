import React, { Component } from 'react'

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
            <input className = "searchBar"></input>
            </React.Fragment>
        );
    }
}

export default SearchBar;