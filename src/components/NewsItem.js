import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export default class NewsItem extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }


  constructor(){
    super();
    // console.log("This is constructors");
    this.state = {
     
    }
  }

  render() { 
    let {title, desc , imgUrl ,link , author , publishDate , source } = this.props;
    
    let publishDateObj = new Date(publishDate);

    let showDate = publishDateObj.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric"
    });

// console.log(showDate); // 1 Jan 2026


    // console.log(source.name)
    return (
        <div className="card my-3">
          <span class="position-absolute top-0 z-1 start-50 p-3 translate-middle badge rounded-pill bg-success">
            {source}
          </span>
            <img  style={{ height: "18rem"}}  src={imgUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{desc}...</p>
                <p className="card-text"><small class="text-body-secondary">By {author} on {showDate}</small></p>
                <a target='_blank' rel="noreferrer" href={link} className="btn btn-primary">Read More</a>
            </div>
        </div>
    )
  }
}
