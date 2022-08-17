import React from 'react'
import {Link} from 'react-router-dom'

import team1 from "../images/team-1.jpg"
import team2 from "../images/team-2.jpg"
import team3 from "../images/team-3.jpg"

import "./About.css"

function Team() {
  return (
            <div class="container-xxl py-5">
            <div class="container">
                <div class="text-center mx-auto " style={{maxWidth: "600px"}}>
                    <h6 class="section-title bg-white text-center text-primary px-3">Our Team</h6>
                    <h1 class="display-6 mb-4">We Are A Creative Team For Your Dream Project</h1>
                </div>
                <div class="row g-4">
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="team-item text-center p-4">
                            <img class="img-fluid border rounded-circle w-75 p-2 mb-4" src={team1} alt="munene" />
                            <div class="team-text">
                                <div class="team-title">
                                    <h5>Francis Ndegwa</h5>
                                    <span>Director</span>
                                </div>
                                <div class="team-social">
                                    <Link class="btn btn-square btn-primary rounded-circle"to="/"><i class="fab fa-facebook-f"></i></Link>
                                    <Link class="btn btn-square btn-primary rounded-circle"to="/"><i class="fab fa-twitter"></i></Link>
                                    <Link class="btn btn-square btn-primary rounded-circle"to="/"><i class="fab fa-instagram"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div class="team-item text-center p-4">
                            <img class="img-fluid border rounded-circle w-75 p-2 mb-4" src={team2} alt="me"/>
                            <div class="team-text">
                                <div class="team-title">
                                    <h5>Ben Muchemi</h5>
                                    <span>Designer</span>
                                </div>
                                <div class="team-social">
                                    <Link class="btn btn-square btn-primary rounded-circle"to="/"><i class="fab fa-facebook-f"></i></Link>
                                    <Link class="btn btn-square btn-primary rounded-circle"to="/"><i class="fab fa-twitter"></i></Link>
                                    <Link class="btn btn-square btn-primary rounded-circle"to="/"><i class="fab fa-instagram"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div class="team-item text-center p-4">
                            <img class="img-fluid border rounded-circle w-75 p-2 mb-4" src={team3} alt="tony"/>
                            <div class="team-text">
                                <div class="team-title">
                                    <h5>Tony Mathu</h5>
                                    <span>Designer</span>
                                </div>
                                <div class="team-social">
                                    <Link class="btn btn-square btn-primary rounded-circle"to="/"><i class="fab fa-facebook-f"></i></Link>
                                    <Link class="btn btn-square btn-primary rounded-circle"to="/"><i class="fab fa-twitter"></i></Link>
                                    <Link class="btn btn-square btn-primary rounded-circle"to="/"><i class="fab fa-instagram"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Team