import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import {addTodo} from '../actions';
import axios from 'axios';
import VisibleTodoList from '../containers/VisibleTodoList'
import './App.css';

class App extends React.Component {
	componentDidMount() {
		let {store} = this.props;

		axios.get(`./todos.json`).then(res => {
			console.log(13, res.data);
			// let todos = JSON.parse(res.data);
			let todos = res.data.todos;

			if(todos.length>0){
				todos.map((elem)=>{
					let desc = elem.desc;
					store.dispatch(addTodo(desc));

					return desc;
				});
			}else{
				store.dispatch(addTodo("起床"));
				store.dispatch(addTodo("洗漱"));
			}
		}).catch(function (error) {
			store.dispatch(addTodo("起床"));
			store.dispatch(addTodo("洗漱"));
		});
	}

	render(){
		return (
			<div>
				<AddTodo />
				<VisibleTodoList />
				<Footer />
			</div>
		);
	}
}

export default App

