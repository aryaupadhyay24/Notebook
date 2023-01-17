import React,{useContext} from 'react'
import NoteContext from './context/NoteContext'
// i have to write for delete note

const Notecrud = (props) => {
    const context=useContext(NoteContext);
    const {deleteNote}=context;

    const {title,description,id,updateFun}=props
    
    const handleClick=(id)=>{
        console.log(id);
        console.log(title);
        deleteNote(id);
    }
    // here i passed the id of the clicked note to the deleteNote function presenrt in  my notecontext
    // now i have to define deltenote in note context
    const clickForUpdate=(id,title,description)=>{
        updateFun(id,title,description);

    }

    
    
    return (
        
        <div className='col-md-3 my-3'>
            <div className="card" >
                
                    <div className="card-body">
                        <div className='d-flex justify-content-center'>
                        <div>
                        <h5 className="card-title"> {title}</h5>
                        
                        <p className="card-text">{description}</p>
                        </div>
                        <i className="fa-solid fa-trash mx-3" onClick={()=>{
                            handleClick(id)

                        }}></i>
                        <i className="fa-solid fa-pen-to-square mx-3" onClick={()=>{
                            clickForUpdate(id,title,description)}}></i>
                        </div>
                        
                    </div>
            </div>
            </div>
            

        
    )
}

export default Notecrud
