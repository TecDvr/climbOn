import React from 'react';

export default class Route extends React.Component {
    
    onAddBeta() {
        this.state={}
    }
    
    render() {
        return(
            <div>
                <div className="routeDescription">
                    <h1>{this.props.name}</h1>
                        <p>{this.props.location}</p>
                        <p>{this.props.marker}</p>
                </div>
                <div className="boltInfo">
                    <h4>Bolt Placement</h4>
                    <ul>
                        {this.props.boltDistance.bolts.map((bolt, i) => <li key={i}>{bolt}</li>)}
                    </ul>
                </div>
                <div className="climbModel">
                    <img src="#" alt="3D Model"></img>
                </div>
                <div className="submitForm">
                    <button onClick={ () => this.onAddBeta()}>Add beta!</button>
                    <form>
                        <input type="form" placeholder="beta baby"></input>
                    </form>
                </div>
            </div>
        )
    }
} 