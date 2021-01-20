import React, {Component} from 'react';
import EditMovies from './EditMovies';

export default class Edit extends Component{
    constructor(props){
        super(props);

        if(props.newUser){
            let newId = props.lastId+1;
            this.state={
                id: newId,
                name: {first: '', last: ''},
                city: '',
                country: '',
                employer: '',
                title: '',
                favoriteMovies: [],
                isNew: props.newUser
            }
        }
        else {
            this.state={
                id: props.user.id,
                name: {first: props.user.name.first, last: props.user.name.last},
                city: props.user.city,
                country: props.user.country,
                employer: props.user.employer,
                title: props.user.title,
                favoriteMovies: props.user.favoriteMovies,
                isNew: props.newUser
            }
        }

        this.updateUser = this.updateUser.bind(this);
        this.saveMovies = this.saveMovies.bind(this);
    }

    changeFirstName(val){
        this.setState({name: { first: val, last: this.state.name.last}});
    }

    changeLastName(val){
        this.setState({name: { first: this.state.name.first, last: val}});
    }

    changeCity(val){
        this.setState({city: val});
    }

    changeCountry(val){
        this.setState({country: val});
    }

    changeEmployer(val) {
        this.setState({employer: val});
    }

    changeTitle(val){
        this.setState({title: val});
    }

    updateUser(){
        let user = {id: this.state.id, name: {first: this.state.name.first, last: this.state.name.last}, city: this.state.city, country: this.state.country, employer: this.state.employer, title: this.state.title, favoriteMovies: this.state.favoriteMovies}
        this.props.edit(user);
    }

    saveMovies(val){
        this.setState({
            favoriteMovies: val
        });
    }
    
    
    render(){
        return(
            <div>
                <form id="editForm">
                    <section><label>First Name: </label><input type="text" id="firstName" placeholder='First Name' onChange={e => this.changeFirstName(e.target.value)} value={this.state.name.first}/></section>
                    <section><label>Last Name: </label><input type="text" id="lastName" placeholder="Last Name" onChange={e => this.changeLastName(e.target.value)} value={this.state.name.last}/></section>
                    <section><label>City: </label><input type="text" id='city' placeholder="City" onChange={e => this.changeCity(e.target.value)} value={this.state.city}/></section>
                    <section><label>Country: </label><input type="text" id="country" placehold="Country" onChange={e => this.changeCountry(e.target.value)} value={this.state.country}/></section>
                    <section><label>Employer: </label><input type="text" id="employer" placeholder="Employer" onChange={e => this.changeEmployer(e.target.value)} value={this.state.employer}/></section>
                    <section><label>Title: </label><input type="text" id="title" placeholder="Title" onChange={e => this.changeTitle(e.target.value)} value={this.state.title}/></section>
                    <section><label>Favorite Movies: </label><EditMovies movies={this.state.favoriteMovies} save={this.saveMovies}/></section>
                    <br />
                    <button onClick={this.updateUser}>{this.props.newUser ? 'Add' : 'Edit'}</button>
                </form>
            </div>
        );
    }
}