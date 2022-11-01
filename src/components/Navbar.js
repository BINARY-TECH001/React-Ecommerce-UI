import React from 'react'

const Navbar = () => {
  return (

    <div className='container'>
        <div className='wrapper'>

            <div className='left'>
                <span>EN</span>
                <div className='searchCon'>
                    <input className='inputBox'/>
                    <i className='bx bx-search'></i>
                </div>
            </div>

            <div className='center'>
                <h1> BINARY.</h1>
            </div>

            <div className='right'>
                <div className='menuItem'>LOGIN</div>
                <div className='menuItem'>SIGN UP</div>
                <div className='menuItem'>
                <i className="bx bx-notification" />
                <i className='bx bx-cart'/>
               
                </div>
            </div>
        </div>

        
    </div>
  )
}

export default Navbar
