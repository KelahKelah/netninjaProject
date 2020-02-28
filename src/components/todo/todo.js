import React,{Component} from 'react';
import TodoList from './todoList';

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            myTodos: [
                {id:1, title: 'Repair my Phones charging port', status: true},
                {id:2, title: 'Buy airtel mifi', status: true},
                {id:3, title: 'Buy insence', status: true},
            ]
        }
    }
    render() {
         console.log(this.state.myTodos)
        return(
            <div>
                <TodoList myTodos={this.state.myTodos} />
            </div>
        )
    }
    
}
export default Todo;