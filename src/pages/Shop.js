import React,{useEffect} from 'react'
import Hero from '../components/Hero'
import Sidevbar from '../components/Sidebar'
import Products from '../components/Products'
import Footer from "../components/Footer"


function Shop() {
    useEffect(() => {
        alert(" You are viewing the test view of the proposed shop. Items are currently drawn from a fake API")
    }, [])
    
    return (   
        <div>   
            <div className='container' style={{marginTop:"5%"}}>
                <Hero/>
                <div className='py-5'>
                    <div className='row'>
                        <div className='col-lg-3 order-2 order-lg-1'>
                            <Sidevbar/>
                        </div>
                        <div className='col-lg-9 col-lg-9 order-1 order-lg-2 mb-5 mb-lg-0'>
                            <Products />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
        )
}

export default Shop