import React, { useEffect, useRef } from 'react'

import Notecrud from './notecrud'
import { useContext, useState } from 'react'
import NoteContext from './context/NoteContext'
import { useNavigate } from 'react-router-dom'


const Note = () => {
  console.log(localStorage.getItem('token'));
  const navigate = useNavigate();
  const context = useContext(NoteContext);
  const { notes, fetchallnotes, updateNote } = context;
  const [note, setmy] = useState({ id: "", title: "", description: "", tag: "" });

  const usingRef = useRef(null)
  const ref2 = useRef(null);
  
  // by default give intitial value as null

  useEffect(() => {


    // i have to redirect to login page becaiuse user can open note add edit page only when he is logeed in
    // to check user is logged in we can use auth token
    // when user logged in i will saved the auth token in localStorage 
    // if localstorage me logged in false hai to mtlb nahi login in to redirect kar do

    // useNavigat eis used to redierect

    if (!localStorage.getItem('token')) {
      navigate("/login");
      
    }
    else {
      fetchallnotes();
    }
  }, []);
  // now i want a function to be called here when edit icon clicked 
  // and in this i will click laucnhed button
  function updateFun(idi, tit, descrip) {
    console.log(tit);
    console.log(descrip);
    usingRef.current.click();
    setmy({ id: idi, title: tit, description: descrip, tag: "" });
    console.log(note);
  }
  function getValue(e) {

    setmy({ ...note, [e.target.name]: e.target.value })
    // the above syntax says that remaining value of notes object remiain same only those whose value is changing will get changed


  }
  function handleClick(e) {

    // now i want to call editNote of the context to make changes
    updateNote(note.id, note.title, note.description, note.tag);

    // console.log( `i'm updating th eigven note with ${note}`);
    console.log(note);
    ref2.current.click();


  }




  return (

    <>
      {/* now in this modal when we click on the launch button modal appears 
    i want to cahnge it so that when icon in notecrud is clicked the launched button gets clicked automatically 
    i have learnt about useRef hoook how to handle dom using useRef */}
      <button type="button" className="btn btn-primary d-none" data-toggle="modal" data-target="#exampleModal" ref={usingRef}>
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Title</label>
                  <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" placeholder="Enter title" value={note.title} onChange={getValue} />

                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Description</label>
                  <input type="text" className="form-control" id="description" name="description" placeholder="Description" value={note.description} onChange={getValue} />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Tag</label>
                  <input type="text" className="form-control" id="tag" name="tag" placeholder="tag" onChange={getValue} />
                </div>


              </form>
            </div>
            <div className="modal-footer">
              <button ref={ref2} type="button" className="btn btn-secondary d-none" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={() => {
                handleClick(note)
              }}>Update changes</button>
            </div>
          </div>
        </div>
      </div>

      <div className='row'>





        {notes.length === 0 && "No notes to display"}
        {notes.map(note => (

          <Notecrud title={note.title} description={note.description} id={note._id} updateFun={updateFun} />
          // i have passed my function to notecrud

        ))}

      </div>




    </>
  )
}

export default Note
