import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';

class Landingpage extends Component {
  render() {
    return (
        <div style={{width:'100%',margin:'auto'}}>
            <Grid className="landing-grid">
                <Cell col={12}>
                    <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png" alt="avatar" className="avatar-img" />
                    <div className="banner-text">
                        <h1>Front End Developer</h1>
                        <hr/>
                        <p>HTML | CSS | SASS | Bootstrap | JavaScript | Jquery |  React | Angular | Photoshop | Php | MySql</p>

                        <div className="social-links">

                            <a href="https://www.linkedin.com/in/mohamed-ashraf-a962a7146/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>

                            <a href="https://github.com/memoo96" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true" />
                            </a>

                            <a href="https://www.behance.net/mohamedash77c1" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-behance" aria-hidden="true" />
                            </a>

                            <a href="https://codepen.io/Memoo/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-codepen" aria-hidden="true" />
                            </a>

                        </div>
                    </div>
                </Cell>
            </Grid>
        </div>
    );
  }
}

export default Landingpage;
