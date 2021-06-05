import React from "react"
import ReactDOM from "react-dom"

function TimeApp() {
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay
  const styles = {
    fontSize: 30
  }
  
  if (hours < 12) {
    timeOfDay = "morning"
    styles.color = "green"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
    styles.color = "blue"
  } else {
    timeOfDay = "night"
    styles.color = "red"
  }
  
  return (
    <h1>Good {timeOfDay}!</h1>
  )
}

export default TimeApp