import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import axios from 'axios'


const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email:"",
    password:"",
  });
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!values.email || !values.password){
      alert('입력값을 확인해주세요.')
      return;
    }
    axios.post('http://localhost:8080/login', values).then((res)=>{
     if(res.status ===201){
      navigate('/');

     }else {
      alert('로그인에 실패했습니다.');
     }
    })
    .catch((error) => (console.log(error)));
  };
  return (
    <div>
      <h2>Sign-In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">
            <strong>Email</strong>
          </label>
          <input
            type="email"
            placeholder="Enter Your Email..."
            name="email"
            className="form-control"
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="password">
            <strong>Password</strong>
          </label>
          <input
            type="password"
            placeholder="Enter Your Password..."
            name="password"
            className="form-control"
            onChange={(e) => setValues({ ...values, password: e.target.value })}
          />
        </div>
       
        <button type="submit" className="btn">
          Sign In
        </button>
        <p>Agree to our Terms and Policies</p>
        <Link to="/register">Create Account</Link>
      </form>

    </div>
  )
}

export default Login