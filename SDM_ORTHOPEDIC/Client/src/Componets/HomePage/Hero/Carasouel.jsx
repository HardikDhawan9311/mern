

import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';

import img1 from '../../../assets/Images/image1.jpg'
// import img2 from '../../assets/Images/image2.jpg'
import img3 from '../../../assets/Images/image3.jpg'
import 'owl.carousel/dist/assets/owl.theme.default.css';
function Carasouel() {

  const options = {
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    animateOut:'fadeOut',
    nav: false,
    dots: true,
    margin:0,
    responsive:{
      1100:{
        items:1,
      },
      724: {
        items:1,
      },
      500: {
        items:1,
      },

      370:{
        items:1,
        innerWidth:"100%",
        outerWidth:"100%"
      },
    },
  };

  return (
    <div>
      <OwlCarousel className='owl-theme' {...options}>
    <div class='item'>
        <h4><img src={img1} alt="img1" /></h4>
    </div>
    <div class='item'>
        <h4><img src={img3} alt="img3" /></h4>
    </div>
</OwlCarousel>;
    </div>
  )
}

export default Carasouel;

