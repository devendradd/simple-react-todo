import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDo from './todo'


class App extends Component {

  constructor(){
    super()

    this.state = {todos: [
      "Initial Todo",
      "Initial Todo 2"
    ]}

    this.todoinput = ""
  }

  addTodo(){
    console.log("here add todo clicked")
    let todoValue = this.todoinput.value;

    let newTodos = this.state.todos;
    newTodos.unshift(todoValue);

    this.setState({
      todos: newTodos
    })

    //reset value
    this.todoinput.value = ""

    //set focus to input
    this.todoinput.focus()
  }

  removeTodo(id){
    console.log("Delete the index of todo", id)
    let todos = this.state.todos.filter((todo, index)=> {
      return id != index
    })

    this.setState({
      todos: todos
    })
  }
  

  render() {
    return (
      <div>
        <h1> React Todo </h1>
        <p> Todos Count: {this.state.todos.length}</p>
        <ul>
          {this.state.todos.map((todo, index)=> {
            return(<ToDo id={index} key={index} todo={todo} onRemove={() => this.removeTodo(index)}/>)  //component
          })}
        </ul>
        <input type="text" placeholder="Enter Todo" ref ={(input) => this.todoinput = input}/>
        <button onClick={this.addTodo.bind(this)}> Add </button> 
      </div>
    );
  }
}

export default App;
