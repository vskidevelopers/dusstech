import React from 'react'
import { Link } from 'react-router-dom'

function CartTotal({cart}) {
    return (
        <div className="card border-0 rounded-0 p-lg-4 bg-light">
        <div className="card-body">
        <h5 className="text-uppercase mb-4"><strong>Cart total</strong></h5>
        <ul className="list-unstyled mb-0">
            <li
            className="d-flex align-items-center justify-content-between"
            >
            <strong className="text-uppercase small font-weight-bold"
                >Subtotal</strong
            ><span className="text-muted small">Ksh {cart.cart.total}</span>
            </li>
            <li className="border-bottom my-2"></li>
            <li
            className="d-flex align-items-center justify-content-between mb-4"
            >
            <strong className="text-uppercase small font-weight-bold"
                >Total</strong
            ><span>Ksh {cart.cart.total}</span>
            </li>
            <li>
            <form action="#">
                <div className="form-group mb-0">
                <input
                    className="form-control"
                    type="text"
                    placeholder="Enter your coupon"
                />
                <Link
                    className="btn w-100 btn-outline-primary btn-sm mt-3"
                    type="submit"
                    to ="/"
                >
                    <i className="fas fa-gift mr-2"></i>Apply coupon
                </Link>
                </div>
            </form>
            </li>
        </ul>
        </div>
        </div>
    )
}

export default CartTotal