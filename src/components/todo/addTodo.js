import React,{Component} from 'react';
import TodoList from './todoList';

class AddTodo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
        }
    handleChange = (e) => {
        // console.log(this.state)
        this.setState({title: e.target.value})
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state)
        // console.log(this.state)
    }
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                    <label>Add a new todo</label>
                    </div>
                    <input type="text" onChange={this.handleChange} style={{margin:'3%', width:'130%', display: 'flex', justifyContent: 'center'}} />

                </form>
            </div>
        )
    }  
    }
export default AddTodo;