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
                    <div style={{width: '40vw', margin: '5% auto',justifyContent: 'center'}}>
                        <input style={{width:'90%'}} type="text" placeholder="What will you do today?" onChange={this.handleChange}  />
                        <span style={{backgroundColor:'#4d4d33'}}>Add</span>
                    </div>
                </form>
            </div>
        )
    }  
    }
export default AddTodo;