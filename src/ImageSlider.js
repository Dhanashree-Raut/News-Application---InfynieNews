import React, { Component } from 'react'
import {Link} from "react-router-dom";


export default class ImageSlider extends Component {
  render() {
    return (
    <div
      id="newsCarousel"
      className="carousel slide mb-4"
      data-bs-ride="carousel"
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        <button data-bs-target="#newsCarousel" data-bs-slide-to="0" className="active"></button>
        <button data-bs-target="#newsCarousel" data-bs-slide-to="1"></button>
        <button data-bs-target="#newsCarousel" data-bs-slide-to="2"></button>
      </div>

      {/* Slides */}
      <div className="carousel-inner rounded shadow">

        <div className="carousel-item active">
          <Link className="nav-link" to="/general">
            <img
              src="https://images.unsplash.com/photo-1585829365295-ab7cd400c167"
              className="d-block w-100"
              style={{ height: "400px", objectFit: "cover" }}
              alt="News 1"
            />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
              <h5>Breaking News</h5>
              <p>Click to read full story</p>
            </div>
          </Link>
        </div>

        <div className="carousel-item">
         <Link className="nav-link" to="/science">
            <img
              src="https://images.unsplash.com/photo-1504711434969-e33886168f5c"
              className="d-block w-100"
              style={{ height: "400px", objectFit: "cover" }}
              alt="News 2"
            />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
              <h5>Technology Updates</h5>
              <p>Latest trends in tech</p>
            </div>
          </Link>
        </div>

        <div className="carousel-item">
        <Link className="nav-link" to="/business">
            <img
              src="https://images.unsplash.com/photo-1495020689067-958852a7765e"
              className="d-block w-100"
              style={{ height: "400px", objectFit: "cover" }}
              alt="News 3"
            />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
              <h5>World News</h5>
              <p>Global headlines at a glance</p>
            </div>
          </Link>
        </div>

      </div>

      {/* Controls */}
      <button className="carousel-control-prev" data-bs-target="#newsCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button className="carousel-control-next" data-bs-target="#newsCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
  }
}
