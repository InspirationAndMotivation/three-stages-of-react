import React, {useEffect, useState} from 'react';
import {getNotes, deleteNote, addNote} from '../../shared/services/notes.service';
import {NavLink, useHistory} from 'react-router-dom';
import '../../pages/routing.page.scss';

const cardsEditor = () => {
    const [noteList, setNotes] = useState([]);
    const [note, setOneNote] = useState([]);
    const {title, description} = note;
    const history = useHistory();

    useEffect(() => {
        getAllNotes();
    }, []);

    const getAllNotes = async () => {
        const response = await getNotes();
        setNotes(response.data);
    };

    const deleteNotes = async (id) => {
        await deleteNote(id);
        getAllNotes();
    };

    const onValueChange = (e) => {
        setOneNote({...note, [e.target.name]: e.target.value});
    };

    const addNoteData = async () => {
        await addNote(note);
        history.push('./notes');
    };

    return (
        <div>
            <h2>Cards Editor</h2>
            <table className="cards-table">
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
                {noteList.map((note) => (
                    <tr key={note.id} className="row">
                        <td>{note.title}</td>
                        <td>{note.description}</td>
                        <td>
                            <button
                                className="del-button"
                                onClick={() => deleteNotes(note.id)}></button>
                        </td>
                    </tr>
                ))}
                <tr>
                    <td>
                        <form id="notes-form">
                            <input
                                type="text"
                                id="title-input"
                                form="notes-form"
                                name="title"
                                placeholder="Title"
                                onChange={(e) => onValueChange(e)}
                                value={title}></input>
                        </form>
                    </td>
                    <td>
                        <textarea
                            type="text"
                            id="description-input"
                            form="notes-form"
                            rows={1}
                            name="description"
                            placeholder="Description"
                            onChange={(e) => onValueChange(e)}
                            value={description}></textarea>
                    </td>
                    <td>
                        <NavLink to="editor" exact>
                            <button
                                type="submit"
                                form="notes-form"
                                className="add-button"
                                onClick={() => addNoteData()}></button>
                        </NavLink>
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default cardsEditor;
