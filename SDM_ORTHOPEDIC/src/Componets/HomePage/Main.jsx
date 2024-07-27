import 'animate.css';
import CountUp from 'react-countup';
import React, { useState, useEffect } from 'react';

export default function Main() {
  const [showBox, setShowBox] = useState(false);

  const handleScroll = () => {
    const boxPosition = document.getElementById('box').offsetTop;
    const scrollPosition = window.scrollY + window.innerHeight;
    if (scrollPosition >= boxPosition) {
      setShowBox(true);
    } else {
      setShowBox(false);
    };
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="p-8 bg-gray-50">
        <div id="box" className={`transition-opacity duration-500 ${showBox ? 'opacity-100 animate__animated animate__fadeIn' : 'opacity-0'}`}>
          <div className="p-4 md:p-8 mt-4 bg-blue-500 shadow-md rounded-lg w-full h-auto md:h-80">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 text-center font-serif">
              Welcome to SDM
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-white">
              The overall healthcare system in most Asian countries is relatively poorer than countries in Europe
              and North America. However, India is known for producing the best minds in international medicine
              and science generally. At SDM Orthopaedic, our goal is to make world class orthopaedic products
              easily accessible for new and existing doctors, medical centres or hospitals, partners in India.
              Our products are supplied all over India. SDM Orthopedic is a high quality orthopedic instruments & implants
              manufacturing unit in India. We manufacture a wide range of Spine implants 
              and instruments. SDM is FDA Certified.
            </p>
          </div>
        </div>
      </div>

      <section className="section-counter py-12 bg-gray-100">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="single-counter animate__animated animate__fadeInUp flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
            <div className="inner flex items-baseline">
              <b className="counter text-4xl font-bold">
                <CountUp end={80} duration={2} />
              </b>
              <span className="text-xl font-semibold">+</span>
            </div>
            <p className="mt-2 text-center text-gray-700">Years of Excellence</p>
          </div>

          <div className="single-counter animate__animated animate__fadeInUp flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
            <div className="inner flex items-baseline">
              <b className="counter text-4xl font-bold">
                <CountUp end={19} duration={2} />
              </b>
              <span className="text-xl font-semibold">k+</span>
            </div>
            <p className="mt-2 text-center text-gray-700">Products</p>
          </div>

          <div className="single-counter animate__animated animate__fadeInUp flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
            <div className="inner flex items-baseline">
              <b className="counter text-4xl font-bold">
                <CountUp end={100} duration={2} />
              </b>
              <span className="text-xl font-semibold">%</span>
            </div>
            <p className="mt-2 text-center text-gray-700">Satisfied Clients</p>
          </div>
        </div>
      </section>
    </>
  );
}
