console.log('Hello World!');
import React from 'react';
import ReactDOM from 'react-dom';
// import Counter from './Counter';
import Clock from './Counter';
import PortfolioComponent from './Portfolio';
 
var ContactComponent = React.createClass({

  render: function(){

        return (

            <section className="bg-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2 text-center">
                            <h2 className="section-heading">Let us Get In Touch!</h2>
                            <hr className="primary" />
                            <p>Please feel free to call or email me with any development opportunities!</p>
                        </div>
                        <div className="col-lg-4 col-lg-offset-2 text-center">
                            <i className="fa fa-phone fa-3x sr-contact"></i>
                            <p>925-818-8337</p>
                        </div>
                        <div className="col-lg-4 text-center">
                            <i className="fa fa-envelope-o fa-3x sr-contact"></i>
                            <p><a href="mailto:sebastiangrobelny15@gmail.com">sebastiangrobelny15@gmail.com</a></p>
                        </div>
                    </div>
                    <div className="row">
                      <p> </p>
                    </div>

                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2 text-center">
                            <h2 className="section-heading">External Profile Information </h2>
                            <hr className="primary" />
                            <p>Please feel free to click on the icons below to explore my other profiles!</p>
                        </div>
                        <div className="col-lg-4 col-lg-offset-2  text-center">
                          <a href="https://www.linkedin.com/in/sebastian-grobelny-37490443/">
                          <img height= "60px" width ="60px" align ="right" src="img/portfolio/thumbnails/linkedinicon.png" className="img-responsive"  alt="" />
                          </a>
                        </div>
                        <div className="col-lg-4 col-sm-4 text-center"> 
                          <a href="https://github.com/SebGrobelny">
                            <img height= "60px" width ="60px" src="img/portfolio/thumbnails/githubicon.png" className="img-responsive" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>


    );


  }




})

var HomeComponent = React.createClass({

  render: function() {
    const header = "Welcome to Sebastian Grobelny's Personal Website"
    return (

        <div className="header-content">
            <div className="header-content-inner">
                <h1 id="homeHeading">Hello!</h1>
                <hr/>
                <Clock />
                <h3>{header}</h3>
                <h3>I built this website using React and Bootstrap for the front-end along with Node.js to handle the server in the back-end.</h3>
                <h4>  <a href="https://github.com/SebGrobelny/ReactPersonalSite">Click here to view the source code on GitHub</a> </h4>
            </div>
        </div>


    );
  }
});




var ExperienceComponent = React.createClass({
  
  render: function() {
    return (
       <section className="bg-dark">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <i className="fa fa-4x fa-newspaper-o text-primary sr-icons"></i>
                    <h2 className="section-heading">PROFESSIONAL EXPERIENCE</h2>
                    <hr className="primary"/>

                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-6 text-center">
                    <div className="service-box">
                        <h3>Student Academic Success Center  </h3>
                        <p >                           
                            Operating Systems Tutor<br />
                            Apr 2017 – Jun 2017<br />  
                            UC Davis<br />
                            C, C++, GDB, Git <br />
                            <br />
                        </p>
                    </div>
                </div>
                <div className="col-lg-12 col-md-6 text-center">
                    <div className="service-box">
                        <h3>  Niche Holdings  </h3>
                         <p >                           
                            Software Developer Intern<br />
                            Jan 2017 – June 2017 <br />             
                            San Francisco Bay Area <br />
                            Python, Java<br />
                            <br />
                            </p>
                    </div> 
                    </div>
                </div>
                <div className="col-lg-12 col-md-6 text-center">
                  <div className="service-box">
                          <h3>  GoodData  </h3>
                          <p >                           
                              Software Engineer Intern<br />
                              Jun 2016 – Sep 2016<br />  
                              San Francisco Bay Area<br />
                              Python, Java, JavaScript, SQL, PostGres, REST <br />
                              <br />
                          </p>
                    </div> 
                    <div className="service-box">
                    </div>
                </div>

            </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                     <i className="fa fa-4x fa-heart text-primary sr-icons"></i>
                    <h2 className="section-heading">Volunteer Experience</h2>
                    <hr className="primary" />
                </div>
            </div>
            <div className="col-lg-12 col-md-6 text-center">
                    <div className="service-box">
                        <h3>CS4Kids</h3>
                        <p >
                            Volunteer <br />
                            Sep 2016 – Jun 2017<br />  
                            Lego NXT Robotics Kits<br />
                            <br />

                        </p>
                    </div>
            </div>
            <div className="col-lg-12 col-md-6 text-center">
                    <div className="service-box">
                        <h3>Computer Science Club</h3>
                        <p >
                            Volunteer Tutor<br />
                            Sep 2015- Jun 2016<br />
                            UC Davis<br />
                            Python, C, C++<br />
                            </p>
                    </div>
            </div>

        </div>
    </section>
    );
  }
});

var AboutComponent = React.createClass({

  render: function() {
    return (
    <section className="bg-dark" id="about">
        <div className="container">
            <div className="row">
                  <div className="col-lg-8 col-lg-offset-2 text-center">
                    <i className="fa fa-4x fa-diamond text-primary sr-icons"></i>
                    <h2 className="section-heading">ABOUT</h2>
                    <hr className="primary"/>
                    <div>
                        <p>My name is Sebastian Grobelny and I am a recent graduate of the University of California Davis! I am currently seeking full-time opportunities in Software Development, Software Engineering, Full Stack Development and Data Engineering. As someone who has learned English as a second language, I pride myself on my ability to communicate with others and work alongside teams. When I am not knee deep in code I enjoy playing the guitar, fishing, backpacking and venturing out into the wilderness. Some of the causes I am passionate about include Habitat for Humanity and the Young Enterpreneurs at Haas. </p>
                    </div>

                  </div>       
              </div>
            </div>
        </section>

    );
  }
});

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <HomeComponent />,
    document.getElementById('root')
  );
});

document.getElementById('home').addEventListener("click",function(){
    ReactDOM.render(
    <HomeComponent />,
    document.getElementById('root')
  );
});

document.getElementById('about').addEventListener("click",function() {
  ReactDOM.render(
    <AboutComponent />,
    document.getElementById('root')
  );
});

document.getElementById('experience').addEventListener("click",function(){
    ReactDOM.render(
    <ExperienceComponent />,
    document.getElementById('root')
  );
});

document.getElementById('portfolio').addEventListener("click",function(){
    ReactDOM.render(
    <PortfolioComponent />,
    document.getElementById('root')
  );
});

document.getElementById('contact').addEventListener("click",function(){
    ReactDOM.render(
    <ContactComponent />,
    document.getElementById('root')
  );
});








