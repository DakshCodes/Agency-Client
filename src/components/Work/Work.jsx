import React, { useEffect, useLayoutEffect } from 'react'
import './Work.css'
import './mediawork.css'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { gsap } from "gsap";
import { Expo } from 'gsap/dist/gsap';


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
                    start: "-30% 10%",
                    end: "20% 20%",
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
            tm.to(".cnt-1", { x: 20, duration: 0.1})
            tm.to(".cnt-2", { x: -20, duration: 0.1})
            tn.to(".cnt-3", { x:20, duration: 0.1})
            to.to(".cnt-4", { x:-20, duration: 0.1})



        }, scrollRef);

        return () => ctx.revert();
    }, []);
    function cardShow() {
        document.querySelectorAll(".cnt").forEach(function (cnt) {
            var showingimg;
            cnt.addEventListener("mousemove", function (dets) {
                // Your mousemove logic here...
                document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity = 1;
                showingimg = dets.target;
                document.querySelector("#cursor").children[dets.target.dataset.index].style.transform = `translate(${dets.clientX}px,${dets.clientY - 30}px)`;
                showingimg.style.filter = 'grayscale(1)'
                document.querySelector("#work").style.backgroundColor = "#" + dets.target.dataset.color;
            });
            cnt.addEventListener("mouseleave", function (dets) {
                // Your mouseleave logic here...
                document.querySelector("#cursor").children[showingimg.dataset.index].style.opacity = 0;
                showingimg.style.filter = 'grayscale(0)'
                document.querySelector("#work").style.backgroundColor = "#fff";
            });
            // Rest of your code...
        });

        // Move these outside the loop if they are not intended to be inside each .cnt element
        document.querySelector(".live").addEventListener("mousemove", () => {
            // Your mousemove logic...
            document.querySelector("#cursor").children[showingimg.dataset.index].style.opacity = 0;
        });
        document.querySelectorAll(".live-2").forEach((elem) => {
            elem.addEventListener("mousemove", () => {
                // Your mousemove logic...
                document.querySelector("#cursor").children[showingimg.dataset.index].style.opacity = 0;
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
                        <img data-color="bae0d4" data-index="1" src="https://abhishekjha.me/display.835f9d62.png" alt="" />
                        <div class="live">
                            <div class="live-wrapper">
                                <div class="live-text">Code</div>
                                <span class="live-icon">
                                    <i class="ri-github-line"></i>
                                </span>
                            </div>
                        </div>
                        <div class="live-2">
                            <div class="live-wrapper-2">
                                <div class="live-text">Live</div>
                                <span class="live-icon">
                                    <i class="ri-live-line"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="cnt cnt-2">
                        <img data-color="bae0d4" data-index="1" src="https://abhishekjha.me/display.835f9d62.png" alt="" />
                        <div class="live">
                            <div class="live-wrapper">
                                <div class="live-text">Code</div>
                                <span class="live-icon">
                                    <i class="ri-github-line"></i>
                                </span>
                            </div>
                        </div>
                        <div class="live-2">
                            <div class="live-wrapper-2">
                                <div class="live-text">Live</div>
                                <span class="live-icon">
                                    <i class="ri-live-line"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="div2-cnt">
                    <div className="cnt cnt-3">
                        <img data-color="bae0d4" data-index="1" src="https://abhishekjha.me/display.835f9d62.png" alt="" />
                        <div class="live">
                            <div class="live-wrapper">
                                <div class="live-text">Code</div>
                                <span class="live-icon">
                                    <i class="ri-github-line"></i>
                                </span>
                            </div>
                        </div>
                        <div class="live-2">
                            <div class="live-wrapper-2">
                                <div class="live-text">Live</div>
                                <span class="live-icon">
                                    <i class="ri-live-line"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="cnt cnt-4">
                        <img data-color="bae0d4" data-index="1" src="https://abhishekjha.me/display.835f9d62.png" alt="" />
                        <div class="live">
                            <div class="live-wrapper">
                                <div class="live-text">Code</div>
                                <span class="live-icon">
                                    <i class="ri-github-line"></i>
                                </span>
                            </div>
                        </div>
                        <div class="live-2">
                            <div class="live-wrapper-2">
                                <div class="live-text">Live</div>
                                <span class="live-icon">
                                    <i class="ri-live-line"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="cursor">
                <div>
                    <div className="crow">
                        <div className="ccircle"></div>
                        <div className="ccapsule">
                            Behance
                        </div>
                    </div>
                    <div id="elem">
                        <img src="https://abhishekjha.me/display.835f9d62.png" alt="" />
                        <img src="https://abhishekjha.me/display.835f9d62.png" alt="" />
                        <img src="https://abhishekjha.me/display.835f9d62.png" alt="" />
                        <img src="https://abhishekjha.me/display.835f9d62.png" alt="" />
                        <img src="https://abhishekjha.me/display.835f9d62.png" alt="" />
                    </div>
                </div>
                <div>
                    <div className="crow">
                        <div className="ccircle"></div>
                        <div className="ccapsule">
                            Behance
                        </div>
                    </div>
                    <div id="elem">
                        <img src="https://abhishekjha.me/display.835f9d62.png" alt="" />
                        <img src="https://abhishekjha.me/display.835f9d62.png" alt="" />
                        <img src="https://abhishekjha.me/display.835f9d62.png" alt="" />
                        <img src="https://abhishekjha.me/display.835f9d62.png" alt="" />
                        <img src="https://abhishekjha.me/display.835f9d62.png" alt="" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Work
