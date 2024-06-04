import React, { Component } from 'react';
 class SetButton extends Component
 {
    constructor()
    {
        super()
        this.state=
        {
            msg:'Im Harish'
            
        }
    }
    changemessage()
    {
        this.setState(
            {
                msg:'From Tiruppur'
            }
        )
    }
    render()
    {
        return(
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={()=>this.changemessage()}>click</button>
            </div>
        )
    }
 }
export default SetButton