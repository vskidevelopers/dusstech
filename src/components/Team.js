import React ,{useRef, useState,useEffect}from 'react'
import { useInView } from 'framer-motion'
import {Link} from 'react-router-dom'
import axios from 'axios'

import placeholder from "../images/placeholder.jpg"


import "./About.css"

function Team() {
    const [Team, setTeam] = useState([])

    useEffect(() => {
        const FetchTeam= async()=>{
            try{
                const resp =await axios.get("/api/teams/team/");
                setTeam(resp.data);
                console.log("Teams from Django :",resp.data)
            }
            catch(err){
                console.log(err)
            }
        }
        FetchTeam()

    }, [])
    

    const ref = useRef(null);
    const isInView = useInView(ref, { amount:0.2, once:true});
  return (
            <div ref={ref} class="container-xxl py-5">
            <div class="container">
                <div class="text-center mx-auto " style={{
                            maxWidth: "600px",
                            transform: isInView ? "none" : "translateY(100vh)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
                        }}>
                    <h6 class="section-title bg-white text-center text-primary px-3">Our Team</h6>
                    <h1 class="display-6 mb-4">We Are A Creative Team For Your Dream Project</h1>
                </div>
                <div class="row g-4">
                    {Team.map((member)=>(    
                        <div class="col-lg-4 col-md-6" key={member.id} style={{
                                maxWidth: "600px",
                                transform: isInView ? "none" : "translateY(100vh)",
                                opacity: isInView ? 1 : 0,
                                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                            }}>
                            <div class="team-item text-center p-4">
                                <img class="img-fluid border rounded-circle w-75 p-2 mb-4" src={placeholder} alt="munene" />
                                <div class="team-text">
                                    <div class="team-title">
                                        <h5>{member.name}</h5>
                                        <span>{member.position}</span>
                                    </div>
                                    <div class="team-social">
                                        <a class="btn btn-square btn-primary rounded-circle" target="_blank" href={member.facebook} rel="noreferrer" ><i class="fab fa-facebook-f"></i></a>
                                        <a class="btn btn-square btn-primary rounded-circle" target="_blank" href={member.twitter} rel="noreferrer"><i class="fab fa-twitter"></i></a>
                                        <a class="btn btn-square btn-primary rounded-circle" target="_blank" href={member.instagram} rel="noreferrer"><i class="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* <div class="col-lg-4 col-md-6 " style={{
                            maxWidth: "600px",
                            transform: isInView ? "none" : "translateY(100vh)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
                        }}>
                        <div class="team-item text-center p-4">
                            <img class="img-fluid border rounded-circle w-75 p-2 mb-4" src={placeholder} alt="me"/>
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
                    <div class="col-lg-4 col-md-6" style={{
                            maxWidth: "600px",
                            transform: isInView ? "none" : "translateY(100vh)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.4s"
                        }}>
                        <div class="team-item text-center p-4">
                            <img class="img-fluid border rounded-circle w-75 p-2 mb-4" src={placeholder} alt="tony"/>
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
                    </div> */}
                </div>
            </div>
        </div>
  )
}

export default Team