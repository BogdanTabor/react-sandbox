import React from "react"

function Joke(props) {
    return (
        <div>
            <p style={{display: !props.joke.question && "none"}}>Question: {props.joke.question}</p>
            <p style={{color: !props.joke.question && "red"}}>Answer: {props.joke.answer}</p>
            <hr/>
        </div>
    )
}

export default Joke