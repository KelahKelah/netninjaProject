import React,{Component} from 'react';
import TodoList from './todoList';
import AddTodo from '../todo/addTodo';

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            myTodos: [
                {id:1, title: 'Repair my Phones charging port', status: true},
                {id:2, title: 'Buy airtel mifi', status: true},
                {id:3, title: 'Buy insence', status: true},
                {id:3, title: 'Give crucifix in church', status: true},
                {id:3, title: 'Go for saturday work', status: true},
            ]
        }  
    }
    deleteTodo = (id) =>  {
        // console.log(id)  
    const deleteMyTodos = this.state.myTodos.filter(todo => {
    return todo.id !== id });
    this.setState({todos: deleteMyTodos})
    }
    addTodo = (event) => {
        // console.log(id)
    }
    componentDidMount() {
        console.log('component mouted')
    }
    componentDidUpdate(preProps, prevState) {
        console.log('component updated');  
    }

    render() {
        //  console.log(this.state.myTodos)
        return(
            <div>
                <AddTodo addTodo={this.addTodo} />
                <TodoList myTodos={this.state.myTodos} deleteTodo={this.deleteTodo} />
            </div>
        )
    }
    
}
export default Todo;


