export function getProducts() {
    return fetch('http://localhost:3005/products').then((data) => data.json());
}

export function setProduct(
    product_name: string,
    price: number,
    discontinued: boolean,
    units_in_stock: number,
) {
    return fetch('http://localhost:3005/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({product_name, price, discontinued, units_in_stock}),
    }).then((data) => data.json());
}

export function deleteProduct() {
    return fetch('http://localhost:3005/products', {
        method: 'DELETE',
    }).then((data) => data.json());
}
