import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import './Employes.css'
import './Employesmedia.css'
import { useLayoutEffect, useRef } from 'react'
import { gsap } from "gsap";
import { Expo } from 'gsap/dist/gsap';
const Employes = () => {
    const scrollRef = React.createRef();
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const gl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#emp-img",
                    start: "-380% 20%",
                    end: "10% 20%",
                    scrub: 1,
                    // markers: true
                }
            });
            gl.to("#emp-img", { rotation: 90, duration: 1 })
            gsap.from(".employes .mates h1", {
                x: -800,
                opacity: 0,
                duration: 1.2,
                delay: 1,
                ease: Expo.easeInOut,
                scrollTrigger: {
                    trigger: ".employes"
                }
            });
            gsap.from("#imglef", {
                x: -500,
                opacity: 0,
                duration: 0.8,
                delay: 0.5,
                ease: Expo.easeInOut,
                scrollTrigger: {
                    trigger: "#imgery"
                }
            });
            gsap.from("#imgrig div", {
                y: 700,
                opacity: 0,
                stagger: 0.8,
                duration: 3,
                delay: -1,
                ease: Expo.easeInOut,
                scrollTrigger: {
                    trigger: "#imgery"
                }
            });

        }, scrollRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <div className='employes' ref={scrollRef}>
                <Link to={'/'}>
                    <div className='back-2'>
                        <i class="ri-home-4-line"></i>
                    </div>
                </Link>
                <div className="mates" >
                    <h1>Our Te<span>a</span>m<div className="mini">(03)</div>
                    </h1>
                    <img id='emp-img' width="60" height="95" alt="" decoding="async" data-src="https://dzinr.co.in/wp-content/uploads/2023/07/Arrow-1-1.svg" src="https://dzinr.co.in/wp-content/uploads/2023/07/Arrow-1-1.svg" />
                </div>
                <div id="imgery">
                    <div id="imglef">
                        <div class="container-moon">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className='emp-btn'>
                            <Link to={'/contact'}>
                                <button class="btn">Let's Build A Website
                                </button>
                            </Link>
                        </div>
                        <h1>
                            Building Memorable
                            Digital <span> Experiences.</span>
                        </h1>
                    </div>
                    <div id="imgrig">
                        <div className="imgcntnr">
                            <Link to={"https://aman-bairagi-portfolio.vercel.app/"} target="_blank">
                                <span>AMAN</span>
                            </Link>
                        </div>
                        <div className="imgcntnr">
                            <Link to={"https://portfolio-main-dc-lk5q.vercel.app/"} target="_blank">
                                <span>DAKSH</span>
                            </Link>
                        </div>
                        <div className="imgcntnr"><span>ARJUN</span></div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Employes
