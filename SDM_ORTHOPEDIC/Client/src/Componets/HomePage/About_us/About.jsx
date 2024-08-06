import React, { useEffect } from 'react';
import 'animate.css';
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from '../Hero/Navbar';
import Footer from '../Footer';
import CountUp from 'react-countup';
import certificate1 from '../../../assets/Images/certificate1.jpg';
import certificate2 from '../../../assets/Images/certificate2.jpg';

// Import your images
import image1 from '../../../assets/Images/ab1 (2).jpg';
// import other images if needed

const About = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 800,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <Navbar />
      <section className="relative bg-blueGray-50">
        <div 
          className="relative w-full h-72 bg-cover bg-center flex items-center justify-center" 
          style={{ backgroundImage: `url('https://www.klsmartin.com/fileadmin/_processed_/e/8/csm_Orthopedics_1920x875_47eedf4b4f.jpg')` }}
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
        {[
          {
            title: "Our Mission",
            text: "At SDM Orthopaedic, our mission is to enhance the quality of life for patients by providing advanced orthopedic solutions. We strive to deliver products that meet the highest standards of safety, efficacy, and reliability.",
            img: image1,
            aos: "fade-right"
          },
          {
            title: "Our Vision",
            text: "We envision a future where everyone has access to state-of-the-art orthopedic care. Through continuous research, development, and collaboration with the medical community, we aim to set new benchmarks in orthopedic manufacturing.",
            img: image1,
            aos: "fade-left"
          },
          {
            title: "Verified Company",
            text: "Our company is verified and trusted by many institutions. We aim to deliver the best in orthopedic solutions and services.",
            img: image1,
            aos: "fade-right"
          },
          {
            title: "Quality Assurance",
            text: "Quality is at the heart of everything we do. Our manufacturing unit is equipped with the latest technology and adheres to stringent quality control processes. Each product undergoes rigorous testing to ensure it meets international standards.",
            img: image1,
            aos: "fade-left"
          },
          {
            title: "Our Products",
            text: "We offer a comprehensive range of orthopedic implants and instruments:\nJoint Replacement Implants\nTrauma Implants\nSpinal Implants\nOrthopedic Surgical Instruments",
            img: image1,
            aos: "fade-right"
          },
          {
            title: "Pan India Presence",
            text: "With a robust distribution network, we supply our products to hospitals, clinics, and medical institutions across the length and breadth of India. Our dedicated team ensures timely delivery and exceptional after-sales support.",
            img: image1,
            aos: "fade-left"
          },
          {
            title: "Innovation and Research",
            text: "Innovation drives us forward. Our research and development team works tirelessly to bring cutting-edge solutions to the market, keeping pace with the evolving needs of the orthopedic industry.",
            img: image1,
            aos: "fade-right"
          },
          {
            title: "Commitment to Sustainability",
            text: "We are committed to sustainable practices in our manufacturing processes. By minimizing waste and optimizing resource use, we contribute to a healthier planet while delivering top-notch products to our customers.",
            img: image1,
            aos: "fade-left"
          },
          {
            title: "Our Team",
            text: "Our success is driven by a talented team of professionals, including engineers, scientists, and healthcare experts. Their dedication and expertise enable us to maintain our reputation as a trusted partner in orthopedic care.",
            img: image1,
            aos: "fade-right"
          },
        ].map((section, index) => (
          <div key={index} className="container mx-auto px-4 mb-10">
            <div className={`flex flex-wrap ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
              <div className="w-full md:w-1/2 p-3" data-aos={section.aos}>
                <div className="relative">
                  <img 
                    src={section.img} 
                    alt={`image${index + 1}`} 
                    className="w-full rounded-lg shadow-md" 
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 p-3 flex flex-col justify-center" data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}>
                <div className="border border-gray-300 rounded-lg shadow-lg p-6">
                  <h6 className="text-2xl font-semibold">{section.title}</h6>
                  <p className="mt-2 mb-4 text-blueGray-500 whitespace-pre-line text-xl">
                    {section.text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <div className="container mx-auto p-4">
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gray-100 p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold">Certifications</h3>
          </div>
          <div className="flex justify-center p-4 space-x-4">
            <div className="flex justify-left h-auto w-1/2">
              <img src={certificate1} alt="Certificate 1" className="object-contain p-8 shadow-lg" />
            </div>
            <div className="flex justify-end h-auto w-1/2">
              <img src={certificate2} alt="Certificate 2" className="object-contain p-8 shadow-lg" />
            </div>
          </div>
        </div>
      </div>

      <section className="section-counter py-12 bg-gray-100">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="single-counter flex flex-col items-center bg-white p-6 rounded-lg shadow-md" data-aos="fade-up">
            <div className="inner flex items-baseline">
              <b className="counter text-4xl font-bold">
                <CountUp end={20} duration={5} />
              </b>
              <span className="text-xl font-semibold">+</span>
            </div>
            <p className="mt-2 text-center text-gray-700">Years of Excellence</p>
          </div>
          <div className="single-counter flex flex-col items-center bg-white p-6 rounded-lg shadow-md" data-aos="fade-up">
            <div className="inner flex items-baseline">
              <b className="counter text-4xl font-bold">
                <CountUp end={19} duration={5} />
              </b>
              <span className="text-xl font-semibold">k+</span>
            </div>
            <p className="mt-2 text-center text-gray-700">Products</p>
          </div>
          <div className="single-counter flex flex-col items-center bg-white p-6 rounded-lg shadow-md" data-aos="fade-up">
            <div className="inner flex items-baseline">
              <b className="counter text-4xl font-bold">
                <CountUp end={100} duration={5} />
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
