import React, { Component } from 'react';
import ImageSlider from '../ImageSlider';
import Footer from './Footer';
import DataCard from './DataCard';
import categories from './categoriesData';

export default class Home extends Component {
  render() {
    return (
      <div className="p-5 bg-light">

        <ImageSlider />

        <h1 className="fw-bold mb-3">Welcome to Infynie News</h1>
        {/* <p className="text-muted mb-4">
          Stay updated with trusted news across multiple categories.
        </p> */}

        <div className="row">
          {categories.map(item => (
            <DataCard
              key={item.id}
              title={item.title}
              desc={item.desc}
              path={item.path}
              icon={item.icon}
              image={item.image}
            />
          ))}
        </div>

        <Footer />
      </div>
    );
  }
}
