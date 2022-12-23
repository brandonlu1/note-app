import './Blog.css'

export default function card(props){
    return(
        <div className="blog--card">
            <button className="delete--note--button" onClick={props.onDelete}>✖</button>
            <p className="blog--note">{props.note}</p>
        </div>
    )
}
