import React,{ useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import Tabs from './Tabs';

import prod from "../images/product-5.jpg"

import "./Details.css"



function ProductDetail() {
    const { item } = useParams();
    const productItems = []
    console.log(item)

    useEffect(( ) => {
      for (let i = 1; i < 100; i++) {
        productItems.push(i)
      }
      console.log(productItems)
    })

    const thisProduct = productItems.find(prod => prod === item)
    console.log(thisProduct)

    
  return (
      <div className='row mb-5'>
          <div className="col-lg-6">
          <div className="m-sm-0" style={{width: "345px"}}>
            <img  src={prod} alt="product" className='img-fluid'/>
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
              <h1>Red digital smartwatch</h1>
              <p className="text-muted lead">$250</p>
              <p className="text-small mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
                ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus
                et magnis dis parturient montes nascetur ridiculus mus.
                Vestibulum ultricies aliquam convallis.
              </p>
              <div className="row align-items-stretch mb-4">
                <div className="col-sm-5 px-sm-0">
                  <div
                    className="border d-flex align-items-center justify-content-between py-1 px-3 bg-white border-white" style={{lineHeight:2}}
                  >
                    <span className="small text-uppercase text-gray mx-4 no-select"
                      >Quantity</span>
                    <div className="quantity">
                      <button className="dec-btn p-0">
                        <i className="fas fa-caret-left"></i>
                      </button>
                      <input
                        className="form-control border-0 shadow-0 p-0"
                        type="text"
                        value="1"
                      />
                      <button className="inc-btn p-0">
                        <i className="fas fa-caret-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 ps-sm-0">
                  <Link
                    className="btn btn-dark btn-sm btn-block h-100 d-flex align-items-center justify-content-center px-0"
                    to="/">
                      Add to cart
                      </Link>
                </div>
              </div>
              <Link className="btn btn-link text-dark p-0 mb-4" to="/">
                <i className="far fa-heart mx-3"></i>Add to wish list
                </Link><br />
              <ul className="list-unstyled small d-inline-block">
                <li className="px-3 py-3 mb-1 bg-white text-muted">
                  <strong className="text-uppercase text-dark">Category:</strong>
                  <Link className="reset-anchor ms-3" to="/">Demo Products</Link>
                </li>
                <li className="px-3 py-3 mb-1 bg-white text-muted">
                  <strong className="text-uppercase text-dark">Tags:</strong
                  ><Link className="reset-anchor ms-3" to="/">Innovation</Link>
                </li>
              </ul>
          </div>
          <Tabs/>
      </div>
  )
}

export default ProductDetail