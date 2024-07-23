import React, { useState, useEffect } from 'react';
import img1 from '../../assets/Images/image1.jpg'
import img2 from '../../assets/Images/image2.jpg'
import img3 from '../../assets/Images/image3.jpg'

const Carasouel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const slides = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
  ];

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);
    setIntervalId(id);

    return () => clearInterval(id);
  }, [slides.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
    if (intervalId) {
      clearInterval(intervalId);
    }
    const id = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);
    setIntervalId(id);
  };

  return (
    <div className="relative h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-500 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
          style={{
            backgroundImage: `url(${slide.img})`,
            backgroundSize: 'fit',
            backgroundPosition: 'center',
            backgroundRepeat:'no-repeat',
            height: '100%',
            width: '100%'

          }}
        >
        </div>
      ))}

    </div>
  );
};

export default Carasouel;
