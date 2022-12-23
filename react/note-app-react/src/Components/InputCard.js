import "./Blog.css"
import {useState, useEffect} from 'react'

export default function InputCard(){

    const [note, setNote] = useState([])

    const handleSubmit = () => {
        if (note.length <= 150){
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
      }

    return(<div className="blog--card">
        <form onSubmit={handleSubmit}>
            <input className="input--box" placeholder="write something here:)" type="text" value={note} onChange={(e)=> setNote(e.target.value)}/>
        </form>
    </div>)
}
