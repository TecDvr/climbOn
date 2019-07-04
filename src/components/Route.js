import React from 'react';

export default class Route extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            likes: 0
        };
    }

    onAddLike() {
        this.setState({
            likes: this.state.likes + 1
        });
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
                    <button onClick={ () => this.submit}>Add beta!</button>
                    <form>
                        <input type="form" placeholder="beta baby"></input>
                    </form>
                </div>
                <div className="likeButton">
                    <button onClick={ () => this.onAddLike()}>Like Route</button>
                    <p>{this.state.likes}</p>
                </div>
            </div>
        )
    }
} 