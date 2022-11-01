import React from 'react'
import image1 from '../assets/img1.jpg'


const CategoryItem = ({items}) => {
  console.log(items.img);
  return (
    <div className='categoriesCont'>
      <img src={image1} alt='Not Found' className='image'></img>
      <div className='infoCon'>
        <h2 className='title'>{items.title}</h2>
        <button>SHOP NOW</button>
      </div>
    </div>
  )
}

export default CategoryItem
