import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import CartTable from '../components/CartTable'
import '../components/Cart.css'
import CartNav from '../components/CartNav'
import CartTotal from '../components/CartTotal'

function Cart() {
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
                            <CartTable />
                            <CartNav/>
                        </div>
                        <div className='col-lg-4'>
                            <CartTotal/>
                        </div>
                    </div>

                </section>
        </div>
    <Footer />
    </>
    )
}

export default Cart