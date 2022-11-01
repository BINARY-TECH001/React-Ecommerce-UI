import React, { useState } from 'react'
import image1 from '../assets/img1.jpg'
import { sliderItems } from './data'


const style = {
    backgroundColor : "rgb(233, 175, 108)"
}

const Slider = () => {

  return (
    <div className='sliderCon'>
      <div className='arrow' direction="left">
        <i className='bx bx-chevron-left left-arrow'/>
      </div>

      <div className='slideWrapper' slideIndex={sliderItems}>

     
        <div className='slide' style={style}>
        <div className='imageCon'>
            <img src={image1} alt='Not Found' />
        </div>

        <div className='infoCon'>
            <h1 className='title'>SUMMER SALE</h1>
            <p className="desc">DONT'T COMPROMISE ON STYLE!GET FLAT 30% OFF FOR NEW ARRIVALS</p>
            <button className='btn'>SHOP NOW</button>
        </div>
        </div>


      </div>

      <div className='arrow' direction="right">
        <i className='bx bx-chevron-right right-arrow' />
      </div>
    </div>
  )
}


export default Slider
