import React, { Component } from 'react';

class Film extends Component {

    render() {
        return(
            <div>
                <h3>{this.props.director}</h3>
                <p>{this.props.title}</p>
            </div>
        )
    }
}
export default Film;