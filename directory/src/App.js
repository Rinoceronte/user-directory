import './App.css';
import data from './data.js';
import React, {Component} from 'react';
import Card from './Card';
import Nav from './Nav';
import Edit from './Edit';

class App extends Component {
  constructor(){
    super();

    this.state = {
      directory: data,
      index: 0,
      isHidden: true,
      newUser: false
    };

    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
    this.nextt = this.nextt.bind(this);
    this.edit = this.edit.bind(this);
    this.createNewUser = this.createNewUser.bind(this);
    this.delete = this.delete.bind(this);
    this.editUser = this.editUser.bind(this);
  }

  previous(){
    let newIndex = this.state.index - 1;
    if(newIndex < 0 )
    {
      this.setState({
        index: this.state.directory.length-1
      })
    }
    else {
      this.setState({
        index: newIndex
      })
    }
  }

  nextt(){
    let newIndex = this.state.index + 1;
    if(newIndex >= this.state.directory.length)
    {
      this.setState({
        index: 0
      })
    }
    else {
      this.setState({
        index: newIndex
      })
    }
  }

  edit(user){
    let index = this.state.directory.findIndex(d => d.id === user.id);
    // console.log(user);
    if(index === -1){
      this.setState({
        isHidden: true,
        directory: [...this.state.directory, user]
      })
    }
    else {
      let newDir = this.state.directory.slice();
      newDir.splice(index, 1, user);
      // console.log(newDir);
      this.setState({
        isHidden: true,
        directory: newDir
      });
    }
  }

  editUser(){
    this.setState({
      isHidden: !this.state.isHidden,
      newUser: false
    });
  }

  createNewUser(){
    this.setState({
      isHidden: !this.state.isHidden,
      newUser: true
    });
  }

  delete(){

    let newUsers = this.state.directory.slice();
    newUsers.splice(this.state.index, 1);
    let newIndex = this.state.index - 1;
    if(newIndex < 0){ newIndex = 0;}
    this.setState({
      directory: newUsers,
      index: newIndex
    })
  }
  


  render() {
    let lastId = 0
    for(let i = 0; i < this.state.directory.length; i++)
    {
      
      if(this.state.directory[i].id > lastId){ lastId = this.state.directory[i].id}
      
    }
  
    return (
    <div className="App">
      <header><h1>Home</h1></header>
      <div className="content">
        <Card user={this.state.directory[this.state.index]} _index={this.state.index} cards={this.state.directory.length} />
        <Nav prev={this.previous} next={this.nextt} />
        <div id="editing">
          <button onClick={this.delete}>Delete</button>
          <button onClick={this.editUser}>Edit</button>
          <button onClick={this.createNewUser}>New</button>
        </div>
        {!this.state.isHidden && <Edit user={this.state.directory[this.state.index]} edit={this.edit} newUser={this.state.newUser} lastId={lastId}/>}
      </div>
    </div>
    );
  }

  next(){
    let newIndex = this.state.index + 1;
    let randomIndex = Math.floor(Math.random() * this.state.directory.length)
    let decision = Math.floor(Math.random() * 100)
    if(decision < Math.floor(Math.random() * 100)){
    if(newIndex >= this.state.directory.length)
    {
      this.setState({
        index: 0
      })
    }
    else {
      this.setState({
        index: newIndex
      })
    }
  }
  else{
    this.setState({
      index: randomIndex
    })
  }
  }
}

export default App;
