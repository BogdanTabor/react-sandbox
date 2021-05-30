import React, {Component} from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            isVegan: false,
            sweets: false,
            sunEnergy: false
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? 
            this.setState({
                [name]: checked
            })
        :
        this.setState({
            [name]: value
        }) 
    }

    
    render() {
        return (
            <main>
                <form>
                    <input 
                        placeholder="First Name"
                        name="firstName"
                        value={this.state.name}
                        onChange={this.handleChange}
                    /><br />
                    
                    <input 
                        placeholder="Last Name"
                        name="lastName"
                        value={this.state.name}
                        onChange={this.handleChange}
                    /><br />
                    
                    <input 
                        placeholder="Age"
                        name="age"
                        value={this.state.age}
                        onChange={this.handleChange}
                    /><br />
                    
                    <br />
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={this.state.gender === "male"}
                            onChange={this.handleChange}
                        />Male
                    </label>
                    <br />
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={this.state.gender === "female"}
                            onChange={this.handleChange}
                        />Female
                    </label>
                    <br />
                    
                    <br />
                    <label>Destination:<br />
                    <select
                        value={this.state.destination}
                        name="destination"
                        onChange={this.handleChange}
                    >
                        <option value="">--Choose destination--</option>
                        <option value="Moon">Moon</option>
                        <option value="Mars">Mars</option>
                        <option value="Europa">Europa</option>
                    </select>
                    </label>
                    
                    <br />
                    <br />
                    
                    <label />Dietary:
                    <br />
                    
                    <label>
                        <input 
                            type="checkbox"
                            name="isVegan"
                            onChange={this.handleChange}
                            checked={this.state.isVegan}
                        /> Vegan
                    </label>
                    <br />
                    
                    <label>
                        <input 
                            type="checkbox"
                            name="sweets"
                            onChange={this.handleChange}
                            checked={this.state.sweets}
                        /> Sweets
                    </label>
                    <br />
                    
                    <label>
                        <input 
                            type="checkbox"
                            name="sunEnergy"
                            onChange={this.handleChange}
                            checked={this.state.sunEnergy}
                        /> Sun Energy
                    </label>
                    <br />
                    
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>Your dietary restrictions:</p>               
                <p>
                    {this.state.isVegan ? "Vegan " : null}
                    {this.state.sweets ? "Sweets " : null} 
                    {this.state.sunEnergy ? "Sun Energy" : null}
                </p>
                
                <button>Submit</button>

            </main>
        )
    }
}

export default App
