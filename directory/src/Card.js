import React, { Component } from 'react';

export default class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.user.id,
            name: { first: props.user.name.first, last: props.user.name.last },
            city: props.user.city,
            country: props.user.country,
            employer: props.user.employer,
            title: props.user.title,
            favoriteMovies: props.user.favoriteMovies
        }

    }


    render() {
        let movies = <div></div>
        if (this.props.user && this.props.user.favoriteMovies) { movies = this.props.user.favoriteMovies.map((m, i) => <li key={i} className='movies'>{m}</li>) }

        return (
            this.props.user ? (<div id="card">
                <div id="left">
                    <div id="card-content">
                        <h1>{this.props.user.name && this.props.user.name.first} {this.props.user.name && this.props.user.name.last}</h1>
                        <ul>
                            <li><label>From: </label>{this.props.user.city}, {this.props.user.country}</li>
                            <li><label>Job Title: </label>{this.props.user.title}</li>
                            <li><label>Employer: </label>{this.props.user.employer}</li>
                        </ul>
                        <ol>
                            <label>Favorite Movies:</label>
                            {movies}
                        </ol>
                    </div>
                    <div id="spacer"></div>
                </div>
                <div id="right">
                    <h1>
                        {this.props._index + 1}/{this.props.cards}
                    </h1>
                </div>
            </div>) :
                (<div id="card">
                    <div id="left">
                        <div id="card-content">
                            <h1> </h1>
                            <ul>
                                <li><label>From: </label></li>
                                <li><label>Job Title: </label></li>
                                <li><label>Employer: </label></li>
                            </ul>
                            <ol>
                                <label>Favorite Movies: </label>
                            </ol>
                        </div>
                        <div id="spacer"></div>
                        <div id="right">
                            <h1>
                                {this.props._index + 1}/{this.props.cards}
                            </h1>
                        </div>
                    </div>
                </div>)
        );
    }

}
