import React from 'react'
import Footer from '../components/Footer'
import ProductDetail from '../components/ProductDetail'




function Detail() {

return (
    <>
    <section class="py-5 bg-light">   
            <div className='container' style={{marginTop:"5%"}}>
                <ProductDetail />
            </div>
        </section>
        <Footer/>
        </>
  )
}

export default Detail