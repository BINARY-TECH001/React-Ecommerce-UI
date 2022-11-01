import React from 'react'

const Register = () => {
  return (
    <div className='registerCon'> 
      <div className='wrapper'>
        <h1 className='title'>CREATE AN ACCOUNT</h1>
        <form>
            <input type="text" placeholder="First Name"/>
            <input type="text" placeholder="Last Name"/>
            <input type="text" placeholder=" Username"/>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <input type="password" placeholder="Confirm Password" />

            <span className="agreement">
                By Creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
            </span>
            <button>CREATE</button>
        </form>
      </div>
    </div>
  )
}

export default Register
