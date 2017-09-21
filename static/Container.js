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
            {props.columnbox1}
            {props.columnbox2}
            {props.columnbox3}
        </div>
    );
}

function ContainerFluid(props){

    return(
            <div className="container-fluid">
                {props.row}
            </div>

    );



}

module.exports = {
    projectname: ProjectName,
    projectcategory: ProjectCategory,
    portfolioboxcontent: PortfolioBoxContent,
    portfoliobox: PortfolioBox,
    linkbox: LinkBox,
    columnbox: ColumnBox,
    row: Row,
    containerfluid: ContainerFluid
}