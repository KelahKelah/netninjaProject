import React, { useState, useEffect } from 'react';


const Login = () => {
    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')

    const handleUsernameChange = (e) => {
        setUsername({username:e.target.value})
    }
    const handlePasswordChange = (e) => {
        setPassword({password:e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    // useEffect() {

    // }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <lable>Username</lable>
                    <input type="text" id="username" onClick={handleUsernameChange} />
                </div>
                <div className="form-group">
                    <lable>Password</lable>
                    <input type="text" id="password" onClick={handlePasswordChange} />
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-primary" />
                </div>
            </form>

        </div>
    )

}
export default Login;