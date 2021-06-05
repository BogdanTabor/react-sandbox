import React from "react"
import Joke from "./Joke.js"

function App() {
    return (
        <div>
            <Joke 
                joke={{answer: "aaa"}}
            />
             <Joke 
                joke={{question: "BBB", answer: "bbb"}}
            />
            <Joke 
                joke={{question: "CCC", answer: "ccc"}}
            />
             <Joke 
                joke={{answer: "ddd"}}
            />
        </div>
    )
}

export default App