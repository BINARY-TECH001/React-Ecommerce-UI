import React from 'react'
import image1 from '../assets/img1.jpg'

const Product = ({item}) => {
  return (
    <div className='productCon'>
      <div className='circle'></div>
      <img src={image1} alt="Not Found" className="image"/>

      <div className='infoCon'>
        <div className='icons'>
        <i className='bx bx-cart'></i>
        </div>

        <div className='icons'>
        <i className='bx bx-search'></i>
        </div>

        <div className='icons'>
        <i className='bx bx-heart'></i>
        </div>

      </div>
    </div>
  )
}

export default Product
