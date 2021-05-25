import React, {Component} from "react"
import Conditional from "./Conditional"

class App extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true
        }
    }
    
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)
    }
    
    render() {
        return (
            <div>
                {this.state.isLoading ?
                <h1>Loading...</h1> :
                <h1>Some text</h1>}
            </div>
        )
    }
}

export default App
