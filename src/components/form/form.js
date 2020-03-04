import React,{Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props)
            this.state = {
                email: '',
                username: '',
                Password: '',
            }
    }
    handleDataChange = (event) => {
        // this.setState({emial:event.target.value})
        // this.setState({username:event.target.value})
        // this.setState({password:event.target.value})
        this.setState({[event.target.id]:event.target.value})
        console.log('no props',this.state.email)
    }
    handleSubmit = (e) => {
        e.preventDefault()
        if(!this.state.email && !this.state.username && !this.state.password) {
            return null;
        } 
    }
    render() {
        console.log("my object",this.state.email)
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Email</label> <br /><br />
                    <input type="text" onChange={this.handleDataChange} id="email" /> <br /><br />
                    <label>Username</label> <br /><br />
                    <input type="text" onChange={this.handleDataChange} id="username" />  <br /><br />
                    <label>Password</label> <br /><br />
                    <input type="text" onChange={this.handleDataChange} id="password" /> <br /><br />
                    <input type="submit" placeholder="click me"  />
                </form>
            </div>
        )
    }
}
export default Form

