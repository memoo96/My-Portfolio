import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom';
import Landingpage from './Landingpage';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';

class Navbar extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Landingpage} />
                <Route path="/resume" component={Resume} />
                <Route path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} />
            </Switch>
        );
    }
}

export default Navbar;
