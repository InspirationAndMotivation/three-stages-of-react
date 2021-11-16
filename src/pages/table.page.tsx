import React, {useEffect, useState} from 'react';
import {uuid} from 'uuidv4';
import {getProducts} from '../shared/services/crud.data.service';
import './table.page.scss';

const TablePage = () => {
    interface IProduct {
        id: number;
        product_name: string;
        price: number;
        discontinued: boolean;
        units_in_stock: number;
    }
    const [products, setProducts] = React.useState<IProduct[]>([]);

    const [productName, setProductName] = useState();
    const [price, setPrice] = useState();
    const [discontinued, setDiscontinued] = useState();
    const [unitsInStock, setUnitsInStock] = useState();

    const [updateProductName, setUpdateProductName] = useState();
    const [updatePrice, setUpdatePrice] = useState();
    const [updateDiscontinued, setUpdateDiscontinued] = useState();
    const [updateUnitsInStock, setUpdateUnitsInStock] = useState();

    useEffect(() => {
        let mounted = true;
        getProducts().then((items) => {
            if (mounted) {
                setProducts(items);
            }
        });
        return () => {
            mounted = false;
        };
    }, [products]);

    const addProduct = () => {
        if (productName && price && discontinued && unitsInStock) {
            const newProduct = {
                id: uuid(),
                product_name: productName,
                price: price,
                discontinued: discontinued,
                units_in_stock: unitsInStock,
            };
        }
    };

    const deleteProduct = (key: number) => {
        const filterProducts = [...products].filter((item) => item.id !== key);
        setProducts(filterProducts);
    };

    const updateProduct = (key: number) => {
        const editedProduct = {
            product_name: updateProductName,
            price: updatePrice,
            discontinued: updateDiscontinued,
            units_in_stock: updateUnitsInStock,
        };
        const filterProducts = [...products].filter((item) => item.id !== key);
        const productsList = [...filterProducts, editedProduct];
        // setProducts(products_list);
        // setUpdateProductName();
        // setUpdatePrice();
        // setUpdateDiscontinued();
        // setUpdateUnitsInStock();
    };

    // const saveJson = () => {

    // }

    return (
        <div>
            <table>
                <tr>
                    <button>Add new</button>
                </tr>
                <tr>
                    <th>Product name</th>
                    <th>Price</th>
                    <th>Discontinued</th>
                    <th>Units in stock</th>
                    <th>Command</th>
                </tr>
                {products.map((item) => (
                    <tr key={item.id} className="row">
                        <td>{item.product_name}</td>
                        <td>{item.price}</td>
                        <td>{item.discontinued.toString()}</td>
                        <td>{item.units_in_stock}</td>
                        <td>
                            <button className="cl-orange">Edit</button>
                            <button onClick={() => deleteProduct(item.id)}>Remove</button>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    );
};

export default TablePage;
