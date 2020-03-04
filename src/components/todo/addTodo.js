import React,{Component} from 'react';
import TodoList from './todoList';

class AddTodo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newTodo: ''
        }
        }
    handleChange = (e) => {
        // console.log(this.state)
        this.setState({newTodo: e.target.value})
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add a new todo</label>
                    <input type="text" onChange={this.handleChange} style={{margin:'3%',width:'900%'}} />
                </form>
            </div>
        )
    }  
    }
export default AddTodo;