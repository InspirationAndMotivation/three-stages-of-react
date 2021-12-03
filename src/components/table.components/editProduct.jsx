import React, {useEffect, useState} from 'react';
import {editProducts, getProducts} from '../../shared/services/crud.data.service';
import {NavLink, useParams} from 'react-router-dom';
import {useHistory} from 'react-router';
import '../../pages/table.page.scss';

const initialValues = {
    productName: '',
    price: 0,
    discontinued: 'false',
    unitsInStock: 0,
};

const editProduct = () => {
    const [product, setProduct] = useState(initialValues);
    const {productName, price, discontinued, unitsInStock} = product;
    const {id} = useParams();
    const history = useHistory();

    useEffect(() => {
        loadProductData();
    }, []);

    const loadProductData = async () => {
        const response = await getProducts(id);
        setProduct(response.data);
    };

    const onValueChange = (e) => {
        setProduct({...product, [e.target.name]: e.target.value});
    };

    const editProductDetails = async () => {
        await editProducts(id, product);
        history.push('/products');
    };

    return (
        <div className="product-form">
            <form>
                <h2>Edit product</h2>
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
                        value="Edit"
                        onClick={() => editProductDetails()}></input>
                </NavLink>
            </form>
        </div>
    );
};

export default editProduct;
