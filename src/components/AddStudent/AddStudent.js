import { useContext, useState } from 'react';
import './AddStudent.css'
import NoteContext from '../context/NoteContext';
import TopNavbar from '../topnavbar/TopNavbar'


const AddStudent = () => {
    const context=useContext(NoteContext)
    const {addStudent}= context;

    const [newStudent, setNew] = useState({firstName:"",middleName:"",lastName:"",selectClass:"",selectDivision:"",rollNo:"",addressLine1:"",addressLine2:"",landmark:"",city:"",pincode:""});
    function getValue(e) {

        setNew({ ...newStudent, [e.target.name]: e.target.value })
        // the above syntax says that remaining value of notes object remiain same only those whose value is changing will get changed
    
        // console.log(newStudent)

    }
    const handleClick=()=>{
        console.log("clicked")
        
        
        // setRoll(roll+1)
        addStudent(newStudent)
        setNew({ firstName:"",middleName:"",lastName:"",selectClass:"",selectDivision:"",rollNo:"",addressLine1:"",addressLine2:"",landmark:"",city:"",pincode:""})
    }
    return (
        <div>
            
            <div className="provider">
            <TopNavbar/>
                
                <div className="details">
                <div className='addstudent'>Add Student</div>
                    <div className='row'></div>
                    <input type="text" placeholder='FirstName' className='col-md-3' value={newStudent.firstName} onChange={getValue} name="firstName"/>
                    <input type="text" placeholder='MiddleName'  className='col-md-3'value={newStudent.middleName} onChange={getValue} name="middleName"/>
                    <input type="text" placeholder='LastName'  className='col-md-3'value={newStudent.lastName} onChange={getValue} name="lastName"/>
                    
                    <input type="text" placeholder='AddressLine1' className='col-md-3'value={newStudent.addressLine1} onChange={getValue} name="addressLine1"/>
                    <input type="text" placeholder='AddressLine2' className='col-md-3'value={newStudent.addressLine2} onChange={getValue} name="addressLine2"/>
                    <input type="text" placeholder='City' className='col-md-3'value={newStudent.city} onChange={getValue} name="city"/>
                    <input type="text" placeholder='Landmark' className='col-md-3'value={newStudent.landmark} onChange={getValue} name="landmark"/>
                    <input type="text" placeholder='Pincode' className='col-md-3'value={newStudent.pincode} onChange={getValue} name="pincode"/>

                </div>


            </div>
            <div className="buttonadd" onClick={handleClick}>
                Add Student
            </div>

        </div>
    )
}

export default AddStudent
