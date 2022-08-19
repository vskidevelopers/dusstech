import React,{useRef} from 'react'
import CountUp from 'react-countup';
import { useInView } from "framer-motion"


function Facts() {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount:0.2, once:true});
   
    return (
        <div ref={ref} className="container-fluid facts py-5 pt-lg-0">
        <div className="container py-5 pt-lg-0">
            <div className="row gx-0">
                <div className="col-lg-4 px-0" 
                style={{
                    
                    opacity: isInView ? 1 : 0,
                    scale:isInView?1:0.5,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
                    >
                    <div className="bg-primary shadow d-flex align-items-center justify-content-center p-4" style={{height: '150px'}}>
                        <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2" style={{width: '60px', height: '60px'}}>
                            <i className="fa fa-users text-primary"></i>
                        </div>
                        <div className="ps-4">
                            <h5 className="text-white mb-0">Happy Clients</h5>
                            <h1 className="text-white mb-0"><CountUp delay={1} duration={2.75} end={10000} />+</h1>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 px-0"
                    style={{
                        
                        opacity: isInView ? 1 : 0,
                        scale:isInView?1:0.5,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
                    }}
                >
                    <div className="bg-success shadow d-flex align-items-center justify-content-center p-4" style={{height: '150px'}}>
                        <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2" style={{width: '60px', height: '60px'}}>
                            <i className="fa fa-check text-success"></i>
                        </div>
                        <div className="ps-4">
                            <h5 className="text-white mb-0">Designs Done</h5>
                            <h1 className="mb-0 text-white "><CountUp delay={1.6} duration={2.75} end={10000} />+</h1>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 px-0 "
                        style={{
                            
                            opacity: isInView ? 1 : 0,
                            scale:isInView?1:0.5,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
                        }}
                    >
                    <div className="bg-primary shadow d-flex align-items-center justify-content-center p-4" style={{height: '150px'}}>
                        <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2" style={{width: '60px', height: '60px'}}>
                            <i className="fa fa-award text-primary"></i>
                        </div>
                        <div className="ps-4">
                            <h5 className="text-white mb-0">Experience</h5>
                            <h1 className="text-white mb-0"><CountUp delay={2} duration={2.75} end={10} /> Yrs</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Facts