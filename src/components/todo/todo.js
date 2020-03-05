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
            todos: [
                {id:1, title: 'Repair my Phones charging port', status: true},
                {id:2, title: 'Buy airtel mifi', status: true},
                {id:3, title: 'Buy insence', status: true},
                {id:4, title: 'Give crucifix in church', status: true},
                {id:5, title: 'Go for saturday work', status: true},
            ]
        }  
    }

    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => {

            console.log(response)
        })
    }
    
    componentDidUpdate(preProps, prevState) {
        console.log('component updated');  
    }

    deleteTodo = (id) =>  {
        // console.log(id)  
    const deleteMyTodos = this.state.myTodos.filter(todo => {
    return todo.id !== id });
    // console.log(deleteMyTodos)
    this.setState({myTodos: deleteMyTodos})
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