import axios from 'axios';

const url = 'http://localhost:3005/products';

export const getProducts = async (id: any) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
};

export const addProducts = async (product: any) => {
    return await axios.post(url, product);
};

export const editProducts = async (id: number, product: any) => {
    return await axios.put(`${url}/${id}`, product);
};

export const deleteProducts = async (id: number) => {
    return await axios.delete(`${url}/${id}`);
};
