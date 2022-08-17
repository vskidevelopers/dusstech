import React from 'react'
import CountUp from 'react-countup';


function Facts() {
    // Animation wow zoomIn" data-wow-delay="0.6s
    return (
        <div className="container-fluid facts py-5 pt-lg-0">
        <div className="container py-5 pt-lg-0">
            <div className="row gx-0">
                <div className="col-lg-4 px-0" >
                    <div className="bg-primary shadow d-flex align-items-center justify-content-center p-4" style={{height: '150px'}}>
                        <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2" style={{width: '60px', height: '60px'}}>
                            <i className="fa fa-users text-primary"></i>
                        </div>
                        <div className="pl-4">
                            <h5 className="text-white mb-0">Happy Clients</h5>
                            <h1 className="text-white mb-0"><CountUp duration={2.75} end={10000} />+</h1>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 px-0">
                    <div className="bg-light shadow d-flex align-items-center justify-content-center p-4" style={{height: '150px'}}>
                        <div className="bg-primary d-flex align-items-center justify-content-center rounded mb-2" style={{width: '60px', height: '60px'}}>
                            <i className="fa fa-check text-white"></i>
                        </div>
                        <div className="pl-4">
                            <h5 className="text-primary mb-0">Designs Done</h5>
                            <h1 className="mb-0"><CountUp end={10000} />+</h1>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 px-0 ">
                    <div className="bg-primary shadow d-flex align-items-center justify-content-center p-4" style={{height: '150px'}}>
                        <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2" style={{width: '60px', height: '60px'}}>
                            <i className="fa fa-award text-primary"></i>
                        </div>
                        <div className="pl-4">
                            <h5 className="text-white mb-0">Experience</h5>
                            <h1 className="text-white mb-0"><CountUp duration={2.75} end={10} /> Yrs</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Facts