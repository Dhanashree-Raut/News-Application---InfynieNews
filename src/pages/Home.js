import React, { useEffect } from 'react';
import ImageSlider from '../ImageSlider';
import Footer from '../components/Footer';
import DataCard from '../components/DataCard';
import News from '../components/News';
import categories from '../components/categoriesData';

const Home = (props) => {

  useEffect(() => {
    props.setProgress(20);
    props.setProgress(100);
  }, []);

  return (
    <div className="p-5 bg-light">

      <ImageSlider />

      <h1 className="fw-bold mb-3">Welcome to Infynie News</h1>

      <div className="container m-auto row">
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

      <div className="container m-auto">
        <News
          containerType="artical"
          setProgress={props.setProgress}
          apiKey={props.apiKey}
          country={props.country}
          pageSize={props.pageSize}
          category={props.category}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Home;