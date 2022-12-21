import {useState, useEffect} from 'react';

export default function card(props){
    return(
        <div>
            {props.note}
            <button onClick={() => {console.log("clicked!")}}>click me</button>
        </div>
    )
}
