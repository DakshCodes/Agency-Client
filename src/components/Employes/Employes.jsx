import React from 'react'
import { Link } from 'react-router-dom'
import './Employes.css'

const Employes = () => {
    return (
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
    )
}

export default Employes
