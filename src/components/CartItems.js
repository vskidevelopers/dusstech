import React from 'react'
import { useDispatch } from 'react-redux'
import { incrementQuantity, decrementQuantity,} from '../store/Cart-Slice'
import { Link } from 'react-router-dom'

function CartItems({cart}) {
    const dispatch=useDispatch()
    console.log("cart in CartTable > ",cart)
    // console.log("cartid in CartTable > ",cart.cart.id)
    console.log("cartItems in CartTable > ",cart.cart.cart_items)
    console.log("item 1 in cartItems in CartTable > ",cart.cart.cart_items[0])
  return (
    <tbody>
        {cart.cart.cart_items.map((item)=>(
            <tr key={item.item.id}>
            <th className="pl-0 border-0" scope="row">
                <div className="media align-items-center row">
                <Link
                    className="reset-anchor d-block animsition-link col-4"
                    to="/"
                    ><img
                    src={item.item.image}
                    alt="..."
                    width="50"
                /></Link>
                <div className="media-body ml-3 col-8">
                    <strong className="h6"
                    ><Link
                        className="reset-anchor animsition-link"
                        to={`/detail/${item.item.slug}`}
                        >{item.item.title}</Link
                    ></strong>
                </div>
                </div>
            </th>
            <td className="align-middle border-0">
                <p className="mb-0 small">Khs {item.item.price}</p>
            </td>
            <td className="align-middle border-0">
                <div
                className="border d-flex align-items-center justify-content-between px-3"
                >
                <span
                    className="small text-uppercase text-gray headings-font-family"
                    >Quantity</span
                >
                <div className="quantity">
                    <button className="dec-btn p-0" onClick={()=>dispatch(decrementQuantity(item.item.id))} >
                    <i className="fas fa-caret-left"></i>
                    </button>
                    <input
                    className="form-control form-control-sm border-0 shadow-0 p-0"
                    type="text"
                    value={item.quantity}
                    onChange={e=>console.log(e.target.value)}
                    />
                    <button className="inc-btn p-0" onClick={()=>dispatch(incrementQuantity(item.item.id))} >
                    <i className="fas fa-caret-right"></i>
                    </button>
                </div>
                </div>
            </td>
            <td className="align-middle border-0">
                <p className="mb-0 small">Ksh {item.final_price}</p>
            </td>
            <td className="align-middle border-0">
                <button style={{display:"contents"}}  className="reset-anchor" onClick={()=>console.log('item.id >',item.id)}
                ><i className="fas fa-trash-alt small text-muted"></i
                ></button>
            </td>
            </tr>
            ))}
        
        </tbody>
    )
}

export default CartItems