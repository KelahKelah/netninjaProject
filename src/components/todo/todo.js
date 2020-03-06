import React,{Component} from 'react';
import TodoList from './todoList';
import AddTodo from '../todo/addTodo';
import './todo.css';
import Axios from 'axios';

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            //chnaged object name from mytodos to todos because of the endpoint
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
    // console.log(deleteMyTodos)
    this.setState({todos: deleteMyTodos})
    }
    
    addTodo = (event) => {
        // console.log(event)
        event.id = Math.random()
        let todo = [...this.state.todos, event]
        console.log(event)
        this.setState({todos: todo})
    }
    
    render() {
        //  console.log(this.state.myTodos)
        return(
            <div className="wrap">
                <div>
                    <AddTodo addTodo={this.addTodo} />
                    {/* changed object name from mytodos to todos because of the endpoint */}
                    <TodoList myTodos={this.state.todos} deleteTodo={this.deleteTodo} />
                </div>
            </div>
        )
    }
    
}
export default Todo;