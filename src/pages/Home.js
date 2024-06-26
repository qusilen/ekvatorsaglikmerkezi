import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import banner1 from '../banner1.jpg';
import banner2 from '../banner2.jpg';
import banner3 from '../banner3.jpg';

const Home = () => {
  return (
    <div className="home">
      <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} interval={3000} showThumbs={false}>
        <div>
          <img src={banner1} alt="Banner 1" />
        </div>
        <div>
          <img src={banner2} alt="Banner 2" />
        </div>
        <div>
          <img src={banner3} alt="Banner 3" />
        </div>
      </Carousel>
      <div className="content">
        {/* Buraya gerekirse diğer içerik bileşenlerini ekleyebilirsiniz */}
      </div>
    </div>
  );
};

export default Home;
