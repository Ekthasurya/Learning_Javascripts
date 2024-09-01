import React from 'react'
import { useEffect, useState } from 'react';


const Notes = () => {
    const [notes, setNotes]= useState([]);

    const fetchNotes = async()=>{
        const token = localStorage.getItem("token");
        try {
            const response = await fetch("https://devnotes-1-npd3.onrender.com/product/view-pro",{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            });
            const data = await response.json();
            setNotes(data.notes);
        } catch (error) {
            console.log(`An error occurred ${error}`)
        }
    }

    useEffect(()=>{
        fetchNotes();
    },[])

     const handleDelete =async(id) =>{
        const token = localStorage.getItem("token");
        try {
             await fetch("https://devnotes-7z9t.onrender.com/product/${id}",{
                method: "DELETE",
                headers:{
                    Authorization:`Bearer ${token}`
                }
            });
            fetchNotes()
        } catch (error) {
            console.log(`An error occurred ${error}`)
        }
     }
     
  return (
    <div>
      <h1>Notes</h1>
      {notes? notes.map((note)=>{
        return(
            <>
            <h2>{note.name}</h2>
            <p>{note.price}</p>
            <button onClick={()=>handleDelete(note._id)}>Delete</button>
            </>
        )
      }): <h2>No notes to display</h2>
    }

    </div>
  )
}

export default Notes
