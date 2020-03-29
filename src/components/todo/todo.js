import React,{Component} from 'react';
import TodoList from './todoList';
import AddTodo from '../todo/addTodo';
import './todo.css';
import Axios from 'axios';
import CompletedTodo from './completedTodo';

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [ ]
        }  
    }

    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res => {
            this.setState({todos: res.data.slice(0,5)})
            // console.log(res)
        })
    }
    
    componentDidUpdate(preProps, prevState) {
        console.log('component updated');  
    }

    deleteTodo = (id) =>  {
        // console.log(id)  
    const deleteMyTodos = this.state.todos.filter(todo => {
    return todo.id !== id });
    this.setState({todos: deleteMyTodos})
    }
    
    addTodo = (event) => {
        event.id = Math.random()
        let todo = [...this.state.todos, event]
        console.log(event)
        this.setState({todos: todo})
    }

    CompletedTodo = (e) => {
        this.setState({todos: e.target.id})
    }
    render() {
        //  console.log(this.state.myTodos)
        return(
            <div>
                <AddTodo addTodo={this.addTodo} />
                <div className="wrapper">
                    <div>
                        <CompletedTodo CompletedTodo={this.CompletedTodo} />
                        <TodoList myTodos={this.state.todos} deleteTodo={this.deleteTodo} completedTodo={this.CompletedTodo} />
                    </div>
                </div>
            </div>

        )
    }
    
}
export default Todo;