import React, { useEffect } from 'react'
import './Home.css'
import './Media.css'
import { useLayoutEffect, useRef } from 'react'
import { gsap } from "gsap";
import { Expo } from 'gsap/dist/gsap';
// import { LocomotiveScrollProvider } from "react-locomotive-scroll";
// import { useRef } from "react";
// import locomotiveScroll from "locomotive-scroll";
import Services from '../../components/Services/Services';
import img1 from '../../components/Services/wireframe.png'
import img2 from '../../components/Services/web-design.png'
import img3 from '../../components/Services/code.png'
import img4 from '../../components/Services/analysis.png'
import Typewriter from "typewriter-effect";
import Pricing from '../../components/Pricing/Pricing';
import Contact from '../../components/Contact/Contact';
import { Link } from 'react-router-dom';
import Work from '../../components/Work/Work';
import Footer from '../../components/Footer/Footer';
import Logo from '../../assets/logo2.svg'
import burger from './menu.png'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';


const Home = () => {
    const scrollRef = React.createRef();
    gsap.registerPlugin(ScrollTrigger);
    // const app = useRef();
    function revealToSpa() {
        document.querySelectorAll(".reveal")
            .forEach(function (elem) {

                // create two span
                var parent = document.createElement("span");
                var child = document.createElement("span");

                // parent and child both sets  their respective classes
                parent.classList.add("parent")
                child.classList.add("child")
                // span parent gets child and child gets elem content set
                child.innerHTML = elem.innerHTML;
                parent.appendChild(child)

                elem.innerHTML = "";
                elem.appendChild(parent);
            })
    }
    function valuesetter() {
        gsap.set("#nav a", { y: "-100%", opacity: 0 })
        gsap.set(".main-logo", { opacity: 0 })
        gsap.set("#home span .child", {
            y: "100%"
        })
        gsap.set("#home .row img", { opacity: 0 })

        document.querySelectorAll("#Visual>g").forEach((e) => {
            var character = e.querySelector('g > path, g > polyline');
            if (character) {
                character.style.strokeDasharray = character.getTotalLength() + 'px';
                character.style.strokeDashoffset = character.getTotalLength() + 'px';
            }
        });
    }
    function loaderanimation() {
        var tl = gsap.timeline();

        tl
            .from(" #loader .child span", {
                x: 350,
                stagger: .2,
                duration: 1,
                ease: Expo.easeInOut
            })
            .to("#loader .parent .child", {
                y: "-100%",
                duration: 1,
                ease: Expo.easeInOut
            })
            .to("#loader ", {
                height: 0,
                duration: 1,
                ease: Expo.easeInOut
            })
            .to("#green ", {
                height: '100%',
                top: 0,
                duration: 1,
                delay: -1,
                ease: Expo.easeInOut
            })
            .to("#green ", {
                height: "0%",
                duration: 1,
                delay: -.5,
                ease: Expo.easeInOut,
            })
            .to("#blue ", {
                height: '100%',
                top: 0,
                duration: 1,
                delay: -1.4,
                ease: Expo.easeInOut
            })
            .to("#blue ", {
                height: "0%",
                duration: 1,
                delay: -0.9,
                ease: Expo.easeInOut,
                onComplete: function () {
                    animateHomepage();
                }
            })
    }
    function animateHomepage() {

        var tl = gsap.timeline();

        tl
            .to("#home .parent .child", {
                y: 0,
                stagger: .1,
                duration: 2,
                delay: -1,
                ease: Expo.easeInOut
            })
            .to("#home .row img", {
                y: 0,
                opacity: 1,
                delay: -0.5,
                duration: 2,
                ease: Expo.easeInOut,
            }).to("#nav a", {
                y: 0,
                opacity: 1,
                stagger: .09,
                delay: -2,
                ease: Expo.easeInOut,
            }).to(".main-logo", {
                opacity: 1,
                delay: -1.4,
                duration: 3,
                ease: Expo.easeInOut,
                onComplete: function () {
                    animateSvg();
                }
            })
    }
    function animateSvg() {
        gsap.to("#Visual>g>g>path,#Visual>g>g>polyline", {
            strokeDashoffset: 0,
            duration: 2,
            ease: Expo.easeInOut,
            delay: -.7,
        })
    }


    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // use scoped selectors
            // const tl = gsap.timeline();
            // tl
            //     .from("#nav", 2, {
            //         opacity: 0,
            //         x: -20,
            //         ease: Expo.easeInOut
            //     })
            revealToSpa();
            valuesetter();
            loaderanimation();
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".workrow img",
                    start: "-380% 20%",
                    end: "10% 20%",
                    scrub: 1,
                    // markers: true
                }
            });
            tl.to(".workrow img", { rotation: 90, duration: 1 })
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
            const ll = gsap.timeline({
                scrollTrigger: {
                    trigger: "#price-img",
                    start: "-380% 20%",
                    end: "10% 20%",
                    scrub: 1,
                    // markers: true
                }
            });
            ll.to("#price-img", { rotation: 90, duration: 1 })

            // animation
            gsap.from("#services.workrow h1", {
                x: -800,
                opacity: 0,
                duration: 1.2,
                // delay: -2,
                ease: Expo.easeInOut,
                scrollTrigger: {
                    trigger: ".workrow"
                }
            });
            gsap.from(".employes .mates h1", {
                x: -800,
                opacity: 0,
                duration: 1.2,
                // delay: -2,
                ease: Expo.easeInOut,
                scrollTrigger: {
                    trigger: ".employes"
                }
            });
            // gsap.from(".pricing .mates h1", {
            //     x: -800,
            //     opacity: 0,
            //     duration: 1.2,
            //     // delay: -2,
            //     ease: Expo.easeInOut,
            //     scrollTrigger: {
            //         trigger: ".pricing"
            //     }
            // });
            gsap.from(".services-cards .div3 h1", {
                opacity: 0,
                y: 700,
                duration: 1.5,
                // delay: -2,
                ease: Expo.easeInOut,
                scrollTrigger: {
                    trigger: ".workrow"
                }
            });
            gsap.from(".btn-serv", {
                opacity: 0,
                duration: 4,
                // delay: -2,
                ease: Expo.easeInOut,
                scrollTrigger: {
                    trigger: ".workrow"
                }
            });
            gsap.from(".services-1", {
                opacity: 0,
                x: 700,
                duration: 0.7,
                stagger: 4,
                ease: Expo.easeInOut,
                scrollTrigger: {
                    trigger: ".workrow"
                }
            });
            gsap.from(".services-2", {
                opacity: 0,
                duration: 0.7,
                delay: 1,
                y: -700,
                stagger: 3,
                ease: Expo.easeInOut,
                scrollTrigger: {
                    trigger: ".workrow"
                }
            });
            gsap.from(".pricing .mates", {
                x: -800,
                opacity: 0,
                duration: 1.2,
                // delay: -2,
                ease: Expo.easeInOut,
                scrollTrigger: {
                    trigger: ".pricing"
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
                stagger: 0.4,
                duration: 1,
                delay: -1,
                ease: Expo.easeInOut,
                scrollTrigger: {
                    trigger: "#imgery"
                }
            });

        }, scrollRef);

        return () => ctx.revert();
    }, []);

    // scroll trigger

    return (
        <>
            <div id="main" ref={scrollRef} >
                <div id="loader">
                    <div id="topheading">
                        <h5 className="reveal">Service Agency</h5>
                        <h5 className="reveal">&copy; 2023</h5>
                    </div>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 306.37 78.37"><defs></defs><title>Asset 2</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><text class="cls-1" transform="translate(0 59.42)">value</text><text class="cls-1" transform="translate(196.68 59.42)">Labs</text><text class="cls-2" transform="translate(144.03 59.42) scale(1.56 1)">X</text></g></g></svg> */}
                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 805.88 501.15"><defs><style>.cls-1{"fill:#fff;"}.cls-2{"fill:#47bb8d;"}</style></defs><title>valuexlabs logo</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><polygon class="cls-1" points="0 501.15 138.18 262.98 227.86 435.21 195.99 501.15 0 501.15" /><polygon class="cls-1" points="805.88 501.15 667.7 262.98 578.02 435.21 609.89 501.15 805.88 501.15" /><path class="cls-2" d="M695.88,2.33a46.08,46.08,0,0,1-3.73,4.23L438.47,260.25a46.25,46.25,0,0,1-65.39,0h0l-.17-.18-.17-.16-97.83-97.83a46.23,46.23,0,0,1,0-65.39h0a46.23,46.23,0,0,1,65.39,0l55.42,55.42a14.21,14.21,0,0,0,20.1,0L567.93,0H117.63a36,36,0,0,0-32,52.48l207.49,403.3a83.62,83.62,0,0,0,74.36,45.37h73.47a83.62,83.62,0,0,0,74.94-46.51L715.34,52A36,36,0,0,0,695.88,2.33Z" /></g></g></svg> */}
                    <h1 className="reveal"><span>Value</span><span className="singh">X</span><span>is</span> <span>a</span></h1>
                </div>
                <div id="green"></div>
                <div id="blue"></div>
                <div id="home">
                    <div className="page1">
                        <div id="nav">
                            <div className="icon">
                                <i class="ri-menu-2-line"></i>
                                {/* <img src={burger} alt="" /> */}
                            </div>
                            <a href="#services">Services
                                <span id="line1" className="line"></span>
                                <span id="line2" className="line"></span>
                            </a>
                            <a href="#">Projects
                                <span id="line1" className="line"></span>
                                <span id="line2" className="line"></span>
                            </a>
                            <img className='main-logo' src={Logo} alt="" />
                            <a href="#">Pricing
                                <span id="line1" className="line"></span>
                                <span id="line2" className="line"></span>
                            </a>
                            <a href="#">Contact Us
                                <span id="line1" className="line"></span>
                                <span id="line2" className="line"></span>
                            </a>
                        </div>
                        <div className="row">
                            <h1 className="reveal" id='creative'>Creative</h1>
                            <div className="text">
                                <h5 className="reveal">CURRENTLY AVAILABLE FOR</h5>
                                <h5 className="reveal">FREELANCE WORLDWIDE</h5>
                            </div>
                            <div className="text">
                                <h5 className="reveal">MY LOCAL TIME 12:00</h5>
                                <h5 className="reveal">GMT (+5:30)</h5>
                            </div>
                        </div>
                        <div className="row">
                            <img src="./down-arrow.040970d7.svg" alt="" />
                            <div className="c-visual">
                                <svg id="Visual" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 35 870 305">
                                    <defs>
                                        <clipPath id="clip-path" transform="translate(31.09 32.56)">
                                            <path
                                                id="dot_clip"
                                                d="M250.12,82.48c1.15-15.33,9.2-33.72,13.79-44.83l-1.15-.77-30.27,10c-5.36,4.6-9.2,21.46-4.6,30.65C235.18,79.41,244.38,80.94,250.12,82.48Z"
                                                fill="none"
                                            ></path>
                                        </clipPath>
                                        <clipPath id="clip-path-2" transform="translate(31.09 32.56)">
                                            <path
                                                id="l_clip"
                                                d="M794.74,18,754.13,32.57,753,29.5,829.23,0l4.6,5.75L748,285.44l39.46-17.24.77,2.3-52.88,26.44c-7.66-2.3-13.41-9.2-21.07-19.92Z"
                                                fill="none"
                                            ></path>
                                        </clipPath>
                                        <clipPath id="clip-path-3" transform="translate(31.09 32.56)">
                                            <path
                                                id="i_clip"
                                                d="M207.78,123.76l-32.18,9.58-.77-2.3,66.28-21.84,4.21.77L192.45,286.22l39.46-19.92,1.15,2.3L183.25,297c-9.2-6.9-13.79-11.88-20.69-23.37Z"
                                                fill="none"
                                            ></path>
                                        </clipPath>
                                        <clipPath id="clip-path-4" transform="translate(31.09 32.56)">
                                            <path
                                                id="a_clip"
                                                d="M654.51,105.36c14.56-1.92,41,7.66,54,14.18L661,277.78l38.7-16.09v3.06l-72.8,32.18c-1.92-1.53-5.37-4.6-6.13-6.9l46.36-150.58H666c-11.88,29.89-78.16,131.42-95.4,154.41-21.84-3.83-35.25-29.5-35.25-49.43C535.35,182,626.93,106.9,654.51,105.36ZM583.25,263.22c3.07-1.15,67.82-95.79,78.93-123.76l4.21-8.05c-10.35-6.13-23-11.11-36.78-9.58-18.39,0-57.09,85.44-57.09,118C572.52,252.88,575.58,262.07,583.25,263.22Z"
                                                fill="none"
                                            ></path>
                                        </clipPath>
                                        <clipPath id="clip-path-5" transform="translate(31.09 32.56)">
                                            <path
                                                id="u_clip"
                                                d="M409.3,116.09l-36.4,18.39-1.53-2.3L420,106.13c9.58,3.83,16.48,10.34,22.22,19.16,0,22.22-44.45,128-44.45,141.38,0,6.51,3.06,10,10,11.49,2.68-.38,65.14-92.34,94.64-156.71l3.45-8,39.08-2.68L493.21,277l37.16-14.56.38,2.3L459.1,296.93c-1.91-1.53-5.36-4.6-6.13-6.9l54-168.57h-1.15c-29.5,66.67-87.74,173.18-113.41,175.48-19.16-8.05-28.74-12.64-28.74-30.27C363.71,243.68,408.54,128.35,409.3,116.09Z"
                                                fill="none"
                                            ></path>
                                        </clipPath>
                                        <clipPath id="clip-path-6" transform="translate(31.09 32.56)">
                                            <path
                                                id="s_clip"
                                                d="M286.7,275.1c15.71,0,31.8-6.9,39.85-18,3.83-31-60.92-51.34-55.94-93.87,3.83-29.12,41.38-64.37,72-64.37,14.56,0,30.65,1.53,35.25,10.34l-7.66,24.52h-2.68c-12.64-10.34-29.12-22.61-37.93-22.61-18.39,0-29.12,9.58-38.7,20.31,0,37.17,57.47,67.43,55.56,83.91-5.36,41.76-36.78,69-78.16,78.54-13,3.07-41.38-10-41.76-24.52l20.31-17.62C255.67,265.14,273.68,273.57,286.7,275.1Z"
                                                fill="none"
                                            ></path>
                                        </clipPath>
                                        <clipPath id="clip-path-7" transform="translate(31.09 32.56)">
                                            <path
                                                id="v_clip"
                                                d="M197.77,86c-16,78.5-114.7,181.76-183.67,222.16a3.33,3.33,0,0,1-3-3.43c4.57-2.67,9.15-5.72,14.1-9.15-11-5-19.43-16.76-25.15-33.15L69.35,43.72,22.86,64.3,21,59.35l80-36.58,4.57-2.29c3.43,2.29,5.33,6.1,4.57,11.81-12.56,71.64-56,176.81-73.91,248.07a5.41,5.41,0,0,0,3.43,4.95c67.45-51.06,141.75-140.61,149-213.77-11.43-15.24-30.48-31.25-46.49-29,0-3.43,25.91-30.87,28.2-30.87,13,0,33.15,12.19,33.15,38.87C203.48,60.49,201.2,71.92,197.77,86Z"
                                                fill="none"
                                            ></path>
                                        </clipPath>
                                    </defs>
                                    <g id="dot">
                                        <g clipPath="url(#clip-path)">
                                            <path
                                                id="dot_path"
                                                d="M235.53,91.06s-3.65-21.72,18.78-61"
                                                transform="translate(31.09 32.56)"
                                                fill="none"
                                                stroke="#52e0ed"
                                                strokeMiterlimit="10"
                                                strokeWidth="34"
                                                style={{ strokeDashoffset: 0, strokeDasharray: 'none' }}
                                            />
                                        </g>
                                    </g>
                                    <g id="l">
                                        <g clipPath="url(#clip-path-2)">
                                            <polyline
                                                id="l_path"
                                                points="820.4 302.62 755.9 334.12 843.9 39.12 784.4 63.62"
                                                fill="none"
                                                stroke="#52e0ed"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="42"
                                                style={{ strokeDashoffset: 0, strokeDasharray: 'none' }}
                                            />
                                        </g>
                                    </g>
                                    <g id="i">
                                        <g clipPath="url(#clip-path-3)">
                                            <polyline
                                                id="i_path"
                                                points="207.9 165.12 254.9 147.12 201.9 329.12 262.9 299.12"
                                                fill="none"
                                                stroke="#52e0ed"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="42"
                                                style={{ strokeDashoffset: 0, strokeDasharray: 'none' }}
                                            />
                                        </g>
                                    </g>
                                    <g id="a">
                                        <g clipPath="url(#clip-path-4)">
                                            <path
                                                id="a_path"
                                                d="M671.81,121.56l-104,173s-28-39-5-98,114.34-107,123.5-80.5c9,26-49.5,180.5-49.5,180.5l67.5-35.5"
                                                transform="translate(31.09 32.56)"
                                                fill="none"
                                                stroke="#52e0ed"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="42"
                                                style={{ strokeDashoffset: 0, strokeDasharray: 'none' }}
                                            />
                                        </g>
                                    </g>
                                    <g id="u">
                                        <g clipPath="url(#clip-path-5)">
                                            <path
                                                id="u_path"
                                                d="M371.81,132.56l64-31-68,200,34-7s80-120,109-181l15-4-55,187,60-33"
                                                transform="translate(31.09 32.56)"
                                                fill="none"
                                                stroke="#52e0ed"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="42"
                                                style={{ strokeDashoffset: 0, strokeDasharray: 'none' }}
                                            />
                                        </g>
                                    </g>
                                    <g id="s">
                                        <g clipPath="url(#clip-path-6)">
                                            <path
                                                id="s_path"
                                                d="M232.31,261.06s20.5,20.5,32.5,22.5,57-6,69-39-53-64-53-82c0,0,19.5-74.5,97.5-41.5"
                                                transform="translate(31.09 32.56)"
                                                fill="none"
                                                stroke="#52e0ed"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="42"
                                                style={{ strokeDashoffset: 0, strokeDasharray: 'none' }}
                                            />
                                        </g>
                                    </g>
                                    <g id="V">
                                        <g clipPath="url(#clip-path-7)">
                                            <path
                                                id="v_path"
                                                d="M21.31,59.06l71-32-5,26L26,246.56l-8.69,57.5s85-71,122-114c28-34,100.21-133.4,12-171"
                                                transform="translate(31.09 32.56)"
                                                fill="none"
                                                stroke="#52e0ed"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="70"
                                                style={{ strokeDashoffset: 0, strokeDasharray: 'none' }}
                                            />
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <h1 id='developer' className="reveal">Developers</h1>
                        </div>
                        <div className="box-img">
                            <div className="button">
                                <Link to={'/contact'}>
                                    <button class="btn">Let's Build A Website
                                    </button>
                                </Link>
                            </div>
                            <div className="img">
                                <img decoding="async" src="https://danishkhan.in/wp-content/uploads/2023/06/999-min.png" class="attachment-full size-full wp-image-825" alt="" loading="lazy" srcSet="https://danishkhan.in/wp-content/uploads/2023/06/999-min.png 1305w, https://danishkhan.in/wp-content/uploads/2023/06/999-min-300x180.png 300w, https://danishkhan.in/wp-content/uploads/2023/06/999-min-1024x613.png 1024w, https://danishkhan.in/wp-content/uploads/2023/06/999-min-768x460.png 768w, https://danishkhan.in/wp-content/uploads/2023/06/999-min-650x389.png 650w, https://danishkhan.in/wp-content/uploads/2023/06/999-min-600x359.png 600w" sizes="(max-width: 1305px) 100vw, 1305px" />
                            </div>
                        </div>
                    </div>
                    <div id="services">
                        <div className="workrow" >
                            <h1>Our Serv<span>i</span>ces<div className="mini">(05)</div>
                            </h1>
                            <img width="60" height="95" alt="" decoding="async" data-src="https://dzinr.co.in/wp-content/uploads/2023/07/Arrow-1-1.svg" src="https://dzinr.co.in/wp-content/uploads/2023/07/Arrow-1-1.svg" />
                        </div>
                        <div className="services-cards">
                            <div className="div3">
                                <div>
                                    <h1>
                                        Everything You need for a
                                        World-class <br />
                                        <span>
                                            <Typewriter
                                                options={{
                                                    strings: ['Brand.', 'Business.', "Website."],
                                                    autoStart: true,
                                                    loop: true,
                                                }}
                                            />
                                        </span>
                                    </h1>
                                </div>
                                <div className='btn-serv'>
                                    <Link to={'/contact'}>
                                        <button class="btn">Let's Build A Website
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="div1 services-1">
                                <Services class="card-1" img={img1} title="Product Development" desc="High Performance
We deliver exceptional websites that guarantee superior results with lightning-fast speed and flawless functionality." />
                                <Services class="card-1" img={img3} title="Custom-Code Expertise" desc="We bring your unique ideas to life with unmatched precision, offering dedicated support and cutting-edge coding solutions that set your website apart." />
                            </div>
                            <div className="div2 services-2">
                                <Services class="card-1" img={img2} title="Designing" desc="Our transformative designs revolutionize user experiences, creating intuitive and visually stunning interfaces that drive unmatched satisfaction and conversions." />
                                <Services class="card-1" img={img4} title="Free Training" desc="We equip you with the knowledge and skills to confidently manage and update your website, putting you in control of your online success." />
                            </div>
                        </div>
                    </div>
                    <div className='employes'>
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
                                <div className="imgcntnr"><span>AMAN</span></div>
                                <div className="imgcntnr"><span>DAKSH</span></div>
                                <div className="imgcntnr"><span>ARJUN</span></div>
                            </div>
                        </div>
                    </div>
                    <div className='pricing'>
                        <div className="mates" >
                            <h1>Our Pric<span>i</span>ng<div className="mini">(🟢)</div>
                            </h1>
                            <img id='price-img' width="60" height="95" alt="" decoding="async" data-src="https://dzinr.co.in/wp-content/uploads/2023/07/Arrow-1-1.svg" src="https://dzinr.co.in/wp-content/uploads/2023/07/Arrow-1-1.svg" />
                        </div>
                        <div className="pricing-card">
                            <Pricing />
                        </div>
                    </div>
                    <Work />
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Home
