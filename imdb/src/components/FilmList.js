import React, { Component } from 'react';
import Film from './Film.js';

class FilmList extends Component {

    render() {

        //Create an array of Comment components from the data collection
        const filmsList = this.props.filmBase.map((film, index) => {
            return <Film
                key={index}
                director={film.director}
                title={film.title}>
            </Film>
        })
        return (
            <div> { filmsList } </div>
        )

    }

}
export default FilmList;