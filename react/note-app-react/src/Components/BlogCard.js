import './Blog.css'

export default function card(props){
    const deleteNote = () => {
        let note = props.note;
        fetch('http://localhost:5000/delete-note', {
            method:"PUT",
            headers:{"Content-Type":"application/json",},
            body: JSON.stringify({note})
        })
          .catch((error)=>{console.log("could not upload note: ", error)})

    }
    return(
        <div className="blog--card">
            <button className="delete--note--button" onClick={deleteNote}>✖</button>
            <p className="blog--note">{props.note}</p>
        </div>
    )
}
