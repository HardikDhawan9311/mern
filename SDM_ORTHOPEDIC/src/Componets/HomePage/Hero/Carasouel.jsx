import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../CSS/Carsouel.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import img1 from '../../../assets/Images/image1.jpg'
// import img2 from '../../assets/Images/image2.jpg'
import img3 from '../../../assets/Images/'

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        
        
        modules={[Autoplay]}
        className="mySwiper"
      >
        
        <SwiperSlide><img src={img1} alt="carasouel" /></SwiperSlide>
        {/* <SwiperSlide><img src={img2} alt="cara2" /></SwiperSlide> */}
        <SwiperSlide><img src={img3} alt="cara3" /></SwiperSlide>
        
        
       
      </Swiper>
    </>
  );
}
