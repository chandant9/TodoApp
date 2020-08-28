import React from 'react'
import App from './App.css'

function Todolist(props) {
	const displayStyle = {
		fontType: "italic",
		color: "#cdcdcd",
		textDecoration: "line-through"
	}
	return (
		<div className = 'item-list'>
			<input type="checkbox" 
			checked = {props.todosData.completed}
			onChange = {() => props.handleChange(props.todosData.id)}
		/>
			<h2 style = {props.todosData.completed ? displayStyle : null}>{props.todosData.text}</h2>
		</div>
	)
}

export default Todolist