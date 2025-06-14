import React from 'react';
import './AnimatedImageColumns.scss';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';  
import img6 from '../assets/img6.png';
import img7 from '../assets/img7.png';
import img8 from '../assets/img8.png';

const imagesCol1 = [img1, img2, img3, img4];
const imagesCol2 = [img5, img6 ,img7,img8];

const AnimatedImageColumns = () => (
  <div className="animated-columns">
    <div className="image-fade-top"></div>
    <div className="column column1">
      {imagesCol1.map((img, i) => (
        <img src={img} alt={`lifestyle-col1-${i+1}`} key={i} className="animated-img col1" />
      ))}
    </div>
    <div className="column column2">
      {imagesCol2.map((img, i) => (
        <img src={img} alt={`lifestyle-col2-${i+1}`} key={i} className="animated-img col2" />
      ))}
    </div>
  </div>
);

export default AnimatedImageColumns; 