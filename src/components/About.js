import React, {useRef} from 'react'
import { Link } from 'react-router-dom'
import { useInView } from 'framer-motion'
import about from "../images/about.jpg"
import placeholder from "../images/placeholder.jpg"
import "./About.css"


// Animation wow fadeInUp" data-wow-delay="0.1s"
function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount:0.1, once:true});

    const aboutSoon = ()=>{
        alert("About page is under development. Coming Soon")
    }

    return (
        <div ref={ref} className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 " 
                        style={{
                            transform: isInView ? "none" : "translateY(100vh)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                        }}
                    >
                    <div className="img-border">
                        <img className="img-fluid" src={about} alt="about us"/> 
                    </div>
                </div>
                <div className="col-lg-6 "
                        style={{
                            transform: isInView ? "none" : "translateY(100vh)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
                            
                        }}
                    >
                    <div className="h-100">
                        <h6 className="section-title bg-white text-start text-primary px-3">About Us</h6>
                        <h1 className="display-6 mb-4">#1 Branding Solution With <span className="text-primary">10 Years</span> Of Experience</h1>
                        <p>Dusstech Brands is a Kenyan registered creative agency with a diverse portfolio of clients in search for top notch printing, branding, and marketing services locally and across the border. </p>
                        <p className="mb-4">Equipped with a team of graphic designers, content creators, web developers and copywriters, we have established Trust, Passion, and Leadership with all our clients in the quest to
                            meet their specific organizational goals.</p>
                        <div className="d-flex align-items-center mb-4 pb-2">
                            <img className="flex-shrink-0 rounded-circle" src={placeholder}alt="" style={{width: '50px', height: '50px'}}/>
                            <div className="ps-4">
                                <h6>Francis Ndegwa</h6>
                                <small>CEO &amp; Founder</small>
                            </div>
                        </div>
                        <Link className="btn btn-success rounded-pill py-3 px-5"to="/" onClick={aboutSoon}>Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default About
