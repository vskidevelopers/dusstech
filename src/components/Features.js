import React,{useRef} from 'react'
import {useInView} from 'framer-motion'

import features from "../images/feature.jpg"
import "./About.css"

function Features() {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount:0.2, once:true});
    // Animation wow zoomIn" data-wow-delay="0.2s"
  return (
    <div ref={ref} className="container-fluid py-5 ">
    <div className="container py-5">
    <div className="text-center mx-auto mb-5 " style={{
            maxWidth: "600px",
            transform: isInView ? "none" : "translateY(100vh)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
        }}>
                <h6 className="section-title bg-white text-center text-primary px-3">Why Choose Us</h6>
                <h1 className="display-6 mb-4">We Are Here to Grow Your Brand Exponentially</h1>
            </div>
        <div className="row gx-5">
            <div className="col-lg-4">
                <div className="row gx-5">
                    <div  style={{
                            transform: isInView ? "none" : "translateY(100vh)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                        }}
                        className="col-12 mt-5">
                        <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width: "60px", height: "60px"}}>
                            <i className="fa fa-cubes text-white"></i>
                        </div>
                        <h4>Best In Industry</h4>
                        <p className="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                    </div>
                    <div className="col-12 mt-5"
                            style={{
                                transform: isInView ? "none" : "translateY(100vh)",
                                opacity: isInView ? 1 : 0,
                                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.2s"
                            }}
                        >
                        <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width: "60px", height: "60px"}}>
                            <i className="fa fa-award text-white"></i>
                        </div>
                        <h4>Award Winning</h4>
                        <p className="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 " style={{
                    minHeight: "350px",
                    transform: isInView ? "none" : "translateY(100vh)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}}>
                <div className="position-relative h-100">
                    <img className="position-absolute w-100 h-100 rounded" src={features} style={{objectFit: "cover"}} alt='feature' />
                </div>
            </div>
            <div className="col-lg-4">
                <div className="row gx-5">
                    <div className="col-12 mt-5" style={{
                         transform: isInView ? "none" : "translateY(100vh)",
                         opacity: isInView ? 1 : 0,
                         transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
                    }}>
                        <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width: "60px", height: "60px"}}>
                            <i className="fa fa-users-cog text-white"></i>
                        </div>
                        <h4>Professional Staff</h4>
                        <p className="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                    </div>
                    <div className="col-12 mt-5" style={{
                         transform: isInView ? "none" : "translateY(100vh)",
                         opacity: isInView ? 1 : 0,
                         transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.3s"
                    }}>
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