import React from 'react'
import { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { fetchCart } from '../store/Cart-Slice'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import CartTable from '../components/CartTable'
import '../components/Cart.css'
import CartNav from '../components/CartNav'
import CartTotal from '../components/CartTotal'

function Cart() {
    const {cart}=useSelector(state=>state.cart)
    const dispatch = useDispatch();
    const cartInLocalStorage =localStorage.getItem("cart")
    
    useEffect(() => {
        if(cartInLocalStorage){
            console.log('cart from cart js',cart)
            // dispatch(fetchCart())
        }else{
            dispatch(fetchCart())
            console.log('cart from cart js dispatch',cart);
        }
        }, [])
    return (
        <>
        <div className='container'>
            <div className="py-5">
                <Hero breadcrumb="Home"  breadcrumbActive="Cart"/>
            </div>
            <section className="py-2">
                <h2 className="h5 text-uppercase mb-4">Shopping cart</h2>
                <div className="row">
                    <div className="col-lg-8 mb-4 mb-lg-0">
                        {cartInLocalStorage?<CartTable cart={cart}/>:<h1>You have no active cart</h1>}
                            
                            <CartNav/>
                        </div>
                        <div className='col-lg-4'>
                            {cartInLocalStorage?<CartTotal cart={cart}/>:null}
                        </div>
                    </div>

                </section>
        </div>
    <Footer />
    </>
    )
}

export default Cart