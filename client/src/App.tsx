// React App component in TypeScript
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './views/HomePage';
import './App.css';

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    {/* Other routes */}
                </Switch>
            </div>
        </Router>
    );
};

export default App;
