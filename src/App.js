import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    {/* Menu */}
                    <nav className="navbar navbar-inverse">
                        <ul className="nav navbar-nav">
                            <li>
                                <NavLink activeClassName="active"
                                // activeStyle = {{
                                //     backgroundColor: 'white',
                                //     color: 'red'
                                // }}
                                 exact to="/" className ="my-link">Home</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName = "active"
                                     exact to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink ativeClassName = "active" 
                                    exact to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </nav>
                    {/* Content */}
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </div>
            </Router>
        );
    }
}

export default App;
