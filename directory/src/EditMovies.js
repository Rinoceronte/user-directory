import React, {Component} from 'react';

export default class EditMovies extends Component{
    constructor(props){
        super(props);

        this.state = {
            movies: props.movies,
        }

        this.addMovie = this.addMovie.bind(this);
        this.deleteMovie = this.deleteMovie.bind(this);
        this.saveMovie = this.saveMovie.bind(this);
        this.saveList = this.saveList.bind(this);
    }

    saveList(e){
        e.preventDefault();
        this.props.save(this.state.movies);
    }

    addMovie(e){
        e.preventDefault();
        this.setState({
            movies: [...this.state.movies, '']
        })
    }

    saveMovie(i, e){
        e.preventDefault();
        
    }

    deleteMovie(i, e){
        e.preventDefault();
        let newList = this.state.movies.slice();
        newList.splice(i, 1);
        this.setState({
            movies: newList
        });
    }

    handleMovieListChange(index, e) {
        let movies = this.state.movies.slice();
        movies[index] = e.target.value;
        this.setState({movies: movies});
    }

    render(){
        // <button onClick={e => this.saveMovie({i}, e)}>Save</button>
        let list = this.state.movies.map((m, i) => <li><input type="text" key={`movie-${i}`} value={m} onChange={this.handleMovieListChange.bind(this, i)} /><button onClick={e => this.deleteMovie({i}, e)} key={`delete-${i}`}>Delete</button></li>);
        return(
            <div>
                {list}
                <button onClick={e => this.addMovie(e)}>Add</button><button onClick={e => this.saveList(e)}>Save List</button>
            </div>
        );
    }
}