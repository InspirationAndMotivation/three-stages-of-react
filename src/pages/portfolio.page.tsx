import React from 'react';
import './home.page.scss';
const pAbout1 =
    'I will help you with finging a solution and solve your problems, ' +
    'We use process design to create digital products. Besides that also ' +
    'help their business.';
const pAbout2 =
    'We use process design to create digital products. Besides that also help their business.';

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
                                <a href="#services" className="navbar-button">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#works" className="navbar-button">
                                    Works
                                </a>
                            </li>
                            <li>
                                <a href="#notes" className="navbar-button">
                                    Notes
                                </a>
                            </li>
                            <li>
                                <a href="#experience" className="navbar-button">
                                    Experience
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
            <div className="content">
                <table width="100%" cellSpacing={0} cellPadding={5}>
                    <tr>
                        <td valign="top">
                            <div className="btn-group">
                                <div className="websites-button">
                                    <button>
                                        <img src="../shared/img/pc_icon.png" alt="pc" />
                                        <p className="header-button">Website design</p>
                                        <p className="text-button">76 Projects</p>
                                    </button>
                                </div>
                                <div className="mobile-app-button">
                                    <button>
                                        <img src="../shared/img/mobile_icon.png" alt="mobile" />
                                        <p className="header-button">Mobile App Design</p>
                                        <p className="text-button">63 Projects</p>
                                    </button>
                                </div>
                                <div className="brand-button">
                                    <button>
                                        <img src="../shared/img/brand_icon.png" alt="brand" />
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
        </div>
    );
};

export default PortfolioPage;
