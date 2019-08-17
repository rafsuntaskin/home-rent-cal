import React from 'react';
import {Button , AppBar, Container } from '@material-ui/core';
import TotalCard from './components/TotalCard';
import Bills from './components/Bills'
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            water: 0,
            gas: true,
            electricity:0,
            selectedBase: true,
        };
    }

    handleChange = (e) => {
        // If you are using babel, you can use ES 6 dictionary syntax
        // let change = { [e.target.name] = e.target.value }
        let change = {};
        change[e.target.name] = parseFloat(e.target.value);
        this.setState(change)
    }

    toggleBase = (item, e) => {
        let newState = {};
        newState[item] = !this.state[item];
        this.setState(newState);
    }

    updateData = (item, e) => {
        let newState = {};
        newState[item] = parseFloat(e.target.value);
        this.setState(newState);
    }

    render(){
        return (
            <div className="App">
                <AppBar position="relative">
                    <h3>Rent Calc</h3>
                </AppBar>
                <Container maxWidth="sm">
                    <TotalCard items={this.state}/>
                    <Bills items={this.state} handleChange={this.updateData} toggleBase={this.toggleBase}/>
                </Container>
            </div>
        );
    }
}

export default App;
