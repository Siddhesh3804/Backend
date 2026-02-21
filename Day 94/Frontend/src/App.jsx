import { useState, useEffect } from 'react'
import axios from "axios"

function App() {
  const [notes, setNotes] = useState([]);

  // Get
  function fetchNotes() {
    axios.get("http://localhost:3000/api/notes")
      .then((res) => {
        setNotes(res.data.notes);
      });
  }
  useEffect(() => {
    fetchNotes();
  }, []);

  // Post
  function handleSubmit(e) {
    e.preventDefault()
    const { title, description } = e.target.elements;
    console.log(title.value, description.value);

    axios.post("http://localhost:3000/api/notes", {
      title: title.value,
      description: description.value
    })
      .then(res => {
        fetchNotes();
      });
  }

  //Delete
  function handleDeleteNote(noteId) {
    axios.delete("http://localhost:3000/api/notes/" + noteId)
      .then(res => {
        fetchNotes();
      });
  }

  //Patch (Update)
  function handleUpdateDescription(noteId) {
    const newDescription = prompt("Enter New Description");

    axios.patch("http://localhost:3000/api/notes/" + noteId, { description: newDescription })
      .then(res => {
        fetchNotes();
      });
  }

  return (
    <>
      <form className="note-create-form" onSubmit={handleSubmit}>
        <input name='title' type="text" placeholder='Enter Title' />
        <input name='description' type="text" placeholder='Enter Description' />
        <button>Create Note</button>
      </form>

      <div className="notes">
        {
          notes.map(note => {
            return <div className="note">
              <h2>{note.title}</h2>
              <p>{note.description}</p>
              <button onClick={() => { handleDeleteNote(note._id) }}>Delete</button>
              <button onClick={() => { handleUpdateDescription(note._id) }}>Update Description</button>
            </div>
          })
        }
      </div>
    </>
  )
}

export default App
