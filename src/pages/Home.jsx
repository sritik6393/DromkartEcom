import React, { useState } from 'react';
import './Home.css';
import Products from '../pages/Products';
import Testimonials from '../pages/Testimonials';
// import Footter from './Footter';

// Import images
import one from "../assets/one.jpeg";
import two from "../assets/two.jpeg";
import three from "../assets/three.jpeg";
import four from "../assets/four.jpeg";
import five from "../assets/five.jpeg";
import six from "../assets/six.jpeg";

// Array of slide data
const slides = [
  { url: one, title: 'Slide One' },
  { url: two, title: 'Slide Two' },
  { url: three, title: 'Slide Three' },
  { url: four, title: 'Product Four' },
  { url: five, title: 'Product Five' },
  { url: six, title: 'Product Six' },
];

function Home() {
  const [curIndex, setCurIndex] = useState(0);

  const previous = () => {
    const isFirstSlide = curIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : curIndex - 1;
    setCurIndex(newIndex);
  };

  const next = () => {
    const isLastSlide = curIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : curIndex + 1;
    setCurIndex(newIndex);
  };

  return (
    <div className="home-container">
      <div className="carousel-slide" style={{ backgroundImage: `url(${slides[curIndex].url})` }}>
        {/* <div className="carousel-title">{slides[curIndex].title}</div> */}

        <div className="arrow left-arrow" onClick={previous}>
          <i className="fa-solid fa-chevron-left"></i>
        </div>

        <div className="arrow right-arrow" onClick={next}>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      </div>

      <div className="lower-home">
        <h2>Our Products</h2>
        <Products />

        <h2>Customer Testimonials</h2>
        <Testimonials />
      
      </div>
    </div>
  );
}

export default Home;
