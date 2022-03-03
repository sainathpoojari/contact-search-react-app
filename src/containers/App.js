import React, { Component } from "react";
import CardList from '../components/CardList';
import { robot } from '../robot';
import SearchBox from '../components/SearchBox';
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundary from "../components/ErrorBoundary";

class App extends Component {
    constructor() {
        super()
        this.state = {
            robot: robot,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })


    }
    
    render() {
        const filteredRobots = this.state.robot.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase());
        })
        return (
            <div className='tc'>
                <h1 >CONTACTS</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                <ErrorBoundary>    
                    <CardList robot={filteredRobots} />
                </ErrorBoundary>
                </Scroll>
            </div>
        );
    }

}


export default App;