import React from 'react'
import graphic  from "../images/creative.jpg"

function Shop() {
  return (
    <div>Shop
        <div className="site" id="page">
            <section className="hero-section hero-section--image clearfix clip">
                <div className="hero-section__wrap">
                    <div className="hero-section__option">
                        <img src={graphic} alt="homepage hero"/>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="offset-lg-2 col-lg-8">
                                <div className="title-01 title-01--11 text-center">
                                    <h2 className="title__heading">
                                        Shop Section Coming Soon
                                    
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
    )
}

export default Shop