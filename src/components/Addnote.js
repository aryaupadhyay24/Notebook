
import React, { useContext, useState } from 'react'

import NoteContext from './context/NoteContext'

const Addnote = () => {
    const context = useContext(NoteContext);
    const { notes, addNote } = context;
    const [note, setNote] = useState({ title: "", description: "", tag: "" });
    function handleClick(e) {
        e.preventDefault();
        console.log("Notes is adding");
        const {title,description,tag}=note
        addNote(title,description,tag);
        setNote({ title: "", description: "", tag: "" });
    }
    function getValue(e) {
        
        setNote({ ...note, [e.target.name]: e.target.value })
        // the above syntax says that remaining value of notes object remiain same only those whose value is changing will get changed
    

    }

    return (

        <div className='container text-align-centre'>
            <h2>Add Your Note</h2>

            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Title</label>
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" placeholder="Enter title" onChange={getValue} value={note.title} required/>

                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Description</label>
                    <input type="text" className="form-control" id="description" name="description" placeholder="Description" onChange={getValue} value ={note.description} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Tag</label>
                    <input type="text" className="form-control" id="tag" name="tag" placeholder="tag" onChange={getValue} required/>
                </div>
                <button disabled={note.title<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Your Note</button>
            </form>

        </div>
    )
}

export default Addnote
