import React, { Component } from 'react';

class Logout extends Component {
    constructor(props) {
        super()
        this.state = {
            logout: 'Are you sure you want to logout?'
        } 
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange() {
        this.setState({logout:'Ok! you are Logged out '})
    }
    render() {
        // console.log('yes',this.state.logout)
        return(
            <div style={{ border: '2px solid #4d4d33', margin:'10% 30%', backgroundColor:'#c2c2a3', height:'20vh', padding:'5%'}}>
                {/* <input type="submit" onClick={this.handleChange} /> */}
                <p>{this.state.logout}</p>              
        <button type="submit" onClick={this.handleChange}>Logout</button> 
            </div>
        )
    }
}

export default Logout; 