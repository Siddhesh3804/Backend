import { useState } from 'react'
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);

  axios.get("http://localhost:3000/api/notes")
  .then((res) => {
    setNotes(res.data.notes);
  });

  return (
    <>
      <div className="notes">
        {
          notes.map(note => {
            return <div className="notes">
              <div className="note">
                <h1>{note.title}</h1>
                <h2>{note.description}</h2>
              </div>
            </div>
          })
        }
      </div>
    </>
  )
}

export default App
