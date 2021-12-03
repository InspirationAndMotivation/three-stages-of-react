import React, {useState} from 'react';
import {addProducts} from '../../shared/services/crud.data.service';
import {NavLink, useHistory} from 'react-router-dom';
import '../../pages/table.page.scss';

const initialValues = {
    productName: '',
    price: 0,
    discontinued: 'false',
    unitsInStock: 0,
};

const addProduct = () => {
    const [product, setProduct] = useState(initialValues);
    const {productName, price, discontinued, unitsInStock} = product;
    const history = useHistory();

    const onValueChange = (e) => {
        setProduct({...product, [e.target.name]: e.target.value});
    };

    const addProductDetails = async () => {
        await addProducts(product);
        history.push('./products');
    };

    return (
        <div className="product-form">
            <form>
                <h2>Add product</h2>
                <div className="input">
                    <label htmlFor="productName">Product name:</label>
                    <input
                        type="text"
                        name="productName"
                        onChange={(e) => onValueChange(e)}
                        value={productName}></input>
                </div>
                <div className="input">
                    <p>
                        <label htmlFor="price">Price:</label>
                    </p>
                    <input
                        id="price"
                        type="number"
                        name="price"
                        onChange={(e) => onValueChange(e)}
                        value={price}></input>
                </div>
                <div className="input">
                    <label htmlFor="discontinued">Discontinued:</label>
                    <input
                        type="text"
                        name="discontinued"
                        onChange={(e) => onValueChange(e)}
                        value={discontinued}></input>
                </div>
                <div className="input">
                    <label htmlFor="unitsInStock">Units in stock:</label>
                    <input
                        type="number"
                        name="unitsInStock"
                        onChange={(e) => onValueChange(e)}
                        value={unitsInStock}></input>
                </div>
                <NavLink to="products" exact>
                    <input
                        id="submit-button"
                        type="submit"
                        value="Add"
                        onClick={() => addProductDetails()}></input>
                </NavLink>
            </form>
        </div>
    );
};

export default addProduct;
