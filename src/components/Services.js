import React,{useRef} from 'react'
import {useInView} from 'framer-motion'
import {Link} from'react-router-dom'
import "./About.css"
function Services() {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount:0.2, once:true});
    // Animation  wow fadeInUp" data-wow-delay="0.1s"
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
                    <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                    <Link
                        className="btn btn-lg btn-primary rounded"to="/">
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
                    <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                    <Link
                        className="btn btn-lg btn-primary rounded"to="/">
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
                    <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                    <Link
                        className="btn btn-lg btn-primary rounded"to="/">
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
                    <h4 className="mb-3">Web Design</h4>
                    <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                    <Link
                        className="btn btn-lg btn-primary rounded"to="/">
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
                    <h4 className="mb-3">Web Hosting</h4>
                    <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                    <Link
                        className="btn btn-lg btn-primary rounded"to="/">
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
                    <h2 class="text-white mb-0">+012 345 6789</h2>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Services