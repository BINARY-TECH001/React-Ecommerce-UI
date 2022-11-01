import React from 'react'
import Announcement from '../components/Announcement'
import Copywrite from '../components/Copywrite'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import  image  from '../assets/img3.jpg';
import secondImage from '../assets/img4.jpg';

const Cart = () => {
  return (
    <div className='cartCon'>
      <Navbar />
      <Announcement />
      <div className='cartWrapper'>
        <h1 className='title'>YOUR BAG</h1>
        <div className='top'>
            <button>CONTINUE SHOPPING</button>  
            <div className='topTexts'>
                <span className='topText'>Shopping Bag(2)</span>
                <span className='topText'>Your WishList(0)</span>
            </div>
            <button className='btn1'>CHECKOUT NOW</button>  
        </div>

        <div className='bottom'>
            <div className='info'>

                <div className='product'>
                    <div className='productDetail'>
                        <img src={image} />
                    <div className='details'>
                        <span className='productName'><b>Product:</b> Samsung Fold 12</span>
                        <span className='productId'><b>ID:</b> 98573210</span>
                        <div className='productColor'></div>
                        <span className='productSize'><b>Size:</b> 37.5</span>
                    </div>
                    </div>
                    <div className='priceDetail'>
                        <div className='productAmountCon'>
                            <i className='bx bx-add'>+</i>
                            <div className='productAmount'> 2 </div>
                            <i className='bx bx-minus'> - </i>
                        </div>

                        <div className='productPrice'> #45,000 </div>
                    </div>
                </div>


            <hr/>

                <div className='product'>
                    <div className='productDetail'>
                        <img src={secondImage} />
                    <div className='details'>
                        <span className='productName'><b>Product:</b> Samsung</span>
                        <span className='productId'><b>ID:</b> 98573311</span>
                        <div className='productColor'></div>
                        <span className='productSize'><b>Size:</b> 32.1</span>
                    </div>
                    </div>
                    <div className='priceDetail'>
                        <div className='productAmountCon'>
                            <i className='bx bx-add'>+</i>
                            <div className='productAmount'> 1 </div>
                            <i className='bx bx-minus'> - </i>
                        </div>

                        <div className='productPrice'> #40,000 </div>
                    </div>
                </div>
            </div>

            <div className='summary'>
                <h1 className='summaryTitle'>ORDER SUMMARY</h1>
                <div className='summaryItem'>
                    <span className='summaryItemText'>Subtotal</span>
                    <span className='summaryItemPrice'>#45,000</span>
                </div>

                <div className='summaryItem'>
                    <span className='summaryItemText'>Estimated Shipping</span>
                    <span className='summaryItemPrice'>#2,000</span>
                </div>

                <div className='summaryItem'>
                    <span className='summaryItemText'> Shipping Discount</span>
                    <span className='summaryItemPrice'>#-32.90</span>
                </div>

                <div className='summaryItem'>
                    <span className='summaryItemText total'> Total </span>
                    <span className='summaryItemPrice'>#13,465.000</span>
                </div>
            <button>CKECKOUT NOW</button>
            </div>

        </div>
      </div>
      <Footer />
      <Copywrite />
    </div>
  )
}

export default Cart
