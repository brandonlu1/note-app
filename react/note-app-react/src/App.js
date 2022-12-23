import {useState, useEffect} from 'react'
import Card from './Components/BlogCard'
import InputCard from './Components/InputCard.js'
import './App.css'
function App() {

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

  return (
    <div className="page--container">
      <h1>Post-It Board</h1>
      <div className="note--board">
        <InputCard/>
        {notes.map((note) => <Card key={note._id} note={note.note}/>)}
      </div>
    </div>
  );
}

export default App;
