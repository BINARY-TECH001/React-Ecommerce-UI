import React from 'react'
import Announcement from '../components/Announcement'
import Copywrite from '../components/Copywrite'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'


const ProductList = () => {
  return (
    <div className='productListCon'>
      <Navbar />
      <Announcement />
      <h1 className='title'>PHONES</h1>
      <div className='filterCon'>
          <div className='filter filter1'>
            <span className='filterText'>Filter Products:</span>
            <select>
              <option disabled selected> Color </option>
              <option> White </option>
              <option> Black </option>
              <option> Red </option>
              <option> Yellow </option>
              <option> Green </option>
            </select>

            <select>
              <option disabled selected> Size </option>
              <option> XS </option>
              <option> S </option>
              <option> M </option>
              <option> L </option>
              <option> XL </option>
            </select>
          </div>
          <div className='filter filter2'>
          <span className='filterText'>Sort Products:</span>
          <select>
            <option selected> Newest </option>
            <option> Price (asc) </option>
            <option> Price (Desc) </option>
          </select>
          </div>
      </div>

      <Products />
      <Newsletter />
      <Footer />
      <Copywrite />

    </div>
  )
}

export default ProductList
