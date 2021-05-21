import React from "react"

class SetStateApp extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.countOne = this.countOne.bind(this)
        this.countTwice = this.countTwice.bind(this)

    }
 
    countOne() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }
     
    countTwice() {
        this.setState(prevState => {
            return {
                count: prevState.count + 2
            }
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.countOne}>Count one</button>
                <button onClick={this.countTwice}>Count twice</button>
            </div>
        )
    }
}

export default SetStateApp
