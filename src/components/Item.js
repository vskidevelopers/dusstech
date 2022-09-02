import React from 'react'
import { Link } from 'react-router-dom'
import tee from '../images/product-3.jpg'

function Item({currentItems}) {
  return (
    <>
    {currentItems.map((item)=>(
                <div className="col-lg-4 col-sm-6" key={item}>
                <div className="product text-center">
                    <div className="mb-3 position-relative">
                    <div className="badge text-white badge-"></div>
        
                    <img
                        className="img-fluid w-100"
                        src={tee}
                        alt="..."
                    />
                    <div className="product-overlay">
                        <ul className="mb-0 list-inline">
                        <li className="list-inline-item m-0 p-0">
                            <Link className="btn rounded-0 btn-sm btn-outline-dark" to="/"
                            ><i className="far fa-heart"></i></Link>
                        </li>
                        <li className="list-inline-item m-0 p-0">
                            <Link className="btn rounded-0 btn-sm btn-dark" to="/"
                            >Add to cart</Link>
                        </li>
                        <li className="list-inline-item mr-0">
                            <Link
                            className="btn rounded-0 btn-sm btn-outline-dark"
                            to="">
                                <i className="fas fa-expand"></i></Link>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <h6>
                    <Link className="reset-anchor" to={`/detail/${item}`}> Item no {item}</Link>
                    </h6>
                    <p className="small text-muted">Ksh 2500</p>
                </div>
                </div>
    ))}
    </>
)
}

export default Item