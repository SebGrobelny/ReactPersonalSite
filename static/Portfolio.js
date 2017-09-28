import React from 'react';

//The Portfolio page using composition 

var   ProjectName = require('./Container').projectname;
var   ProjectCategory = require('./Container').projectcategory;
var   PortfolioBoxContent = require('./Container').portfolioboxcontent;
var   PortfolioBox = require('./Container').portfoliobox;
var   LinkBox = require('./Container').linkbox;
var   ColumnBox = require('./Container').columnbox;
var   Row = require('./Container').row;
var   ContainerFluid = require('./Container').containerfluid; 



var PortfolioComponent = React.createClass({

  render: function() {
    return (
  <section className="bg-dark" id="portfolio">
            <div className="container text-center">
                <div className="call-to-action">
                    <i className="fa fa-4x fa-paper-plane text-primary sr-icons"></i>
                    <h2 className="section-heading">PORTFOLIO</h2>
                    <hr className="primary"/>
                    <p> Here are some of the projects I have had the pleasure of working on.
                        Please click on the previews below to view them on Heroku! </p>
                </div>
            </div>
                <ContainerFluid row ={
                                        <Row                    
                                            columnbox1 = {
                                                    <ColumnBox
                                                        linkbox = {
                                                            <LinkBox 
                                                                link="https://californiawineclassics.herokuapp.com/home"
                                                                img = {<img src="img/portfolio/thumbnails/7.jpg" className="img-responsive" alt=""/>}
                                                                box = {                                
                                                                    <PortfolioBox boxcontent ={
                                                                        <PortfolioBoxContent name = "California Wine Classics Website" 
                                                                            category1 = "Flask, Postgres" 
                                                                            category2 = {<ProjectCategory category = {<a href="mailto:sebastiangrobelny15@gmail.com">  Private Repository Please Contact Me Directly to View </a> } /> }/>
                                                                        }/>
                                                                }/>

                                                            }/>
                                            }

                                            columnbox2 ={
                                                    <ColumnBox
                                                        linkbox = {
                                                            <LinkBox 
                                                                link = "https://sebsfdevelop.herokuapp.com/"
                                                                img = {<img src="img/portfolio/thumbnails/1.jpg" className="img-responsive" alt=""/>}
                                                                box ={
                                                                    <PortfolioBox boxcontent ={
                                                                            <PortfolioBoxContent name = "San Francisco Development Pipeline"
                                                                            category1 = "Flask, SQLite3, D3"  
                                                                            category2 = {<ProjectCategory category = {<a href="https://github.com/SebGrobelny/SFDevelopmentPipeline">  github.com/SebGrobelny/SFDevelopmentPipeline </a> } /> }/>
                                                                            }/>

                                                                }/>
                                                        }/>
                                                }

                                            columnbox3 = {
                                                    <ColumnBox
                                                        linkbox = {
                                                            <LinkBox 
                                                                link = "https://sebnba-pro.herokuapp.com/"
                                                                img = {<img src="img/portfolio/thumbnails/2.jpg" className="img-responsive" alt=""/>}
                                                                box ={
                                                                    <PortfolioBox boxcontent ={
                                                                        <PortfolioBoxContent name = "NBA 2014-2016 Shot Analytics"
                                                                            category1 = "Flask, SQLite3"  
                                                                            category2 = {<ProjectCategory category = {<a href="https://github.com/SebGrobelny/NBAAnalytics">  github.com/SebGrobelny/NBAAnalytics </a> } /> }/>
                                                                        }/>

                                                                }/>
                                                               
                                                        }/>

                                                }/>
                    }/>
      </section>
    );
  }


});

// export default PortfolioComponent;

module.exports = {
    portfolio: PortfolioComponent
}