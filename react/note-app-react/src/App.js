import {useState, useEffect} from 'react'
import Card from './Components/BlogCard'
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
  },[])

  return (
    <div>
      {notes.map((note) => <Card key={note._id} note={note.note}/>)}
    </div>
  );
}

export default App;
