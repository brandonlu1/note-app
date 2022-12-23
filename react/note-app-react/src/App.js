import {useState, useEffect} from 'react'
import Card from './Components/BlogCard'
import InputCard from './Components/InputCard.js'
import './App.css'
function App(props) {

  const [notes, setNotes] = useState([])

  useEffect(()=>{
    fetch('http://localhost:5000/get-notes')
    .then(res => res.json())
    .then((response)=>{
      if (response.length > 0){
        setNotes(response)
      }
    })
    .catch((error)=>{console.log("error: ", error)})
  })

  const deleteNote = (note) => {
    fetch('http://localhost:5000/delete-note', {
        method:"PUT",
        headers:{"Content-Type":"application/json",},
        body: JSON.stringify({note})
    })
    .then((res)=>{
        //window.location.reload()
        console.log("deleted")
    })
      .catch((error)=>{console.log("could not upload note: ", error)})
  }

  return (
    <div className="page--container">
      <h1>Post-It Board</h1>
      <div className="note--board">
        <InputCard/>
        {notes.map((note) => <Card key={note._id} note={note.note} onDelete={()=>deleteNote(note.note)}/>)}
      </div>
    </div>
  );
}

export default App;
