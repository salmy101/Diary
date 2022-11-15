import React, {useState} from "react";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";


async function loginUser(credentials) {
  return fetch('http://localhost:5000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }
 


export default function Login({ setToken }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

   const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password
    });
    setToken(token);
    // navigate("/show")
  }



  return (
    <form onSubmit={handleSubmit}>
      <h1>Please Log In</h1>

      <div class="mb-3 mt-5">
        <label class="form-label">Email address</label>
        <input type="email" class="form-control" onChange={e => setEmail(e.target.value)}/>
      </div>

      <div class="mb-3">
        <label class="form-label">Password</label>
        <input type="password" class="form-control" onChange={e => setPassword(e.target.value)}/>
      </div>

      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}