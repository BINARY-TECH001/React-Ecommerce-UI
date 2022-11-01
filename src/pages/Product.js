import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter";
import image1 from '../assets/img1.jpg';
import Copywrite from "../components/Copywrite";


const Product = () => {
  return (
    <div className="productContainer">
      <Navbar />
      <Announcement />
      <div className="productWrapper">
        <div className="imageCon">
            <img src={image1} alt="Not Found"/>
        </div>
        <div className="infoCon">-
            <h1 className="title"> Samsung galaxy S22  </h1>
            <p className="desc"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi esse qui hic similique corporis, quo rem sint nam, placeat quaerat repellat aliquid eveniet, libero minima! Exercitationem unde iure quibusdam eum. </p>
            <span> #30,000 </span>

            
            <div className="filterCon">
              <div className="filter">
                <span className="title"> Color: </span>
                <div className="filterColor red"></div>
                <div className="filterColor blue"></div>
                <div className="filterColor black"></div>
              </div>

              <div className="filter">
                <span className="title"> Size: </span>
                <select>
                  <option className="filterSizeOpt"> XS </option>
                  <option className="filterSizeOpt"> S </option>
                  <option className="filterSizeOpt"> M </option>
                  <option className="filterSizeOpt"> L </option>
                  <option className="filterSizeOpt"> XL </option>
                </select>
              </div>
            </div>

            <div className="addCon">
              <div className="amountCon">
                
              </div>
            </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
      <Copywrite />
    </div>
  )
}

export default Product
