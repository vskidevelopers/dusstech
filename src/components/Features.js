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
                <h1 className="display-6 mb-4">We help your brand connect with people</h1>
            </div>
        <div className="row gx-5">
            <div className="col-lg-4">
                <div className="row gx-5">
                    <div  style={{
                            transform: isInView ? "none" : "translateY(100vh)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                        }}
                        className="col-12 mt-2">
                        <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width: "60px", height: "60px"}}>
                            <i className="fa fa-cubes text-white"></i>
                        </div>
                        <h4>Digital Platforms</h4>
                        <p className="mb-0">Realisation of your digital aspirations will need agility,capacity and scalabity. We go it covered</p>
                    </div>
                    <div className="col-12 mt-2"
                            style={{
                                transform: isInView ? "none" : "translateY(100vh)",
                                opacity: isInView ? 1 : 0,
                                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.2s"
                            }}
                        >
                        <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width: "60px", height: "60px"}}>
                            <i className="fa fa-award text-white"></i>
                        </div>
                        <h4>Digital Experience</h4>
                        <p className="mb-0">We help you create that seamless digital experience that generates adoption, engagement and satisfaction.</p>
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
                    <div className="col-12 mt-2" style={{
                         transform: isInView ? "none" : "translateY(100vh)",
                         opacity: isInView ? 1 : 0,
                         transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
                    }}>
                        <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width: "60px", height: "60px"}}>
                            <i className="fa fa-users-cog text-white"></i>
                        </div>
                        <h4>Digital Direction</h4>
                        <p className="mb-0">We focus on helping clients navigate the sometimes complex digital landscape and provide expertise that generate value</p>
                    </div>
                    <div className="col-12 mt-2" style={{
                         transform: isInView ? "none" : "translateY(100vh)",
                         opacity: isInView ? 1 : 0,
                         transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.3s"
                    }}>
                        <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width: "60px", height: "60px"}}>
                            <i className="fa fa-phone-alt text-white"></i>
                        </div>
                        <h4>24/7 Support</h4>
                        <p className="mb-0">Our support staff is always ready to help you out. in case of any queries you can call +254 7222 277 778 </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Features
