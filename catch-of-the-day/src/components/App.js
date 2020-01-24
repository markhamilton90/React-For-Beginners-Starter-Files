import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    };
    addFish = fish => {
        // copy fishes state
        const fishes = { ...this.state.fishes };
        // add new fish to copy
        fishes[`fish${Date.now()}`] = fish;
        // overwrite existing state and trigger change in React
        this.setState({
            // fishes: fishes (if they are the same, you can do the below)
            fishes
        });
    }
    loadSampleFishes = () => {
        this.setState({
            fishes: sampleFishes
        });
    }
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market"/>
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => <Fish key={key} details={this.state.fishes[key]} />)}
                    </ul>
                </div>
                <Order />
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
            </div>
        )
    }
}

export default App;
