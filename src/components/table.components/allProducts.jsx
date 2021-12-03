import {getProducts, deleteProducts} from '../../shared/services/crud.data.service';
import React, {useEffect, useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import '../../pages/table.page.scss';

const allProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts();
    }, []);

    const getAllProducts = async () => {
        const response = await getProducts();
        setProducts(response.data);
    };

    const deleteProduct = async (id) => {
        await deleteProducts(id);
        getAllProducts();
    };

    return (
        <div>
            <table>
                <tr>
                    <NavLink to={'/add'} exact>
                        <button>Add new</button>
                    </NavLink>
                </tr>
                <tr>
                    <th>Product name</th>
                    <th>Price</th>
                    <th>Discontinued</th>
                    <th>Units in stock</th>
                    <th>Command</th>
                </tr>
                {products.map((prod) => (
                    <tr key={prod.id} className="row">
                        <td>{prod.productName}</td>
                        <td>{prod.price}</td>
                        <td>{prod.discontinued + ''}</td>
                        <td>{prod.unitsInStock}</td>
                        <td>
                            <NavLink component={Link} to={`/edit/${prod.id}`} exact>
                                <button className="cl-orange">Edit</button>
                            </NavLink>
                            <button onClick={() => deleteProduct(prod.id)}>Remove</button>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    );
};

export default allProducts;
