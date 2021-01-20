import React, { Component } from 'react';

export default class Nav extends Component{
    constructor(){
        super();

    }

    render(){
        return (
            <div id="nav">
                <button onClick={this.props.prev}>Previous</button>
                <button onClick={this.props.next}>Next </button>
            </div>
        );
    }
}