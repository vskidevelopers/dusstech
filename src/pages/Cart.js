import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

function Cart() {
    return (
        <>
            <div className="py-5">
                <Hero breadcrumb="Home"  breadcrumbActive="Cart"/>
            </div>
            <Footer />
        </>
    )
}

export default Cart