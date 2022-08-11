import React, {useEffect,useRef} from 'react'
import Typed from 'typed.js'
// import creative from "../images/creative.jpg"
import graphic from "../images/graphic.png"
// import branding from "../images/branding.jpg"

import "./Intro.css"

function Intro() {
    const el = useRef(null);

	const typed = useRef(null);

    useEffect(() => {
        const options = {
                strings: [
                    '<strong class="text-primary">Creative.</strong>',
                    '<strong class="text-primary">Design.</strong>',
                    '<strong class="text-primary">Branding.</strong>'
                    ],
                typeSpeed: 120,
                backSpeed: 50,

                loop:true,
            };
        typed.current = new Typed(el.current, options);
        return () => {
            typed.current.destroy();
        } 
    },
    [])
    

    return (
        <div className="site" id="page">
        <section className="hero-section hero-section--image clearfix clip">
            <div className="hero-section__wrap">
                <div className="hero-section__option">
                    <img src={graphic} />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="offset-lg-2 col-lg-8">
                            <div className="title-01 title-01--11 text-center">
                                <h2 className="title__heading">
                                    We are <span style={{ whiteSpace: 'pre' }} ref={el} />
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Intro