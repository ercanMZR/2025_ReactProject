import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const fncLogin = (evt: React.FormEvent) => {
    evt.preventDefault() // form submit cancel
    if(email === 'ali@mail.com' || password === '12345') {
      navigate('/products', { replace: true })
    }
  }
  return (
  
    <div className="centered-container">
      <div className="login-box">
        <h2><i className="fas fa-user"></i> User Login</h2>
        <form onSubmit={fncLogin}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input onChange={(evt) => setEmail(evt.target.value)} required type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input onChange={(evt) => setPassword(evt.target.value)} required type="password" className="form-control" id="exampleInputPassword1" />
          </div>

          <div className='d-flex justify-content-between'>
            <button type="submit" className="btn btn-primary">
              <i className="fas fa-sign-in-alt"></i> Login
            </button>
            <NavLink to='/register' className="btn btn-success">
              <i className="fas fa-user-plus"></i> Register
            </NavLink>
          </div>
        </form>
      </div>
    </div>
    
      
   
  )
}
export default Login