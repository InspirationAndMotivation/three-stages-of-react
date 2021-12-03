import {NavLink} from 'react-router-dom';
import React from 'react';

const navBar = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/cards" exact>
                        Cards
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/editor" exact>
                        Editor
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default navBar;
