import React from "react"

import ReactDOM from "react-dom"


import App from "./App"


function MyInfo() {

  return (

  <div style={{backgroundColor: "lightblue"}}>

    <h1>Bogdan Tabor</h1>

      <p style={{color: "red"}}>My vacation spots</p>

      <ul>

        <li>Barselona</li>

        <li>La-Rochele</li>

        <li>Bali</li>

      </ul>

      <App />
  </div>

  )

}


ReactDOM.render(<MyInfo />, document.getElementById("root"))