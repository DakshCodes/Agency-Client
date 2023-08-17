import React from 'react'
import './Pricing.css';
import { AiOutlineCheck } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Pricing = () => {
    return (<div className='parent-pricing'>
        <div className='div1'>
            <h1>
                Flexible Payment Options Tailored for <br /> Businesses of
                <span>All Sizes.</span>
            </h1>
        </div>
        <div className='div2'>
            <div class="container">
                {/* <span className='span'></span> */}
                <div class="box">
                    <h1 class="title">
                        Essential
                        <br />
                        <span>
                            Need a fix?
                        </span>
                    </h1>
                    <div className="price">
                        <span>₹ 1500/hour</span>
                    </div>
                    <div className="proccess">
                        <div className="points">
                            <p>
                                <AiOutlineCheck />
                                Need a few pages only?
                            </p>
                            <p>
                                <AiOutlineCheck />
                                Unclear scope of work
                            </p>
                            <p>
                                <AiOutlineCheck />
                                Fast Turnaround
                            </p>
                            <p>
                                <AiOutlineCheck />
                                Add products
                            </p>
                            <p>
                                <AiOutlineCheck />
                                Fix something in the website
                            </p>
                            <p>
                                <AiOutlineCheck />
                                Cost Effective
                            </p>
                        </div>
                        <Link to={'/contact'}>
                            <button class="btn">Start Building
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div class="container container2">
                <div class="box2">
                    <h1 class="title">
                        Project
                        Based?
                        <br />
                        <span>
                            Individuals and Small Businesses
                        </span>
                    </h1>
                    <div className="price">
                        <span>Custom Quote</span>
                    </div>
                    <div className="proccess2">
                        <div className="points">
                            <p>
                                <AiOutlineCheck />
                                A full-fledged website
                            </p>
                            <p>
                                <AiOutlineCheck />
                                Clear Scope of Work
                            </p>
                            <p>
                                <AiOutlineCheck />
                                Unlimited Products or services
                            </p>
                            <p>
                                <AiOutlineCheck />
                                Basic SEO
                            </p>
                            <p>
                                <AiOutlineCheck />
                                Advance Functionality
                            </p>
                            <p>
                                <AiOutlineCheck />
                                Easily Scalable
                            </p>
                        </div>
                        <Link to={'/contact'}>
                            <button class="btn">Start Building
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="box">
                    <h1 class="title">
                        Growth
                        <br />
                        <span>
                            For established companies
                        </span>
                    </h1>
                    <div className="price">
                        <span>Custom Quote</span>
                    </div>
                    <div className="proccess">
                        <div className="points">
                            <p>
                                <AiOutlineCheck />
                                Data-Driven Designs
                            </p>
                            <p>
                                <AiOutlineCheck />
                                Clear Scope of Work
                            </p>
                            <p>
                                <AiOutlineCheck />
                                Custom Solutions
                            </p>
                            <p>
                                <AiOutlineCheck />
                                High Performance
                            </p>
                            <p>
                                <AiOutlineCheck />
                                Advanced Integrations
                            </p>
                            <p>
                                <AiOutlineCheck />
                                Priority Support
                            </p>
                        </div>
                        <Link to={'/contact'}>
                            <button class="btn">Start Building
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div class="container-4">
                <span className='span'></span>
                <div class="box">
                    <h1 class="title">
                        All of our project includes:
                    </h1>
                    <div className="price">
                        <span>Custom Quote</span>
                    </div>
                    <div className="proccess-4">
                        <div className="points">
                            <div className="point-1">
                                <p>
                                    <AiOutlineCheck />
                                    Performance Optimisation
                                </p>
                                <p>
                                    <AiOutlineCheck />
                                    Responsive Design
                                </p>
                                <p>
                                    <AiOutlineCheck />
                                    Client-Centric Approach
                                </p>
                                <p>
                                    <AiOutlineCheck />
                                    Project Management on Trello
                                </p>
                                <p>
                                    <AiOutlineCheck />
                                    Rapid Turnarounds
                                </p>
                            </div>
                            <div className="point-2">
                                <p>
                                    <AiOutlineCheck />
                                    Engaging Interactive Elements
                                </p>
                                <p>
                                    <AiOutlineCheck />
                                    Free Training
                                </p>
                                <p>
                                    <AiOutlineCheck />
                                    Innovative UX/UI Design
                                </p>
                                <p>
                                    <AiOutlineCheck />
                                    Email & Live chat.
                                </p>
                                <p>
                                    <AiOutlineCheck />
                                    Flexibility and Scalability
                                </p>
                            </div>
                            <div className="point-3">
                                <p>
                                    <AiOutlineCheck />
                                    Custom-Code Expertise
                                </p>
                                <p>
                                    <AiOutlineCheck />
                                    Free Support
                                </p>
                            </div>
                        </div>
                        <Link to={'/contact'}>
                            <button class="btn">Start Building
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Pricing
