import React from 'react'
import features from "../images/feature.jpg"
import "./About.css"

function Features() {
    // Animation wow zoomIn" data-wow-delay="0.2s"
  return (
    <div className="container-fluid py-5 ">
    <div className="container py-5">
    <div className="text-center mx-auto mb-5 " style={{maxWidth: "600px"}}>
                <h6 className="section-title bg-white text-center text-primary px-3">Services</h6>
                <h1 className="display-6 mb-4">We Focuse On Making The Best In All Sectors</h1>
            </div>
        <div className="row gx-5">
            <div className="col-lg-4">
                <div className="row gx-5">
                    <div className="col-12 mt-5">
                        <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width: "60px", height: "60px"}}>
                            <i className="fa fa-cubes text-white"></i>
                        </div>
                        <h4>Best In Industry</h4>
                        <p className="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                    </div>
                    <div className="col-12 mt-5">
                        <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width: "60px", height: "60px"}}>
                            <i className="fa fa-award text-white"></i>
                        </div>
                        <h4>Award Winning</h4>
                        <p className="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 " style={{minHeight: "350px"}}>
                <div className="position-relative h-100">
                    <img className="position-absolute w-100 h-100 rounded" src={features} style={{objectFit: "cover"}} alt='feature' />
                </div>
            </div>
            <div className="col-lg-4">
                <div className="row gx-5">
                    <div className="col-12 mt-5">
                        <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width: "60px", height: "60px"}}>
                            <i className="fa fa-users-cog text-white"></i>
                        </div>
                        <h4>Professional Staff</h4>
                        <p className="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                    </div>
                    <div className="col-12 mt-5">
                        <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width: "60px", height: "60px"}}>
                            <i className="fa fa-phone-alt text-white"></i>
                        </div>
                        <h4>24/7 Support</h4>
                        <p className="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Features