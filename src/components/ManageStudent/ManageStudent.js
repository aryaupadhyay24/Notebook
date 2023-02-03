import './ManageStudent.css'
import TopNavbar from '../topnavbar/TopNavbar'
import NoteContext from "../context/NoteContext";
import { useContext, useEffect, useRef, useState } from 'react';




const ManageStudent = () => {


    const ref2 = useRef(null);
    const usingRef= useRef(null);
    const [note, setmy] = useState({ firstName: "", lastName: "", middleName: "", addressline1: "",addressline2:"",city:"",pincode:"" });
    const [thisid,setid]=useState("");
    const context=useContext(NoteContext)
    const myRef=useRef(null)
    const {student,fetchallStudent,deleteStudent,updateStudent}= context;
    function handleClick(e) {

        updateStudent(note.firstName, note.middleName, note.lastName, note.addressline1,note.addressline2,note.city,note.pincode,thisid);
        console.log(note);
        ref2.current.click();
    
    
      }
      function updateFun(id) {
        setid(id);
        
        usingRef.current.click();
        setmy({ firstName: "", lastName: "", middleName: "", addressline1: "",addressline2:"",city:"",pincode:""});
        console.log(note);
      }
      function getValue(e) {

        setmy({ ...note, [e.target.name]: e.target.value })
        // the above syntax says that remaining value of notes object remiain same only those whose value is changing will get changed
    
    
    }
    
    useEffect(()=>{
        fetchallStudent();


    },[])
    const handleDetail=(id)=>{
      console.log(id)
      const p=document.getElementById(id).style.display;
      if(p==="none"){
        document.getElementById(id).style.display="";
      }
      else{
        document.getElementById(id).style.display="none";
      }


    }
    const handleDelete=(id)=>{
        deleteStudent(id)
    }

    
    console.log(student)
    return (
        <div>
            <div className="thisis">
                <TopNavbar></TopNavbar>




                <div>
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
                  <label htmlFor="exampleInputEmail1">FirstName</label>
                  <input type="text" className="form-control" id="title" name="firstName" aria-describedby="emailHelp" placeholder="First Name" value={note.firstName} onChange={getValue} />

                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">MiddleName</label>
                  <input type="text" className="form-control" id="description" name="middleName" placeholder="Middle Name" value={note.middleName} onChange={getValue} />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">LastName</label>
                  <input type="text" className="form-control" id="tag" name="lastName" placeholder="Last Name" onChange={getValue} value={note.lastName} />
                </div>
                {/* <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Class</label>
                  <input type="text" className="form-control" id="tag" name="tag" placeholder="tag" onChange={getValue} />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Division</label>
                  <input type="text" className="form-control" id="tag" name="tag" placeholder="tag" onChange={getValue} />
                </div> */}

                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">AddressLine1</label>
                  <input type="text" className="form-control" id="tag" name="addressLine1" placeholder="AddressLine1" onChange={getValue} value={note.addressline1} />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">AddressLine2</label>
                  <input type="text" className="form-control" id="tag" name="addressLine2" placeholder="AddressLine2" onChange={getValue} value={note.addressline2} />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">City</label>
                  <input type="text" className="form-control" id="tag" name="city" placeholder="City" onChange={getValue} value={note.city}/>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Pincode</label>
                  <input type="text" className="form-control" id="tag" name="pincode" placeholder="Pincode" onChange={getValue} value={note.pincode} />
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
    </div>
                <div className="andar">
                    Manage Student
                    <div className="listitem">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">City</th>
                                    <th scope="col">Roll No</th>
                                    <th scope="col">Edit/View/Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {student && student.map((stud)=>(
                                
                                    <>
                                <tr>
                                    <th scope="row">{stud.firstName}  {stud.middleName}  {stud.lastName}</th>
                                    <td>{stud.city}</td>
                                    <td>{stud.rollNo}</td>
                                    <td><i class="fa-solid fa-eye" style={{marginRight:"16px"}} onClick={()=>handleDetail(stud._id)}></i><i class="fa-solid fa-pen-to-square" style={{marginRight:"16px"}} onClick={()=>updateFun(stud._id)}></i><i class="fa-solid fa-trash" onClick={()=>handleDelete(stud._id)}></i></td>
                                </tr>
                                <div className="yehai">
                                <div className="fulldetails" id={stud._id}> 
                                    <span className='detailtype' >Name</span><span className='detailvalue'>{stud.firstName}  {stud.middleName}  {stud.lastName}</span>
                                    <span className='detailtype'>Class</span>  <span className='detailvalue'>Karna hai</span>
                                    <span className='detailtype' >Division</span> <span className='detailvalue'>Karna hai</span>
                                    <span className='detailtype' >Address</span><span className='detailvalue'>{stud.addressline1} {stud.addressline2} {stud.pincode}</span>
                                    <span className='detailtype' >City</span> <span className='detailvalue'>{stud.city}</span>
                                    <span className='detailtype' >Landmark</span > <span className='detailvalue'>{stud.landmark}</span>
                                    
                                 </div>
                                 </div>
                                </>
                                
                                
                                )
                               )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManageStudent
