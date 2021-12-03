import React from 'react';
import {useHistory} from 'react-router';
import './home.component.scss';

const HomeHeader = () => {
    const history = useHistory();
    return (
        <div className="home-header">
            <div className="project-name">React z rana jak śmietana</div>
            <div className="routing-buttons-container">
                <button onClick={() => history.push('/portfolio')} className="routing-button">
                    Zadanie 1
                </button>
                <button onClick={() => history.push('/products')} className="routing-button">
                    Zadanie 2
                </button>
                <button onClick={() => history.push('/cards')} className="routing-button">
                    Zadanie 3
                </button>
            </div>
        </div>
    );
};
export default HomeHeader;
