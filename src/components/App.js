import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date : new Date()
        }

        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(this.tick, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        // console.log("state is not updated")
        this.setState({
            date: new Date()
        }, 
        // () => console.log("state is updated")
        )
    }
    
    render() {

        return(
            <div className="Clock">
               <h3 id="time">{this.state.date.toLocaleTimeString()}</h3>
            </div>
        )
    }
}


export default App;
