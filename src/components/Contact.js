import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">

          <Cell col={6}>
            <h2>Mohamed Ashraf</h2>
            <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png" alt="avatar" style={{height: '250px'}} />
             <p style={{ width: '80%', margin: 'auto', paddingTop: '1em'}}>I'm mohamed ashraf, i'm a front-end web developer with 1 year of experience to make websites by html5 and Css and JavaScript and jquery,i come here to seek new opportunities and uses my experience to challenge myself, i have been giving a course front-end web developer from Udacity and i was learning self study courses on YouTube to improve myself.</p>

          </Cell>

          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton', color: '#03A9F4'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    01200849384
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton', color: '#03A9F4'}}>
                    <i className="fa fa-fax" aria-hidden="true"/>
                    33115832
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '22px', fontFamily: 'Anton', color: '#03A9F4'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    mohamedashraf129.ma@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '22px', fontFamily: 'Anton', color: '#03A9F4'}}>
                    <i className="fa fa-map-marker" aria-hidden="true"/>
                    11 salah El deen, Imbaba, Giza, Egypt
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
          </Cell>

        </Grid>
      </div>
    )
  }
}

export default Contact;
