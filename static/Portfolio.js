import React from 'react';


function ProjectName(props){
    return(
      <div className = "project-name">
        {props.name}
      </div>
      );
  }

function ProjectCategory(props){
  return(
            <div className="project-category text-faded">
                {props.category}
            </div>

    );
}

function PortfolioBoxContent(props){
    return(
        <div className="portfolio-box-caption-content">
            <ProjectName name = {props.name} />
            <ProjectCategory category= {props.category1} />
            <ProjectCategory category= {props.category2} />

         </div>
    );

}

function PortfolioBox(props){
    return(
            <div className="portfolio-box-caption">
                {props.boxcontent}
            </div>
    );

}

function LinkBox(props){

    return(
        <a href={props.link} className="portfolio-box">
            {props.img}
            {props.box}
        </a>

    );
}

function ColumnBox(props){
    return(
            <div className="col-lg-12 col-sm-6">
                {props.linkbox}
            </div>
    );

}

function Row(props){
    return(
        <div className = "row">
            {props.row1}
            {props.row2}
            {props.row3}
        </div>
    );
}


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
            <div className="container-fluid">
                    <Row                    
                        row1 = {
                                <ColumnBox
                                    linkbox = {
                                        <LinkBox 
                                            link="https://californiawineclassics.herokuapp.com/home"
                                            img = {<img src="img/portfolio/thumbnails/7.jpg" className="img-responsive" alt=""/>}
                                            box = {                                
                                                <PortfolioBox boxcontent ={
                                                    <PortfolioBoxContent name = "California Wine Classics Website" 
                                                        category1 = "Currently migrating from Flask, SQLite3 to WordPress" 
                                                        category2 = {<ProjectCategory category = {<a href="https://github.com/SebGrobelny/CaliforniaWineClassics">  github.com/SebGrobelny/CaliforniaWineClassics </a> } /> }/>
                                                    }/>
                                            }/>

                                        }/>
                        }

                        row2 ={
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

                        row3 = {
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
                </div>
      </section>
    );
  }


});

export default PortfolioComponent;