import React from "react";

function Note(props){
    return <div className="note">
        <h1>{props.body.title}</h1>
        <p>{props.body.content}</p>
    </div>
}

export default Note;