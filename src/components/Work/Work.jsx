import React, { useEffect } from 'react'
import './Work.css'


const Work = () => {
    function cardShow() {
        document.querySelectorAll(".cnt")
            .forEach(function (cnt) {
                var showingimg;
                cnt.addEventListener("mousemove", function (dets) {
                    document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity = 1;
                    showingimg = dets.target;
                    document.querySelector("#cursor").children[dets.target.dataset.index].style.transform = `translate(${dets.clientX}px,${dets.clientY - 30}px)`;
                    showingimg.style.filter = 'grayscale(1)'
                    document.querySelector("#work").style.backgroundColor = "#" + dets.target.dataset.color;
                })
                cnt.addEventListener("mouseleave", function (dets) {
                    document.querySelector("#cursor").children[showingimg.dataset.index].style.opacity = 0;
                    showingimg.style.filter = 'grayscale(0)'
                    document.querySelector("#work").style.backgroundColor = "#fff";
                })
                document.querySelector(".live").addEventListener("mousemove",()=>{
                    document.querySelector("#cursor").children[showingimg.dataset.index].style.opacity = 0;
                })
                document.querySelectorAll(".live-2").addEventListener("mousemove",()=>{
                    document.querySelector("#cursor").children[showingimg.dataset.index].style.opacity = 0;
                })
            })

    }

    return (
        <div id="work">
            <div className="workrow">
                <h1>Feat Wo<span>r</span>k<div className="mini">(05)</div>
                </h1>
                <img width="60" height="95" alt="" decoding="async" data-src="https://dzinr.co.in/wp-content/uploads/2023/07/Arrow-1-1.svg" src="https://dzinr.co.in/wp-content/uploads/2023/07/Arrow-1-1.svg" />
            </div>
            <div id="images" onMouseMove={cardShow}>
                <div className="cnt cnt-1">
                    <img data-color="d7ddf2" data-index="0" src="https://abhishekjha.me/aeizei.7edf201c.png" alt="" />
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
                <div className="cnt cnt-5">
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
