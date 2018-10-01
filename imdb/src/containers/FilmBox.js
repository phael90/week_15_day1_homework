import React, { Component } from 'react';
import FilmList from '../components/FilmList.js';

class FilmBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filmBase: [
                { director: "Ridley Scott", title: "Gladiator" },
                { director: "Steven Spielberg", title: "Jurasic Park" }
            ]
        }
    }
    render() {
        return <FilmList filmBase={this.state.filmBase} />
    }
}

export default FilmBox;