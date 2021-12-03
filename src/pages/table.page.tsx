import React from 'react';
import addProduct from '../components/table.components/addProduct';
import editProduct from '../components/table.components/editProduct';
import allProducts from '../components/table.components/allProducts';
import notFound from '../components/table.components/notFound';
import './table.page.scss';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

const TablePage = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/products" component={allProducts} />
                    <Route exact path="/add" component={addProduct} />
                    <Route exact path="/edit/:id" component={editProduct} />
                    <Route component={notFound} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default TablePage;
