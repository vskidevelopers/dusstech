import './Cart.css'
import CartItems from './CartItems'

function CartTable({cart}) {
    
    return (
                    <div className="table-responsive mb-4">
                            <table className="table">
                                <thead className="bg-light">
                                    <tr>
                                    <th className="border-0" scope="col">
                                        <strong className="text-small text-uppercase"
                                        >Product</strong>
                                    </th>
                                    <th className="border-0" scope="col">
                                        <strong className="text-small text-uppercase">Price</strong>
                                    </th>
                                    <th className="border-0" scope="col">
                                        <strong className="text-small text-uppercase"
                                        >Quantity</strong>
                                    </th>
                                    <th className="border-0" scope="col">
                                        <strong className="text-small text-uppercase">Total</strong>
                                    </th>
                                    <th className="border-0" scope="col"></th>
                                    </tr>
                                </thead>
                                <CartItems cart={cart}/>
                            </table>
                        </div>

  )
}

export default CartTable