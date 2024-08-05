import React, { useEffect } from 'react';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Navbar from '../Hero/Navbar';
import Footer from '../Footer';
import CountUp from 'react-countup';

// Import your images
import image1 from '../../../assets/Images/ab1 (2).jpg';
import image2 from '../../../assets/Images/image1.jpg';
import image3 from '../../../assets/Images/image1.jpg';
import image4 from '../../../assets/Images/image1.jpg';
import image5 from '../../../assets/Images/image1.jpg';
import image6 from '../../../assets/Images/image1.jpg';
import image7 from '../../../assets/Images/image1.jpg';
import image8 from '../../../assets/Images/image1.jpg';
import image9 from '../../../assets/Images/image1.jpg';

const About = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 1000 });
  }, []);

  const sections = [
    {
      title: "Our Mission",
      description: "At SDM Orthopaedic, our mission is to enhance the quality of life for patients by providing advanced orthopedic solutions. We strive to deliver products that meet the highest standards of safety, efficacy, and reliability.",
      image: image1
    },
    {
      title: "Our Vision",
      description: "We envision a future where everyone has access to state-of-the-art orthopedic care. Through continuous research, development, and collaboration with the medical community, we aim to set new benchmarks in orthopedic manufacturing.",
      image: image2
    },
    {
      title: "Verified Company",
      description: "We envision a future where everyone has access to state-of-the-art orthopedic care. Through continuous research, development, and collaboration with the medical community, we aim to set new benchmarks in orthopedic manufacturing.",
      image: image3
    },
    {
      title: "Quality Assurance",
      description: "Quality is at the heart of everything we do. Our manufacturing unit is equipped with the latest technology and adheres to stringent quality control processes. Each product undergoes rigorous testing to ensure it meets international standards.",
      image: image4
    },
    {
      title: "Our Products",
      description: "We offer a comprehensive range of orthopedic implants and instruments:\nJoint Replacement Implants\nTrauma Implants\nSpinal Implants\nOrthopedic Surgical Instruments",
      image: image5
    },
    {
      title: "Pan India Presence",
      description: "With a robust distribution network, we supply our products to hospitals, clinics, and medical institutions across the length and breadth of India. Our dedicated team ensures timely delivery and exceptional after-sales support.",
      image: image6
    },
    {
      title: "Innovation and Research",
      description: "Innovation drives us forward. Our research and development team works tirelessly to bring cutting-edge solutions to the market, keeping pace with the evolving needs of the orthopedic industry.",
      image: image7
    },
    {
      title: "Commitment to Sustainability",
      description: "We are committed to sustainable practices in our manufacturing processes. By minimizing waste and optimizing resource use, we contribute to a healthier planet while delivering top-notch products to our customers.",
      image: image8
    },
    {
      title: "Our Team",
      description: "Our success is driven by a talented team of professionals, including engineers, scientists, and healthcare experts. Their dedication and expertise enable us to maintain our reputation as a trusted partner in orthopedic care.",
      image: image9
    }
  ];

  return (
    <>
      <Navbar />
      <section className="relative bg-blueGray-50">
        <div 
          className="relative w-full h-72 bg-cover bg-center flex items-center justify-center" 
          style={{ backgroundImage: `url(${'https://www.klsmartin.com/fileadmin/_processed_/e/8/csm_Orthopedics_1920x875_47eedf4b4f.jpg'})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center">
            <h1 
              id='heading' 
              className="text-white font-semibold text-7xl animate__animated animate__backInDown"
            >
              ABOUT US
            </h1>
          </div>
        </div>
      </section>
      <section className="pb-10 bg-blueGray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            {sections.map((section, index) => (
              <div key={index} className="w-full md:w-12/12 px-4 py-6">
                <div className={`flex flex-col md:flex-row ${index % 2 !== 0 && 'md:flex-row-reverse'} items-center`}>
                  <img 
                    src={section.image} 
                    alt={section.title} 
                    data-aos={index % 2 === 0 ? 'fade-out-left' : 'fade-out-right'} // AOS attribute
                    className="w-full md:w-1/2 rounded-lg shadow-md m-3" 
                  />
                  <div 
                    data-aos={index % 2 === 0 ? 'fade-out-right' : 'fade-out-left'} // AOS attribute
                    className="md:w-1/2 md:px-4 mt-4 md:mt-0 border border-gray-300 rounded-lg shadow-lg p-6 m-3"
                  >
                    <h6 className="text-3xl font-semibold">{section.title}</h6>
                    <p className="mt-2 mb-4 text-blueGray-500 whitespace-pre-line text-2xl">{section.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-counter py-12 bg-gray-100">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="single-counter animate__animated animate__fadeInUp flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
            <div className="inner flex items-baseline">
              <b className="counter text-4xl font-bold">
                <CountUp end={20} duration={2} />
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

      <Footer />
    </>
  );
}

export default About;
