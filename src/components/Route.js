import React from 'react';
import ReactDOM from 'react';

export default class Route extends React.Component {
    render() {
        return(
            <div>
                <div className="routeDescription">
                    <h1>{this.props.name}</h1>
                        <p>{this.props.location}</p>
                        <p>{this.props.marker}</p>
                </div>
            </div>
        )
    }
}