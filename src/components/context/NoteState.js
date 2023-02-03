import { useState } from "react";
import React from "react";
import NoteContext from "./NoteContext";



const NoteState = (props) => {
    const host = 'http://localhost';
   
    const [student, setStudent] = useState("");
    const [roll,setRoll]= useState(1);
    const [particular,setParticular]=useState("");

    // now we have to do api fetch to connnect our functionality wiht oiur database
    // i know how to fetch from an api 
    // i was having confusion how to give headers our jwt token or body when i was doing this manually during backend
    // samjh aa gya ki hum fetch function me endpoint ke sath sath use headers aur body bhi de sktw hai
    // let me show you this
    // create a fucntion fetchallnotes
    const fetchallStudent = async () => {
        // console.log("dsfnodsv");
        try {
            // console.log("dsfnodsv");

            const response = await fetch(`${host}/student/get`, {
                method: 'GET',
                headers: {


                    'Content-Type': 'application/json',

                    

                },

            });
            
            

            const json = await response.json();
            console.log(json);
         
            setStudent(json);
            console.log("feych note is runnign");
        }
        catch (err) {
            console.log(err);
        }
    }


    const addStudent = async (newly) => {
        setRoll(roll+1);
        console.log("running ")
        const{firstName,middleName,lastName,selectClass,selectDivision,addressLine1,addressLine2,landmark,city,pincode}=newly
        console.log(firstName,middleName,lastName,selectClass,selectDivision,roll,addressLine1,addressLine2,landmark,city,pincode)
        try {
            // console.log("dsfnodsv");

            const response = await fetch(`${host}/student/add`, {
                method: 'POST',
                headers: {


                    'Content-Type': 'application/json',

                    



                },
                body: JSON.stringify({firstName,middleName,lastName,selectClass,selectDivision,rollNo:roll,addressLine1,addressLine2,landmark,city,pincode})

            });
            console.log("addd note is running");
            const newStudent = { firstName,middleName,lastName,selectClass,selectDivision,rollNo:roll,addressLine1,addressLine2,landmark,city,pincode};
            setStudent(student.concat(newStudent));
            console.log(student);
        }
        catch (err) {
            console.log(err);
        }

    }
    const particularStudent =async (id) => {
        // now i have to think how to dlete note
        try {
            

            const response = await fetch(`${host}/student//${id}`, {
                method: 'DELETE',
                headers: {


                    'Content-Type': 'application/json',

                    



                },

            });
            // const newStudent = student.filter((note) => {
            //     return note._id !== id;
    
            // })
            // setNote(newStudent);
            const json = await response.json();
            console.log(json);
            setParticular(json);

        }
        catch (err) {
            console.log(err);
        }


        

    }




    const deleteStudent =async (id) => {
        // now i have to think how to dlete note
        try {
            console.log("dsfnodsv");

            const response = await fetch(`${host}/student/${id}`, {
                method: 'DELETE',
                headers: {


                    'Content-Type': 'application/json',

                    



                },

            });
            const newStudent = student.filter((note) => {
                return note._id !== id;
    
            })
            setStudent(newStudent);
        }
        catch (err) {
            console.log(err);
        }


        

    }




    const updateStudent=async (firstName,middleName,lastName,addressLine1,addressLine2,city,pincode,id) => {
        console.log("print ho rha hai  "  ,firstName,middleName,lastName,addressLine1,addressLine2,city,pincode,id)
        // when we click on edit iconn there should appear a modal which where we will type our new title etc
        // now let's create a modal ffrom boootstrap
        try {
            console.log("dsfnodsv");

            const response = await fetch(`${host}/student/${id}`, {
                method: 'PUT',
                headers: {


                    'Content-Type': 'application/json',

                   


                },
                body: JSON.stringify({firstName,middleName,lastName,addressLine1,addressLine2,city,pincode })

            });
            // upar to mera backend ka kaam ho gya lekin frontend me change karne ke liye i have change notes
            const newStudent=JSON.parse(JSON.stringify(student));
            for(let i=0;i<newStudent.length;i++){
                const element=newStudent[i];
                if(element._id===id){
                    newStudent[i].firstName=firstName;
                    if(middleName){
                        newStudent[i].middleName=middleName;
                    }
                    if(lastName){
                    newStudent[i].lastName=lastName;
                    }
                    // newStudent[i].selectClass=selectClass;

                    // newStudent[i].selectDivision=selectDivision;
                    
                    if(addressLine1){
                    
                    newStudent[i].addressLine1=addressLine1;
                    }
                    if(addressLine2){

                    newStudent[i].addressLine2=addressLine2;
                    }
                    if(city){

                    newStudent[i].city=city;
                    }
                    if(pincode){
                    newStudent[i].pincode=pincode;
                    }


                    break;
                }
            }
            console.log("newStudent   ",newStudent);
            setStudent(newStudent);

        }
        catch (err) {
            console.log(err);
        }



    }
    

    return (
        <NoteContext.Provider value={{ student,addStudent,roll,setStudent,fetchallStudent,deleteStudent,updateStudent}}>
            {props.children}


        </NoteContext.Provider>
    )
}
export default NoteState
