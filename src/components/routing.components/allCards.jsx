import React, {useEffect, useState} from 'react';
import {getNotes} from '../../shared/services/notes.service';
import '../../pages/routing.page.scss';

const allCards = () => {
    const [noteList, setNotes] = useState([]);

    useEffect(() => {
        getAllNotes();
    }, []);

    const getAllNotes = async () => {
        const response = await getNotes();
        setNotes(response.data);
    };

    const dragOver = (event) => {
        event.stopPropagation();
        event.preventDefault();
    };

    const dropNote = (event) => {
        event.target.style.left = `${event.pageX - 50}px`;
        event.target.style.top = `${event.pageY - 50}px`;
    };

    return (
        <div className="app" onDragOver={dragOver}>
            <h2>All Cards</h2>
            {noteList.map((note) => (
                <div
                    className="note"
                    style={{transform: `rotate(${Math.floor(Math.random() * 20)}deg)`}}
                    onDragEnd={dropNote}
                    draggable="true"
                    key={note.id}>
                    <span className="title">{note.title}</span>
                    <pre className="description">{note.description}</pre>
                </div>
            ))}
        </div>
    );
};

export default allCards;
