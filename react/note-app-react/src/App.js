import {useState, useEffect} from 'react'
import Card from './Components/BlogCard'
import './App.css'
function App() {

  const [notes, setNotes] = useState([])
  const [note, setNote] = useState("")

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

  const handleSubmit = ()=>{
    fetch('http://localhost:5000/upload-note',{
      method:"POST",
      headers:{"Content-Type":"application/json",},
      body: JSON.stringify({note})
    })
    .then((res)=>{
      if (res.ok){
        //setNotes(notes.push(note))
      }
    })
    .catch((error)=>{console.log("could not upload note: ", error)})
  }

  return (
    <div className="page--container">
      <h1>Notes Application</h1>
      <form>
        <input type="text" value={note} onChange={(e)=> setNote(e.target.value)}/>
        <button type="submit" onClick={handleSubmit}>Post Note</button>
      </form>
      <div className="note--board">
        {notes.map((note) => <Card key={note._id} note={note.note}/>)}
      </div>
    </div>
  );
}

export default App;
