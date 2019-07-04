import React from 'react';
import ReactDOM from 'react-dom';
import Route from './Route';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <h2>Home Screen</h2>
                <Route 
                    name='Culture Shock'
                    location='exit 38'
                    marker='41 24.2028, 2 10.4418'
                />
                <Route 
                    name='Zachs Climb'
                    location='Levy'
                    marker='41 24.2028, 2 10.4418'
                />
                <Route 
                    name='Allys Send'
                    location='Index'
                    marker='41 24.2028, 2 10.4418'
                />
            </div>
        );
    }
}