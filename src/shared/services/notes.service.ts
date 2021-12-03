import axios from 'axios';

const url = 'http://localhost:3010/notes';

export const getNotes = async (id: any) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
};

export const addNote = async (note: any) => {
    return await axios.post(url, note);
};

export const deleteNote = async (id: number) => {
    return await axios.delete(`${url}/${id}`);
};
