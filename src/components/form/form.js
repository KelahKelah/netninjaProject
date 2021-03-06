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
    handleDataChange = (e) => {
        // this.setState({email:event.target.value})
        // this.setState({username:event.target.value})
        // this.setState({password:event.target.value})
        this.setState({[e.target.id]:e.target.value})
        console.log('no props',this.state.email)
    }
    handleSubmit = (e) => {
        e.preventDefault()
        if(!this.state.email && !this.state.username && !this.state.password) {
            return null;
        } 
    }
    render() {
        // console.log("my object",this.state.email)
        return(
            <div style={{ border: '2px solid #4d4d33', margin:'10% 30%', backgroundColor:'#f8f8f8'}}>
                <form style={{padding: '20%'}} onSubmit={this.handleSubmit}>
                    <h3>Fill your details to Contact us</h3>
                    <label>Email</label> <br /><br />
                    <input type="text" onChange={this.handleDataChange} id="email" /> <br /><br />
                    <label>Username</label> <br /><br />
                    <input type="text" onChange={this.handleDataChange} id="username" />  <br /><br />
                    <label>Password</label> <br /><br />
                    <input type="text" onChange={this.handleDataChange} id="password" /> <br /><br />
                    <label>select Gender:</label>
                    {/* <select value={this.state.color} onChange={this.handleSelectChange}>
                        <option></option>
                        <option value="blue">Male</option>
                        <option value="red">Female</option>
                    </select> */} <br /><br />
                    <input type="submit" placeholder="click me"  />
                </form>
            </div>
        )
    }
}

export default Form;
