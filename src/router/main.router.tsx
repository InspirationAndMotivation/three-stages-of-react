import {HomeWrapper} from '@components/home';
import PortfolioPage from '@pages/portfolio.page';
import RoutingTaskPage from '@pages/routing-task.page';
import TablePage from '@pages/table.page';
import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

const MainRouter = () => {
    return (
        <HomeWrapper>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/portfolio" />
                </Route>
                <Route path="/portfolio">
                    <PortfolioPage />
                </Route>
                <Route path="/products">
                    <TablePage />
                </Route>
                <Route path="/cards">
                    <RoutingTaskPage />
                </Route>
                <Route path="/editor">
                    <RoutingTaskPage />
                </Route>
            </Switch>
        </HomeWrapper>
    );
};

export default MainRouter;
