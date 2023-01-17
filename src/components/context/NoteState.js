import { useState } from "react";
import React from "react";
import NoteContext from "./NoteContext";



const NoteState = (props) => {
    const host = 'http://localhost';
    const intialState = [
        {
            title: "hello",
            description: "why rthis  kolavari ",
            _id: "134561"

        },
        {
            title: "fsidnafo",
            description: "iofoiweefvs",
            _id: "134562"

        },
        {
            title: "hello",
            description: "why rthis  kolavari ",
            _id: "134563"

        },
        {
            title: "fsidnafo",
            description: "iofoiweefvs",
            _id: "134564"

        },
        {
            title: "hello",
            description: "why rthis  kolavari ",
            _id: "134565"

        },
        {
            title: "fsidnafo",
            description: "iofoiweefvs",
            _id: "134566"

        },
        {
            title: "hello",
            description: "why rthis  kolavari ",
            _id: "134567"

        },
        {
            title: "fsidnafo",
            description: "iofoiweefvs",
            _id: "134568"

        }

    ];
    const [notes, setNote] = useState(intialState);

    // now we have to do api fetch to connnect our functionality wiht oiur database
    // i know how to fetch from an api 
    // i was having confusion how to give headers our jwt token or body when i was doing this manually during backend
    // samjh aa gya ki hum fetch function me endpoint ke sath sath use headers aur body bhi de sktw hai
    // let me show you this
    // create a fucntion fetchallnotes
    const fetchallnotes = async () => {
        console.log("dsfnodsv");
        try {
            console.log("dsfnodsv");

            const response = await fetch(`${host}/apinote/fetchnote`, {
                method: 'GET',
                headers: {


                    'Content-Type': 'application/json',

                    "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM5ZmY0ZGY1MGQ2MDEzMmZmZGVhMDA4In0sImlhdCI6MTY3MTQzMjU2NH0.dGvqJXcZ7nh6goO1ziH7b616-cqd-FhOHU7-Gs7T1Aw"

                },

            });
            console.log("dsfnodsv");
            console.log(response);

            const json = await response.json();
            console.log("dsfnodsv");

            setNote(json);
            console.log("feych note is runnign");
        }
        catch (err) {
            console.log(err);
        }
    }
    const addNote = async (title, description, tag) => {

        try {
            console.log("dsfnodsv");

            const response = await fetch(`${host}/apinote/addnote`, {
                method: 'POST',
                headers: {


                    'Content-Type': 'application/json',

                    "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM5ZmY0ZGY1MGQ2MDEzMmZmZGVhMDA4In0sImlhdCI6MTY3MTQzMjU2NH0.dGvqJXcZ7nh6goO1ziH7b616-cqd-FhOHU7-Gs7T1Aw"



                },
                body: JSON.stringify({ title, description, tag })

            });
            console.log("addd note is running");
            const newNote = { title, description, tag };
            setNote(notes.concat(newNote));
        }
        catch (err) {
            console.log(err);
        }

    }




    const deleteNote =async (id) => {
        // now i have to think how to dlete note
        try {
            console.log("dsfnodsv");

            const response = await fetch(`${host}/apinote/deletenote/${id}`, {
                method: 'DELETE',
                headers: {


                    'Content-Type': 'application/json',

                    "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM5ZmY0ZGY1MGQ2MDEzMmZmZGVhMDA4In0sImlhdCI6MTY3MTQzMjU2NH0.dGvqJXcZ7nh6goO1ziH7b616-cqd-FhOHU7-Gs7T1Aw"



                },

            });
            const newNote = notes.filter((note) => {
                return note._id !== id;
    
            })
            setNote(newNote);
        }
        catch (err) {
            console.log(err);
        }


        

    }



    const updateNote =async (id,title,description,tag) => {
        // when we click on edit iconn there should appear a modal which where we will type our new title etc
        // now let's create a modal ffrom boootstrap
        try {
            console.log("dsfnodsv");

            const response = await fetch(`${host}/apinote/updatenote/${id}`, {
                method: 'PUT',
                headers: {


                    'Content-Type': 'application/json',

                    "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM5ZmY0ZGY1MGQ2MDEzMmZmZGVhMDA4In0sImlhdCI6MTY3MTQzMjU2NH0.dGvqJXcZ7nh6goO1ziH7b616-cqd-FhOHU7-Gs7T1Aw"



                },
                body: JSON.stringify({ title, description, tag })

            });
            // upar to mera backend ka kaam ho gya lekin frontend me change karne ke liye i have change notes
            const newNote=JSON.parse(JSON.stringify(notes));
            for(let i=0;i<newNote.length;i++){
                const element=newNote[i];
                if(element._id===id){
                    newNote[i].title=title;
                    newNote[i].description=description;
                    newNote[i].tag=tag;
                    break;
                }
            }
            console.log(newNote);
            setNote(newNote);
        }
        catch (err) {
            console.log(err);
        }



    }


    return (
        <NoteContext.Provider value={{ notes, setNote, addNote, deleteNote, updateNote, fetchallnotes }}>
            {props.children}


        </NoteContext.Provider>
    )
}
export default NoteState
