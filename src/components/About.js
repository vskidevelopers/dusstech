import React from 'react'
import { Link } from 'react-router-dom'
import about from "../images/about.jpg"
import team from "../images/team-1.jpg"
import "./About.css"


// Animation wow fadeInUp" data-wow-delay="0.1s"
function About() {
    

    return (
        <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 ">
                    <div className="img-border">
                        <img className="img-fluid" src={about} alt="about us"/> 
                    </div>
                </div>
                <div className="col-lg-6 ">
                    <div className="h-100">
                        <h6 className="section-title bg-white text-start text-primary px-3">About Us</h6>
                        <h1 className="display-6 mb-4">#1 Digital Solution With <span className="text-primary">10 Years</span> Of Experience</h1>
                        <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <p className="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.</p>
                        <div className="d-flex align-items-center mb-4 pb-2">
                            <img className="flex-shrink-0 rounded-circle" src={team}alt="" style={{width: '50px', height: '50px'}}/>
                            <div className="pl-4">
                                <h6>Jhon Doe</h6>
                                <small>SEO &amp; Founder</small>
                            </div>
                        </div>
                        <Link className="btn btn-primary rounded-pill py-3 px-5"to="/">Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default About