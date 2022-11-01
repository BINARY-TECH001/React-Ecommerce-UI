import React from 'react'

const Footer = () => {
  return (
    <div className='footerCon'>
      
      <div className='footerLeft'>
        <h1 className='logo'>BINARY.</h1>
        <p className='desc'>There are many variattions of passages of phones available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>

      <div className='socialCon'>
        <div className='socialIcon'>
            <i className='bx bx-facebook'/>
        </div>

        <div className='socialIcon'>
            <i className='bx bx-instaagram'/>
        </div>

        <div className='socialIcon'>
            <i className='bx bx-twitter'/>
        </div>

        <div className='socialIcon'>
            <i className='bx bx-pinterest'/>
        </div>

        <div className='socialIcon'>
            <i className='bx bx-whatsapp'/>
        </div>
        
      </div>

    </div>

      <div className='footerCenter'>
        <h3 className='title'>Useful Links</h3>
        <ul>
            <li>Home</li>
            <li>Cart</li>
            <li>SamSung Phones</li>
            <li>Samsung Accessories</li>
            <li>My Account</li>
            <li>Order Tracking</li>
            <li>WishList</li>
            <li>Terms</li>
        </ul>
      </div>

      <div className='footerRight'>

        <h3 className='title'>Contact Us</h3>
        <div className='contact-item'><i className='bx bx-map'/> 12, kola Sanusi Street, Mabolaje Oyo</div>
        <div className='contact-item'><i className='bx bx-phone-call'/> (234) 905 934 3602</div>
        <div className='contact-item'><i className='bx bx-mail-send'/> rafiumubarak2019@gmail.coom</div>
        <img src='https://i.ibb.co/Qfvn4z6/payment.png' />
      </div>
    </div>

  )
}

export default Footer
