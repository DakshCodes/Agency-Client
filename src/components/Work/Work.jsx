import React, { useEffect, useLayoutEffect } from 'react'
import './Work.css'
import './mediawork.css'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { gsap } from "gsap";
import { Expo } from 'gsap/dist/gsap';
import project1a from '../../assets/Projects/Projects-1.png'
import project2a from '../../assets/Projects/Project2a.png'
import project1b from '../../assets/Projects/Project-1a.png'
import project1c from '../../assets/Projects/Project-1b.png'
import project1d from '../../assets/Projects/Project-1c.png'
import project3a from '../../assets/Projects/Project-3a.jpg'
import project3b from '../../assets/Projects/Project-3b.jpg'
import project3c from '../../assets/Projects/Project-3c.jpg'
import project3d from '../../assets/Projects/Project-3d.jpg'
import project4a from '../../assets/Projects/Project-4a.png'
import project4b from '../../assets/Projects/Project-4b.png'
import project4c from '../../assets/Projects/Project-4c.png'
import project4d from '../../assets/Projects/Project-4d.png'
import project4e from '../../assets/Projects/Project-4e.png'


const Work = () => {
    // function cardShow() {
    //     document.querySelectorAll(".cnt")
    //         .forEach(function (cnt) {
    //             var showingimg;
    //             cnt.addEventListener("mousemove", function (dets) {
    //                 document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity = 1;
    //                 showingimg = dets.target;
    //                 document.querySelector("#cursor").children[dets.target.dataset.index].style.transform = `translate(${dets.clientX}px,${dets.clientY - 30}px)`;
    //                 showingimg.style.filter = 'grayscale(1)'
    //                 document.querySelector("#work").style.backgroundColor = "#" + dets.target.dataset.color;
    //             })
    //             cnt.addEventListener("mouseleave", function (dets) {
    //                 document.querySelector("#cursor").children[showingimg.dataset.index].style.opacity = 0;
    //                 showingimg.style.filter = 'grayscale(0)'
    //                 document.querySelector("#work").style.backgroundColor = "#fff";
    //             })
    //             document.querySelector(".live").addEventListener("mousemove", () => {
    //                 document.querySelector("#cursor").children[showingimg.dataset.index].style.opacity = 0;
    //             })
    //             document.querySelectorAll(".live-2").addEventListener("mousemove", () => {
    //                 document.querySelector("#cursor").children[showingimg.dataset.index].style.opacity = 0;
    //             })
    //         })

    // }
    const scrollRef = React.createRef();
    gsap.registerPlugin(ScrollTrigger);
    useLayoutEffect(() => {
        gsap.set(".cnt-1", {
            x: -80
        })
        gsap.set(".cnt-2", {
            x: 80
        })
        gsap.set(".cnt-3", {
            x: -80
        })
        gsap.set(".cnt-4", {
            x: 80
        })
        gsap.set(".cnt-5", {
            x: -80
        })
        let ctx = gsap.context(() => {

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#work-2 .workrow-2 img",
                    start: "-380% 20%",
                    end: "10% 20%",
                    scrub: 1,
                    // markers: true
                }
            });
            tl.to("#work-2 .workrow-2 img", { rotation: 90, duration: 1 })

            const tm = gsap.timeline({
                scrollTrigger: {
                    trigger: ".cnt-1",
                    start: "-30% 10%",
                    end: "30% 20%",
                    scrub: 1,
                    // markers: true
                }
            });
            const tn = gsap.timeline({
                scrollTrigger: {
                    trigger: ".cnt-3",
                    start: "-50% 10%",
                    end: "-10% 20%",
                    scrub: 1,
                    // markers: true
                }
            });
            const to = gsap.timeline({
                scrollTrigger: {
                    trigger: ".cnt-4",
                    start: "-30% 10%",
                    end: "40% 20%",
                    scrub: 1,
                    // markers: true
                }
            });
            tm.to(".cnt-1", { x: 30, duration: 0.1 })
            tm.to(".cnt-2", { x: -30, duration: 0.1 })
            tn.to(".cnt-3", { x: 30, duration: 0.1 })
            to.to(".cnt-4", { x: -30, duration: 0.1 })
            to.to(".cnt-5", { x: 30, duration: 0.1 })




        }, scrollRef);

        return () => ctx.revert();
    }, []);
    function cardShow() {
        const cursor = document.querySelector("#cursor");

        if (!cursor) {
            return; // Cursor element not found
        }

        let showingimg;

        document.querySelectorAll(".cnt").forEach(function (cnt) {
            cnt.addEventListener("mousemove", function (dets) {
                const targetIndex = dets.target.dataset.index;

                if (targetIndex === undefined) {
                    return; // No dataset index, skip
                }

                const cursorChild = cursor.children[targetIndex];
                console.log(cursorChild)
                if (cursorChild) {
                    cursorChild.style.opacity = 1;
                    cursorChild.style.transform = `translate(${dets.clientX}px,${dets.clientY - 30}px)`;
                }

                showingimg = dets.target;
                showingimg.style.filter = 'grayscale(1)';
                document.querySelector("#work").style.backgroundColor = "#" + dets.target.dataset.color;
            });

            cnt.addEventListener("mouseleave", function () {
                cnt.addEventListener("mouseleave", function () {
                    if (showingimg) {
                        const targetIndex = showingimg.dataset.index;
                        if (targetIndex !== undefined) {
                            const cursorChild = cursor.children[targetIndex];
                            if (cursorChild) {
                                cursorChild.style.opacity = 0;
                            }
                        }

                        showingimg.style.filter = 'grayscale(0)';
                        document.querySelector("#work").style.backgroundColor = "#fff";
                    }
                });
            });

            // Rest of your code...
        });

        // Move these outside the loop if they are not intended to be inside each .cnt element
        document.querySelector(".live").addEventListener("mousemove", () => {
            if (showingimg) {
                const targetIndex = showingimg.dataset.index;
                if (targetIndex === undefined) {
                    return; // No dataset index, skip
                }

                const cursorChild = cursor.children[targetIndex];
                if (cursorChild) {
                    cursorChild.style.opacity = 0;
                }
            }
        });

        document.querySelectorAll(".live-2").forEach((elem) => {
            elem.addEventListener("mousemove", () => {
                if (showingimg) {
                    const targetIndex = showingimg.dataset.index;
                    if (targetIndex === undefined) {
                        return; // No dataset index, skip
                    }

                    const cursorChild = cursor.children[targetIndex];
                    if (cursorChild) {
                        cursorChild.style.opacity = 0;
                    }
                }
            });
        });
    }

    useEffect(() => {
        cardShow();
    }, []); // Adding an empty dependency array will ensure the effect runs once after the initial render


    return (
        <div id="work-2" ref={scrollRef}>
            <div className="workrow-2">
                <h1>Feat Wo<span>r</span>k<div className="mini">(05)</div>
                </h1>
                <img id='workk' width="60" height="95" alt="" decoding="async" data-src="https://dzinr.co.in/wp-content/uploads/2023/07/Arrow-1-1.svg" src="https://dzinr.co.in/wp-content/uploads/2023/07/Arrow-1-1.svg" />
            </div>
            <div id="images" onMouseMove={cardShow}>
                <div className="div1-cnt">
                    <div className="cnt cnt-1">
                        <img data-color="bae0d4" data-index="0" src={project1a} alt="" />
                        <a href='https://github.com/DakshCodes/Faimly-Circle-Client' target={'_blank'}>
                            <div class="live">
                                <div class="live-wrapper">
                                    <div class="live-text">Code</div>
                                    <span class="live-icon">
                                        <i class="ri-github-line"></i>
                                    </span>
                                </div>
                            </div>
                        </a>
                        <a target={"_blank"} href="https://faimly-circle-client.vercel.app/" >
                            <div class="live-2">
                                <div class="live-wrapper-2">
                                    <div class="live-text">Live</div>
                                    <span class="live-icon">
                                        <i class="ri-live-line"></i>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="cnt cnt-2">
                        <img data-color="bae0d4" data-index="1" src={project3d} alt="" />
                        <a href='https://github.com/amanbairagi30/ecomm-react' target={'_blank'}>
                            <div class="live">
                                <div class="live-wrapper">
                                    <div class="live-text">Code</div>
                                    <span class="live-icon">
                                        <i class="ri-github-line"></i>
                                    </span>
                                </div>
                            </div>
                        </a>
                        <a target={"_blank"} href="https://ecomm-react-new.onrender.com/admin">
                            <div class="live-2">
                                <div class="live-wrapper-2">
                                    <div class="live-text">Live</div>
                                    <span class="live-icon">
                                        <i class="ri-live-line"></i>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>                
                    <div className="cnt cnt-3">
                        <img data-color="bae0d4" data-index="3" src={project4a} alt="" />
                        <a href='https://github.com/DakshCodes/TechPedia-Client' target={'_blank'}>
                            <div class="live">
                                <div class="live-wrapper">
                                    <div class="live-text">Code</div>
                                    <span class="live-icon">
                                        <i class="ri-github-line"></i>
                                    </span>
                                </div>
                            </div>
                        </a>
                        <a target={"_blank"} href="https://techpedia.vercel.app/">
                            <div class="live-2">
                                <div class="live-wrapper-2">
                                    <div class="live-text">Live</div>
                                    <span class="live-icon">
                                        <i class="ri-live-line"></i>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="cnt cnt-4">
                        <img data-color="bae0d4" data-index="2" src={project2a} alt="" />
                        <a href='https://github.com/DakshCodes/Watch-Page-DC' target={'_blank'}>
                            <div class="live">
                                <div class="live-wrapper">
                                    <div class="live-text">Code</div>
                                    <span class="live-icon">
                                        <i class="ri-github-line"></i>
                                    </span>
                                </div>
                            </div>
                        </a>
                        <a target={"_blank"} href="https://watch-page-dc.vercel.app/">
                            <div class="live-2">
                                <div class="live-wrapper-2">
                                    <div class="live-text">Live</div>
                                    <span class="live-icon">
                                        <i class="ri-live-line"></i>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div id="cursor">
                <div>
                    <div className="crow">
                        <div className="ccircle"></div>
                        <div className="ccapsule">
                            FaimlyCircle
                        </div>
                    </div>
                    <div id="elem">
                        <img src={project1a} alt="" />
                        <img src={project1b} alt="" />
                        <img src={project1c} alt="" />
                        <img src={project1d} alt="" />
                    </div>
                </div>
                <div>
                    <div className="crow">
                        <div className="ccircle"></div>
                        <div className="ccapsule">
                            Ecomme
                        </div>
                    </div>
                    <div id="elem">
                        <img src={project3a} alt="" />
                        <img src={project3b} alt="" />
                        <img src={project3c} alt="" />
                    </div>
                </div>
                <div>
                    <div className="crow">
                        <div className="ccircle"></div>
                        <div className="ccapsule">
                            MoonWatch
                        </div>
                    </div>
                    <div id="elem">
                        <img src={project2a} alt="" />
                        <img src={project2a} alt="" />
                    </div>
                </div>
                <div>
                    <div className="crow">
                        <div className="ccircle"></div>
                        <div className="ccapsule">
                            TechPedia
                        </div>
                    </div>
                    <div id="elem">
                        <img src={project4a} alt="" />
                        <img src={project4b} alt="" />
                        <img src={project4c} alt="" />
                        <img src={project4d} alt="" />
                        <img src={project4e} alt="" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Work
