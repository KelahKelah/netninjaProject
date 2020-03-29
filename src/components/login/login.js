import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Axios from 'axios';
import { baseUrl } from '../../utils/apiCalls'

    const Login = (props) => {
    const [input, setInput] = useState({username: '', password: ''});
    const [message, setMessage] = useState({error : { message: '' , type: false }, sucess: {message : '' , type: false} });
    const [errorMessage, setErrorMessage] = useState({message: ''});

    const handleInputChange = (e) => {
        setInput({...input, [e.target.name] : e.target.value})
        console.log(input.username)
        console.log({[e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            username: input.username,
            password: input.password
        }
        console.log('the payload value', payload)

        Axios.post(`${baseUrl}/admin/login`, payload)
        .then(res => {
            console.log('response login',res);
            if(res.data.code === 200) {
                setMessage({sucess:{message: res.data.message , type: true }});
                setInput({username: '' , password: '' });
                setTimeout(() => {
                    props.history.push('/home')
                }, 3000 )
            } else {
                setErrorMessage({message: ''})
            }
        })
        .catch( (error) => {
            console.log('the error', error)
        })

    }


    return(

        <div style={{ border: '2px solid #4d4d33', margin:'10% 30%', backgroundColor:'#f8f8f8', height:'35vh', padding:'5%'}}>
            <form onSubmit={handleSubmit}>
                {}
                <div className="form-group">
                    <label>Username</label> {''}
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Username"
                        value={input.username} 
                        onChange={handleInputChange} 
                        required
                    />
                </div> 
                <div className="form-group">
                    <label>Password</label> {''}
                    <input 
                        type="text" 
                        name="password" 
                        placeholder="Username"
                        value={input.password} 
                        onChange={handleInputChange} 
                        required
                    />
                </div> 
                <div className="form-group">
                    {/* <input type="submit" value="Login" className="btn btn-primary" /> */}
                    <button style={{backgroundColor: '#4d4d33', margin: ''}} type="submit">Login</button>
                </div>
            </form>
            <Link to ="/signup">Dont have an account? Sign up</Link>

        </div>
    )

}
export default Login;