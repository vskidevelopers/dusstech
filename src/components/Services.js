import React,{useRef} from 'react'
import {useInView} from 'framer-motion'
import {Link} from'react-router-dom'
import "./About.css"
function Services() {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount:0.2, once:true});
    
    const notAvailable=()=>{
        alert("Sorry, not currently available. Coming soon tho' ")
    }

    return (
    <div ref={ref} className="container-fluid py-5">
    <div className="container py-5">
        <div class="text-center mx-auto mb-5 " style={{
                    maxWidth: "600px",
                    transform: isInView ? "none" : "translateY(100vh)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"}}>
                <h6 class="section-title bg-white text-center text-primary px-3">Services</h6>
                <h1 class="display-6 mb-4">We Focuse On Making The Best In All Sectors</h1>
            </div>
        <div className="row gx-5 gy-5">
            <div className="col-lg-4 col-md-6"  style={{
                            transform: isInView ? "none" : "translateY(100vh)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                        }}>
                <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                    <div className="service-icon">
                        <i className="fa fa-shield-alt text-white"></i>
                    </div>
                    <h4 className="mb-3">Graphic Design</h4>
                    <p className="m-0">Dusstech Brands has been in the industry long enough to master the different aspects of graphic design and has a 10-year work portfolio to show for it</p>
                    <Link
                        className="btn btn-lg btn-success rounded"to="/" onClick={notAvailable}>
                        <i className="bi bi-arrow-right"></i>
                    </Link>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 "  style={{
                            transform: isInView ? "none" : "translateY(100vh)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
                        }}>
                <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                    <div className="service-icon">
                        <i className="fa fa-chart-pie text-white"></i>
                    </div>
                    <h4 className="mb-3">Printing</h4>
                    <p className="m-0">Dusstech is well equiped with high quality printers, plotters and large formart printers that guarantees clean and professional experience  </p>
                    <Link
                        className="btn btn-lg btn-success rounded"to="/" onClick={notAvailable}>
                        <i className="bi bi-arrow-right"></i>
                    </Link>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 "  style={{
                            transform: isInView ? "none" : "translateY(100vh)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.3s"
                        }}>
                <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                    <div className="service-icon">
                        <i className="fa fa-code text-white"></i>
                    </div>
                    <h4 className="mb-3">Branding</h4>
                    <p className="m-0">From company creation to launching, Dusstech brands are with you all through providing a seamless experience in all branding fields</p>
                    <Link
                        className="btn btn-lg btn-success rounded"to="/" onClick={notAvailable}>
                        <i className="bi bi-arrow-right"></i>
                    </Link>
                </div>
            </div>
            <div className="col-lg-4 col-md-6"  style={{
                            transform: isInView ? "none" : "translateY(100vh)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.7s"
                        }}>
                <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                    <div className="service-icon">
                        <i className="fab fa-android text-white"></i>
                    </div>
                    <h4 className="mb-3">Web Development</h4>
                    <p className="m-0">Dusstech deals with mordern web development trends to create custom web systems that fit the clients needs.</p>
                    <Link
                        className="btn btn-lg btn-success rounded"to="/" onClick={notAvailable}>
                        <i className="bi bi-arrow-right"></i>
                    </Link>
                </div>
            </div>
            <div className="col-lg-4 col-md-6"  style={{
                            transform: isInView ? "none" : "translateY(100vh)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 2s"
                        }}>
                <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                    <div className="service-icon">
                        <i className="fa fa-search text-white"></i>
                    </div>
                    <h4 className="mb-3">Digital Marketing</h4>
                    <p className="m-0">Dusstech is well equiped with experts that provide professional digital marketing assistance.</p>
                    <Link
                        className="btn btn-lg btn-success rounded"to="/" onClick={notAvailable}>
                        <i className="bi bi-arrow-right"></i>
                    </Link>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 "  style={{
                            transform: isInView ? "none" : "translateY(100vh)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 2.5s"
                        }}>
                <div class="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
                    <h3 class="text-white mb-3">Call Us For Quote</h3>
                    <p class="text-white mb-3">Clita ipsum magna kasd rebum at ipsum amet dolor justo dolor est magna stet eirmod</p>
                    <h3 class="text-white mb-0">+254 722-277-778</h3>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Services
