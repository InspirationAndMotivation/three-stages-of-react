import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NavBar from '../components/routing.components/navBar';
import allCards from '../components/routing.components/allCards';
import cardsEditor from '../components/routing.components/cardsEditor';
import notFound from '../components/routing.components/notFound';
import './routing.page.scss';

const RoutingTaskPage = () => {
    return (
        <div className="routing-page">
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route exact path="/cards" component={allCards} />
                    <Route exact path="/editor" component={cardsEditor} />
                    <Route component={notFound} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default RoutingTaskPage;
