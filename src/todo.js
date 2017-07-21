import React, { Component } from 'react';

export default class todo extends Component{
    constructor(){
        super()
    }

    render(){
        let {id,todo, onRemove} =  this.props
        return(
            <li>{todo} <button onClick={()=> onRemove(id)}>x</button></li>
        )
    }
}