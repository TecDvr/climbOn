import React from 'react';
import ReactDOM from 'react-dom';
import Route from './Route';

export default class Home extends React.Component {
    render() {
        const boltDistance = {
            bolts: ['5ft', '10ft', '13ft', '42ft']
        };
        return (
            <div>
                <h2>Home Screen</h2>
                <Route 
                    name='Culture Shock'
                    location='exit 38'
                    marker='41 24.2028, 2 10.4418'
                    boltDistance={boltDistance}
                />
                <Route 
                    name='Lumpys Revenge'
                    location='Levy'
                    marker='41 24.2028, 2 10.4418'
                    boltDistance={boltDistance}
                />
                <Route 
                    name='Bora La'
                    location='Index'
                    marker='41 24.2028, 2 10.4418'
                    boltDistance={boltDistance}
                />
            </div>
        );
    }
}