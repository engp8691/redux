import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import { VisibilityFilters } from '../actions'

const Todo = ({ onClick, completed, text }) => (
	<li
		onClick={onClick}
		style={{
			textDecoration: completed ? 'line-through' : 'none'
		}}
	>
		{text}
	</li>
)

const VisibleTodoList = ({ todos, toggleTodo }) => (
	<ul>
		{todos.map(todo =>
			<Todo
				key={todo.id}
				{...todo}
				onClick={() => toggleTodo(todo.id)}
			/>
		)}
	</ul>
)

// Auxiliary function
const getVisibleTodos = (todos, filter) => {
	switch (filter) {
		case VisibilityFilters.SHOW_ALL:
			return todos
		case VisibilityFilters.SHOW_COMPLETED:
			return todos.filter(t => t.completed)
		case VisibilityFilters.SHOW_ACTIVE:
			return todos.filter(t => !t.completed)
		default:
			throw new Error('Unknown filter: ' + filter)
	}
}

const mapStateToProps = state => ({
	todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
	toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(VisibleTodoList)

