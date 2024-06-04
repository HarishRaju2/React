import React, { Component } from 'react';

class Frag_bind extends Component {
    constructor() 
    {
        super();
        this.state = {
            com: "I-exceed"
        };
        this.change = this.change.bind(this); 
    }

    change() 
    {
        this.setState({ 
            place: "Salem"
        });
    }

    render() 
    {
        return (
            <>
                <h1>{this.state.com}</h1> 
                <button onClick={this.change}>Check</button>
            </>
        );
    }
}

export default Frag_bind;
