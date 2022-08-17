import React from 'react'
import {Link} from'react-router-dom'
import "./About.css"
function Services() {
    // Animation  wow fadeInUp" data-wow-delay="0.1s"
    return (
    <div className="container-fluid py-5">
    <div className="container py-5">
        <div class="text-center mx-auto mb-5 " style={{maxWidth: "600px"}}>
                <h6 class="section-title bg-white text-center text-primary px-3">Services</h6>
                <h1 class="display-6 mb-4">We Focuse On Making The Best In All Sectors</h1>
            </div>
        <div className="row gx-5 gy-5">
            <div className="col-lg-4 col-md-6">
                <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                    <div className="service-icon">
                        <i className="fa fa-shield-alt text-white"></i>
                    </div>
                    <h4 className="mb-3">Cyber Security</h4>
                    <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                    <Link
                        className="btn btn-lg btn-primary rounded"to="/">
                        <i className="bi bi-arrow-right"></i>
                    </Link>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 ">
                <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                    <div className="service-icon">
                        <i className="fa fa-chart-pie text-white"></i>
                    </div>
                    <h4 className="mb-3">Data Analytics</h4>
                    <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                    <Link
                        className="btn btn-lg btn-primary rounded"to="/">
                        <i className="bi bi-arrow-right"></i>
                    </Link>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 ">
                <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                    <div className="service-icon">
                        <i className="fa fa-code text-white"></i>
                    </div>
                    <h4 className="mb-3">Web Development</h4>
                    <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                    <Link
                        className="btn btn-lg btn-primary rounded"to="/">
                        <i className="bi bi-arrow-right"></i>
                    </Link>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                    <div className="service-icon">
                        <i className="fab fa-android text-white"></i>
                    </div>
                    <h4 className="mb-3">Apps Development</h4>
                    <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                    <Link
                        className="btn btn-lg btn-primary rounded"to="/">
                        <i className="bi bi-arrow-right"></i>
                    </Link>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                    <div className="service-icon">
                        <i className="fa fa-search text-white"></i>
                    </div>
                    <h4 className="mb-3">SEO Optimization</h4>
                    <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                    <Link
                        className="btn btn-lg btn-primary rounded"to="/">
                        <i className="bi bi-arrow-right"></i>
                    </Link>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 ">
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