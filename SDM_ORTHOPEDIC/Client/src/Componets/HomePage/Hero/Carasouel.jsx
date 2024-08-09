

import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';


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
    <div >
      <OwlCarousel className='owl-theme' {...options}>
    <div  >
        <h4><img src="https://img.freepik.com/premium-photo/spine-surgical-treatment-concept-doctor-with-tool-is-showing-spine_646443-1526.jpg?w=740" alt="img1"  style={{ width: '500', height: '630px'}}/></h4>
    </div>
    <div  >
        <h4><img src="https://img.freepik.com/premium-vector/medical-technology_46706-939.jpg?w=740" alt="img2" style={{ width: '500', height: '630px'}} /></h4>
    </div>
    <div  >
        <h4><img src="https://img.freepik.com/premium-photo/arthroscope-surgery-orthopedic-surgeons-teamwork-operating-room-with-modern-arthroscopic-tools-knee-surgery_179755-1979.jpg" alt="img3"  style={{ width: '500', height: '630px'}}/></h4>
    </div>
</OwlCarousel>;
    </div>
  )
}

export default Carasouel;

