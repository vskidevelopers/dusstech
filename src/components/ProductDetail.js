import React,{ useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
// import { useDispatch } from 'react-redux';
// import {addToCart} from '../redux/cartSlice';
import Tabs from './Tabs';

import "./Details.css"



function ProductDetail() {
  // const dispatch=useDispatch()
    const [item, setItem] = useState([])
    const [quantity, setQuantity] = useState(1)
    const { slug } = useParams();
  
    console.log(slug)

    useEffect(( ) => {
      const fetchData = async () => {
        try {
            const res = await axios.get(`/api/products/${slug}`);
            setItem(res.data);
            console.log("data from backend :",res.data)
        }
        catch (err) {
            console.log(err)
        }
    }

    fetchData();
    },[slug])

    const handleIncrease = ()=>{
      setQuantity(quantity+1)
    }

    const handeDecrease = ()=>{
      setQuantity(quantity-1)
      if (quantity >=1){
          setQuantity(1)
      }

    }
    
    
  return (
      <div className='row mb-5'>
          <div className="col-lg-6">
          <div className="m-sm-0" style={{width: "100%"}}>
            <img  src={item.image} alt="product" className='img-fluid'/>
          </div>
          </div>
          <div className="col-lg-6">
              <ul className="list-inline mb-2">
                <li className="list-inline-item m-0">
                  <i className="fas fa-star small text-warning"></i>
                </li>
                <li className="list-inline-item m-0">
                  <i className="fas fa-star small text-warning"></i>
                </li>
                <li className="list-inline-item m-0">
                  <i className="fas fa-star small text-warning"></i>
                </li>
                <li className="list-inline-item m-0">
                  <i className="fas fa-star small text-warning"></i>
                </li>
                <li className="list-inline-item m-0">
                  <i className="fas fa-star small text-warning"></i>
                </li>
              </ul>
              <h1>{item.title}</h1>
              
              <p className="text-muted lead">Ksh {item.discount_price ? item.discount_price: item.price}</p>
              {item.discount_price ?   <p className="text-muted lead">Was <span style={{textDecoration:"line-through"}}>Ksh {item.price}</span></p>: null }
            
              <p className="text-small mb-4">
                {item.description}
              </p>
              <div className="row align-items-stretch mb-4">
                <div className="col-sm-5 px-sm-0">
                  <div
                    className="border d-flex align-items-center justify-content-between py-1 px-3 bg-white border-white" style={{lineHeight:2}}
                  >
                    <span className="small text-uppercase text-gray mx-4 no-select"
                      >Quantity</span>
                    <div className="quantity">
                      <button className="dec-btn p-0" onClick={handeDecrease}>
                        <i className="fas fa-caret-left"></i>
                      </button>
                      <input
                        className="form-control border-0 shadow-0 p-0"
                        type="text"
                        value={quantity}
                      />
                      <button className="inc-btn p-0" onClick={handleIncrease}>
                        <i className="fas fa-caret-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 ps-sm-0">
                  <button
                    className="btn btn-success btn-sm btn-block h-100 d-flex align-items-center justify-content-center px-0" style={{textDecorationLine:"none"}}
                    to="/cart">
                      Add to cart
                      </button>
                </div>
              </div>
              <Link className="btn btn-link text-dark p-0 mb-4" to="/">
                <i className="far fa-heart mr-3"></i>Add to wish list
                </Link><br />
              <ul className="list-unstyled small d-inline-block">
                <li className="px-3 py-3 mb-1 bg-white text-muted">
                  <strong className="text-uppercase text-dark">Category:</strong>
                  <Link className="reset-anchor ms-3" to="/">{item.category}</Link>
                </li>
                <li className="px-3 py-3 mb-1 bg-white text-muted">
                  <strong className="text-uppercase text-dark">Tags:</strong
                  ><Link className="reset-anchor ms-3" to="/">{item.tag}</Link>
                </li>
              </ul>
          </div>
          <Tabs/>
      </div>
  )
}

export default ProductDetail