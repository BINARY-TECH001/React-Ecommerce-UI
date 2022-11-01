import React from 'react'

const Login = () => {
  return (
    <div className='registerCon'> 
    <div className='wrapper wrapper2'>
      <h1 className='title'> SIGN IN </h1>
      <form>
          <input type="text" placeholder=" Username"/>
          <input type="password" placeholder="Password"/>

          <div className='btt'>
          <button> LOGIN </button>
          <a className='link'>Forgotten Password?</a>
          <a className='link'>Create New Account</a>          
          </div>
      </form>
    </div>
  </div>
  )
}

export default Login
