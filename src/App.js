import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { BrowserRouter } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="demo-big-content">
            <Layout>
                <Header className="header-bgcolor" title={<Link style={{textDecoration: 'none', color: '#FFF'}} to="/">My Portfolio</Link>} fixed="true">
                    <Navigation>
                      <NavLink exact to="/">Home</NavLink>
                      <NavLink to="/resume">Resume</NavLink>
                      <NavLink to="/projects">Projects</NavLink>
                      <NavLink to="/contact">Contact</NavLink>
                    </Navigation>
                </Header>
                <Drawer title={<Link style={{textDecoration: 'none', color: '#6f0000'}} to="/">My Portfolio</Link>}>
                    <Navigation>
                      <NavLink style={{color: '#6f0000',fontWeight: 'bold'}} exact to="/">Home</NavLink>
                      <NavLink style={{color: '#6f0000',fontWeight: 'bold'}} to="/resume">Resume</NavLink>
                      <NavLink style={{color: '#6f0000',fontWeight: 'bold'}} to="/projects">Projects</NavLink>
                      <NavLink style={{color: '#6f0000',fontWeight: 'bold'}} to="/contact">Contact</NavLink>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                    <Navbar />
                </Content>
            </Layout>
        </div>  
      </BrowserRouter>
    );
  }
}

export default App;
