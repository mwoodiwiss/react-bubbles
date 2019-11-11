import React, { useState } from "react";
import axios from 'axios';


const Login = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/login", credentials)
      .then(res => {
        console.log(res.data)
        localStorage.setItem('token', res.data.payload)
        props.history.push('/BubblePage');
      });
  };

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className='login'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={credentials.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button type='submit' >Log in</button>
      </form>
    </div>
  );
};

export default Login;
