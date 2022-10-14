import React from 'react'
import { Link } from 'react-router-dom'

function CartNav() {
    return (
            <div className="bg-light px-4 py-3">
            <div className="row align-items-center text-center">
                <div className="col-md-6 mb-3 mb-md-0 text-md-left">
                <Link
                    className="btn btn-link p-0 text-dark btn-sm"
                    to="/shop"><i className="fas fa-long-arrow-alt-left mr-2"> </i>  Continue
                    shopping</Link>
                </div>
                <div className="col-md-6 text-md-right">
                <Link className="btn btn-outline-success btn-sm"to="#"
                    >Procceed to checkout<i
                    className="fas fa-long-arrow-alt-right ml-2"
                    ></i
                ></Link>
                </div>
            </div>
        </div>
    )
}

export default CartNav