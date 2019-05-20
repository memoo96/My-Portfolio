import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>

          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png" alt="avatar" style={{height: '200px'}} />
            </div>

            <h2 style={{paddingTop: '2em', color: '#03A9F4'}}>Mohamed Ashraf</h2>
            <h4 style={{color: '#200122'}}>Front End Developer</h4>
            <hr style={{borderTop: '3px solid #200122', width: '50%'}}/>
            <p style={{color: '#03A9F4'}}>I'm mohamed ashraf, i'm a front-end web developer with 1 year of experience to make websites by html5 and Css and JavaScript and jquery,i come here to seek new opportunities and uses my experience to challenge myself, i have been giving a course front-end web developer from Udacity and i was learning self study courses on YouTube to improve myself.</p>
            <hr style={{borderTop: '3px solid #200122', width: '50%'}}/>
            <h5 style={{color: '#200122'}}>Address</h5>
            <p style={{color: '#03A9F4'}}>11 salah El deen, Imbaba, Giza, Egypt</p>
            <h5 style={{color: '#200122'}}>Phone</h5>
            <p style={{color: '#03A9F4'}}>01200849384</p>
            <h5 style={{color: '#200122'}}>Email</h5>
            <p style={{color: '#03A9F4'}}>mohamedashraf129.ma@gmail.com</p>
            <h5 style={{color: '#200122'}}>Web</h5>
            <p style={{color: '#03A9F4'}}>maresume.netlify.com</p>
            <hr style={{borderTop: '3px solid #200122', width: '50%'}}/>
          </Cell>

          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2014}
              endYear={2018}
              schoolName="Al Ahram Canadian University"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />

            <hr style={{borderTop: '3px solid #e22947'}} />

            <h2>Experience</h2>
            <Experience
              startYear={2009}
              endYear={2012}
              jobName="First Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />

              <Experience
                startYear={2012}
                endYear={2016}
                jobName="Second Job"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="HTML/CSS"
                progress={95}
                />
                <Skills
                  skill="javascript"
                  progress={80}
                />
                <Skills
                  skill="Bootstrap"
                  progress={80}
                />
                <Skills
                  skill="Jquery"
                  progress={70}
                />
                <Skills
                  skill="Sass"
                  progress={90}
                />
                <Skills
                  skill="Photoshop"
                  progress={80}
                />
                <Skills
                  skill="XD"
                  progress={80}
                />
                <Skills
                  skill="UI / UX Design"
                  progress={80}
                />
                <Skills
                  skill="React"
                  progress={70}
                />
                <Skills
                  skill="Angular"
                  progress={70}
              />
          </Cell>

        </Grid>
      </div>
    )
  }
}

export default Resume;
