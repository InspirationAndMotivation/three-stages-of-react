import React from 'react';
import './portfolio.page.scss';
const pAbout1 =
    'I will help you with finging a solution and solve your problems, ' +
    'We use process design to create digital products. Besides that also ' +
    'help their business.';
const pAbout2 =
    'We use process design to create digital products. Besides that also help their business.';
const visualDesigner =
    'A visual designs for a variety of platforms, which may include Internet and Internet sites' +
    ', games, movies, kiosks. In short, they create the concepts.';

const PortfolioPage = () => {
    return (
        <div>
            <div className="bg-image">
                <div className="container">
                    <div className="navbar">
                        <ul>
                            <li>
                                <a id="logo">Binjan</a>
                            </li>
                            <li>
                                <a href="#about" className="navbar-button">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#experience" className="navbar-button">
                                    Experience
                                </a>
                            </li>
                            <li>
                                <a href="#works" className="navbar-button">
                                    Works
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="navbar-button">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a id="phone-number">+001 (313) 345 678</a>
                            </li>
                            <li>
                                <button className="phone-button"></button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="about-section">
                <table width="100%" cellSpacing={0} cellPadding={5}>
                    <tr>
                        <td valign="top">
                            <div className="btn-group">
                                <div className="websites-button">
                                    <button>
                                        <p className="header-button">Website design</p>
                                        <p className="text-button">76 Projects</p>
                                    </button>
                                </div>
                                <div className="mobile-app-button">
                                    <button>
                                        <p className="header-button">Mobile App Design</p>
                                        <p className="text-button">63 Projects</p>
                                    </button>
                                </div>
                                <div className="brand-button">
                                    <button>
                                        <p className="header-button">Brand Identity</p>
                                        <p className="text-button">47 Projects</p>
                                    </button>
                                </div>
                            </div>
                        </td>
                        <td valign="top">
                            <h2>What do I help?</h2>
                            <p>{pAbout1}</p>
                            <p>{pAbout2}</p>
                            <div className="statistics">
                                <div className="stat-numbers">
                                    <h2>285+</h2>
                                    <a>Project Completed</a>
                                </div>
                                <div className="stat-numbers">
                                    <h2>190+</h2>
                                    <a>Happy Clients</a>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
            <div className="experience-section">
                <h2>My work experience</h2>
                <div className="experience-table">
                    <table cellSpacing={0} cellPadding={5}>
                        <tr>
                            <td className="job-name">
                                <h3>Self-Employed, Brisbane</h3>
                                <p>Sep 2016 - Aug 2014</p>
                            </td>
                            <td className="job-description turq">
                                <h3>Visual Designer</h3>
                                <p>{visualDesigner}</p>
                            </td>
                        </tr>
                        <tr>
                            <td className="job-name">
                                <h3>New Man Services</h3>
                                <p>Jan 2017 - Mar 2018</p>
                            </td>
                            <td className="job-description yell">
                                <h3>UI/UX Designer</h3>
                                <p>{visualDesigner}</p>
                            </td>
                        </tr>
                        <tr>
                            <td className="job-name">
                                <h3>Global Solution</h3>
                                <p>Feb 2019 - Mar 2020</p>
                            </td>
                            <td className="job-description oran">
                                <h3>Sr. Product Designer</h3>
                                <p>{visualDesigner}</p>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="latest-work-section">
                <h2>My Latest Works</h2>
                <div className="column">
                    <p>Perfect solution for digital experience.</p>
                    <a href="https://dribbble.com/sajon">Explore more works.</a>
                </div>
                <div className="carousel-section">
                    <div className="carousel">
                        <input type="radio" name="slider" id="item-1" checked />
                        <input type="radio" name="slider" id="item-2" />
                        <input type="radio" name="slider" id="item-3" />
                        <div className="cards">
                            <label className="card" htmlFor="item-1" id="work-1">
                                <img
                                    src={require('../shared/img/restaurant-app-design.png')}
                                    alt="App Design"
                                />
                            </label>
                            <label className="card" htmlFor="item-2" id="work-2">
                                <img
                                    src={require('../shared/img/restaurant-app-design.png')}
                                    alt="Web Design"
                                />
                            </label>
                            <label className="card" htmlFor="item-3" id="work-3">
                                <img
                                    src={require('../shared/img/restaurant-app-design.png')}
                                    alt="Brand Design"
                                />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrapper">
                <div className="contact-section">
                    <div className="location-section">
                        <div>
                            <h3>Location</h3>
                            <p>
                                28 Jackson Blvd Ste 1020 Chicago
                                <p>IL 60604-2340</p>
                                <p>Email: bajan10@gmail.com</p>
                                <p>Number: 601 188 993</p>
                            </p>
                            <h3>Follow me</h3>
                            <div className="social-btn-group">
                                <button className="facebook"></button>
                                <button className="twitter"></button>
                                <button className="instagram"></button>
                            </div>
                        </div>
                    </div>
                    <div className="form-section">
                        <h3>Contact Form</h3>
                        <form action="mailto:banjan10@gmail.com" method="post" encType="text/plain">
                            <input type="text" name="username" placeholder="Your name"></input>
                            <input type="text" name="mail" placeholder="Your email"></input>
                            <textarea
                                rows={5}
                                name="message"
                                placeholder="Your message..."></textarea>
                            <div>
                                <input type="submit" className="submit" value={'Submit'} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <footer>
                <hr />
                <div className="info">
                    <a id="logo">Binjan</a>
                    <a id="rights">©2021. All Rights Reserved</a>
                    <a id="created-by">Created by Pranovych Anstasiia</a>
                </div>
            </footer>
        </div>
    );
};

export default PortfolioPage;
