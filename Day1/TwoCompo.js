import React, { Component } from "react";

class New extends Component
{
    render()
    {
        const {name,age}=this.props;
        return(
            <div>
                <h2>My Name is {name} and my age is {age}</h2>
                <New1 company="I-exceed"/>
               
            </div>
        )
    }
}
export default New;
class New1 extends Component
{
    render()
    {
        const {company}=this.props;
        return(
            <div>
                <h2>I'm Working in {company} </h2>
                

            </div>
        )
    }
}
