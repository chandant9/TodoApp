import React from 'react';
import Todolist from './Todolist'
import todosData from './TodosData'

class App extends React.Component{
  constructor() {
    super()
    this.state = {
      todos: todosData,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if(todo.id ===id){
          return {
            ...todo,
            completed:!todo.completed  
          }
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })

  }
  render(){
    const todoitems = this.state.todos.map(item => <Todolist key={item.id} todosData = {item} handleChange = {this.handleChange} />)
    const todoStyle = {
      borderStyle: "2px solid grey",
      color: "#762"
    }
    return(
      <div style = {todoStyle} className= "head">
        <h1>Buy list</h1> 
        {todoitems} 
      </div>
      )
  }
}

export default App;
