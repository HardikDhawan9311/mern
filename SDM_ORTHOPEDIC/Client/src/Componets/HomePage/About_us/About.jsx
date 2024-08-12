import React, { useEffect,useState,useRef } from 'react';
import 'animate.css';
import './About.css'
import AOS from "aos";
import "aos/dist/aos.css";
import 'aos/dist/aos.css'; // Import AOS styles
import Navbar from '../Hero/Navbar';
import Footer from '../Footer';
import CountUp from 'react-countup';
import certificate1 from '../../../assets/Images/certificate1.jpg';
import certificate2 from '../../../assets/Images/certificate2.jpg';

// Import your images
// import image1 from '../../../assets/Images/ab1 (2).jpg';
// import image2 from '../../../assets/Images/image1.jpg';
// import image3 from '../../../assets/Images/image1.jpg';
// import image4 from '../../../assets/Images/image1.jpg';
// import image5 from '../../../assets/Images/image1.jpg';
// import image6 from '../../../assets/Images/image1.jpg';
// import image7 from '../../../assets/Images/image1.jpg';
// import image8 from '../../../assets/Images/image1.jpg';
// import image9 from '../../../assets/Images/image1.jpg';

// const About = () => {
//   useEffect(() => {
//     AOS.init({
//       disable: "phone",
//       duration: 800,
//       easing: "ease-out-cubic",
//     });
const About = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after it's visible
        }
      },
      { threshold: 0.1 } // Adjust this value if needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  


  


  return (
    <>
      <Navbar />
      <section className="relative bg-blueGray-50">
        <div 
          className="relative w-full h-72 bg-cover bg-center flex items-center justify-center" 
          style={{ backgroundImage: `url(https://www.klsmartin.com/fileadmin/_processed_/e/8/csm_Orthopedics_1920x875_47eedf4b4f.jpg)` }}

        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center">
            <h1 
              id='heading' 
              className="text-white font-semibold text-7xl animate_animated animate_backInDown"
            >
              ABOUT US
            </h1>
          </div>
        </div>
      </section>
    
<section className="pb-10 ">


  
  <div className="container mx-auto mt-20 px-4">
    <div className="flex flex-wrap">
      <div className="w-full md:w-12/12 px-4 py-6">
        <div className="flex flex-col md:flex-row items-start">
          <img 
            src="https://img.freepik.com/free-photo/ordinary-busy-day-surgeon_329181-19717.jpg?t=st=1723011909~exp=1723015509~hmac=f0db925ebe7afe3a7f861c10ceb489fd6dcd024ceafb131a2dfb69f239a484e9&w=740"
            alt="image1" 
            className="w-full md:w-1/2 rounded-lg shadow-md m-3" 
          />
         <div className="absolute right-4 md:w-1/2 md:px-4 mt-4 md:mt-20 border border-gray-300 bg-white  rounded-lg shadow-lg p-6 m-3" data-aos="fade-right">
            <h6 className="text-2xl font-semibold">Our Mission</h6>
            <p className="mt-2 mb-4 text-blueGray-500 whitespace-pre-line text-xl">
              At SDM Orthopaedic, our mission is to enhance the quality of life for patients by providing advanced orthopedic solutions. We strive to deliver products that meet the highest standards of safety, efficacy, and reliability.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>




  <div className="container mx-auto px-4">
    <div className="flex flex-wrap">
      <div className="w-full md:w-12/12 px-4 py-6">
        <div className="flex flex-col md:flex-row items-start">
          
        <div className="relative left-4 md:w-1/2 md:px-4 mt-4 md:mt-20 border border-gray-300  rounded-lg shadow-lg p-6 m-3 z-40 bg-white" data-aos="fade-left">
            <h6 className="text-2xl font-semibold">Our Vision</h6>
            <p className="mt-2 mb-4 text-blueGray-500 whitespace-pre-line text-xl">
            We envision a future where everyone has access to state-of-the-art orthopedic care. Through continuous research, development, and collaboration with the medical community, we aim to set new benchmarks in orthopedic manufacturing.
            </p>
            
          </div>
          <img 
            src="https://img.freepik.com/free-photo/doctor-nurse-medical-team-are-performing-surgical-operation-emergency-room-hospital-assistant-hands-out-scissor-instruments-surgeons-operation_657921-1075.jpg?t=st=1723012349~exp=1723015949~hmac=db4beaca9e4e609ab4ec816a01fe85e65e997b14903d8daeae2eb7bc624a0d4e&w=740"
            alt="image1" 
            className="w-full md:w-1/2 rounded-lg right-4 absolute shadow-md m-3" 
          />
        </div>
      </div>
    </div>
  </div>


  <div className="container mx-auto mt-20 px-4">
    <div className="flex flex-wrap">
      <div className="w-full md:w-12/12 px-4 py-6">
        <div className="flex flex-col md:flex-row items-start mt-20">
          <img 
            src="https://plus.unsplash.com/premium_photo-1664304334372-3ae5f0bc6665?q=80&w=1993&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            className="w-full md:w-1/2 rounded-lg shadow-md m-3" 
          />
          <div className="absolute right-4 md:w-1/2 md:px-4 mt-4 md:mt-20 border border-gray-300  rounded-lg shadow-lg p-6 m-3 bg-white" data-aos="fade-right">
            <h6 className="text-2xl font-semibold">Verified Company</h6>
            <p className="mt-2 mb-4 text-blueGray-500 whitespace-pre-line text-xl">
            We envision a future where everyone has access to state-of-the-art orthopedic care. Through continuous research, development, and collaboration with the medical community, we aim to set new benchmarks in orthopedic manufacturing.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>


    <div className="container mx-auto px-4">
    <div className="flex flex-wrap">
      <div className="w-full md:w-12/12 px-4 py-6">
        <div className="flex flex-col md:flex-row items-start">
          
        <div className="relative left-4 md:w-1/2 md:px-4 mt-4 md:mt-20 border border-gray-300  rounded-lg shadow-lg p-6 m-3 z-40 bg-white" data-aos="fade-left">
            <h6 className="text-2xl font-semibold">Quality Assurance</h6>
            <p className="mt-2 mb-4 text-blueGray-500 whitespace-pre-line text-xl">
            Quality is at the heart of everything we do. Our manufacturing unit is equipped with the latest technology and adheres to stringent quality control processes. Each product undergoes rigorous testing to ensure it meets international standards.
            </p>
            
          </div>
          <img 
            src="https://img.freepik.com/premium-photo/asian-student-learning-with-human-bone-spinal-nerve-model-anatomy-biology-classroom-hig_622428-10183.jpg"
            alt="image1" 
            className="w-full md:w-1/2 rounded-lg right-4 absolute shadow-md m-3" 
          />
        </div>
      </div>
    </div>
  </div>


  <div className="container mx-auto mt-20 px-4">
    <div className="flex flex-wrap">
      <div className="w-full md:w-12/12 px-4 py-6">
        <div className="flex flex-col md:flex-row items-start mt-20">
          <img 
            src="https://img.freepik.com/free-photo/medic-holding-tray-instruments_23-2149299306.jpg"
            alt="image1" 
            className="w-full md:w-1/2 rounded-lg shadow-md m-3" 
          />
          <div className="absolute right-4 md:w-1/2 md:px-4 mt-4 md:mt-20 border border-gray-300  rounded-lg shadow-lg p-6 m-3 bg-white" data-aos="fade-right">
            <h6 className="text-2xl font-semibold">Our Products</h6>
            <p className="mt-2 mb-4 text-blueGray-500 whitespace-pre-line text-xl">
            We offer a comprehensive range of orthopedic implants and instruments:\nJoint Replacement Implants\nTrauma Implants\nSpinal Implants\nOrthopedic Surgical Instruments
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>


    <div className="container mx-auto px-4">
    <div className="flex flex-wrap">
      <div className="w-full md:w-12/12 px-4 py-6">
        <div className="flex flex-col md:flex-row items-start">
          
        <div className="relative left-4 md:w-1/2 md:px-4 mt-4 md:mt-20 border border-gray-300  rounded-lg shadow-lg p-6 m-3 z-40 bg-white" data-aos="fade-left">
            <h6 className="text-2xl font-semibold">Pan India Presence</h6>
            <p className="mt-2 mb-4 text-blueGray-500 whitespace-pre-line text-xl">
            With a robust distribution network, we supply our products to hospitals, clinics, and medical institutions across the length and breadth of India. Our dedicated team ensures timely delivery and exceptional after-sales support.
            </p>
            
          </div>
          <img 
            src="https://img.freepik.com/free-photo/front-view-doctor-holding-radiography_23-2150165471.jpg"
            alt="image1" 
            className="w-full md:w-1/2 rounded-lg right-4 absolute shadow-md m-3" 
          />
        </div>
      </div>
    </div>
  </div>



  <div className="container mx-auto mt-20 px-4">
    <div className="flex flex-wrap">
      <div className="w-full md:w-12/12 px-4 py-6">
        <div className="flex flex-col md:flex-row items-start mt-20">
          <img 
            src="https://img.freepik.com/free-photo/doctors-doing-surgical-procedure-patient_23-2148962500.jpg"
            alt="image1" 
            className="w-full md:w-1/2 rounded-lg shadow-md m-3" 
          />
          <div className="absolute right-4 md:w-1/2 md:px-4 mt-4 md:mt-20 border border-gray-300  rounded-lg shadow-lg p-6 m-3 bg-white" data-aos="fade-right">
            <h6 className="text-2xl font-semibold">Innovation and Research</h6>
            <p className="mt-2 mb-4 text-blueGray-500 whitespace-pre-line text-xl">
            Innovation drives us forward. Our research and development team works tirelessly to bring cutting-edge solutions to the market, keeping pace with the evolving needs of the orthopedic industry.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>


    <div className="container mx-auto px-4">
    <div className="flex flex-wrap">
      <div className="w-full md:w-12/12 px-4 py-6">
        <div className="flex flex-col md:flex-row items-start">
          
        <div className="relative left-4 md:w-1/2 md:px-4 mt-4 md:mt-20 border border-gray-300  rounded-lg shadow-lg p-6 m-3 z-40 bg-white" data-aos="fade-left">
            <h6 className="text-2xl font-semibold">Commitment to Sustainability</h6>
            <p className="mt-2 mb-4 text-blueGray-500 whitespace-pre-line text-xl">
            We are committed to sustainable practices in our manufacturing processes. By minimizing waste and optimizing resource use, we contribute to a healthier planet while delivering top-notch products to our customers.
            </p>
            
          </div>
          <img 
            src="https://img.freepik.com/premium-photo/doctor-explaining-anatomical-spine-his-patient_13339-123225.jpg?w=996"
            alt="image1" 
            className="w-full md:w-1/2 rounded-lg right-4 absolute shadow-md m-3" 
          />
        </div>
      </div>
    </div>
  </div>



  {/* <div className="container mx-auto mt-20 px-4">
    <div className="flex flex-wrap">
      <div className="w-full md:w-12/12 px-4 py-6">
        <div className="flex flex-col md:flex-row items-start mt-20">
          <img 
            src="https://img.freepik.com/premium-photo/doctor-is-holding-knee-it-is-red-swollen_248459-40454.jpg?w=1060"
            alt="image1" 
            className="w-full md:w-1/2 rounded-lg shadow-md m-3" 
          />
          <div className="absolute right-4 md:w-1/2 md:px-4 mt-4 md:mt-20 border border-gray-300  rounded-lg shadow-lg p-6 m-3 bg-white" data-aos="fade-right">
            <h6 className="text-2xl font-semibold">Our Team</h6>
            <p className="mt-2 mb-4 text-blueGray-500 whitespace-pre-line text-xl">
            Our success is driven by a talented team of professionals, including engineers, scientists, and healthcare experts. Their dedication and expertise enable us to maintain our reputation as a trusted partner in orthopedic care.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div> */}

</section>

<div className="container mx-auto p-4">
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <div className="bg-gray-100 p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold">Certifications</h3>
        </div>
        <div className="flex justify-center p-4">
  <div className="flex justify-center h-auto w-1/3">
    <img src={certificate1} alt="Certificate 1" className="object-contain p-8 shadow-lg" />
  </div>
  <div className="flex justify-end h-auto w-1/3">
    <img src={certificate2} alt="Certificate 2" className="object-contain p-8 shadow-lg" />
  </div>
</div>
                  
                
                </div>
      </div>
    

      {/* <section className="section-counter py-12 bg-gray-100">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="single-counter flex flex-col items-center bg-white p-6 rounded-lg shadow-md"data-aos="fade-up">
            <div className="inner flex items-baseline">
              <b className="counter text-4xl font-bold">
                <CountUp end={20} duration={5} />
              </b>
              <span className="text-xl font-semibold">+</span>
            </div>
            <p className="mt-2 text-center text-gray-700">Years of Excellence</p>
          </div>

          <div className="single-counter flex flex-col items-center bg-white p-6 rounded-lg shadow-md"data-aos="fade-up">
            <div className="inner flex items-baseline">
              <b className="counter text-4xl font-bold">

                <CountUp end={2} duration={2} />

              </b>
              <span className="text-xl font-semibold">k+</span>
            </div>
            <p className="mt-2 text-center text-gray-700">Products</p>
          </div>

          <div className="single-counter flex flex-col items-center bg-white p-6 rounded-lg shadow-md"data-aos="fade-up">
            <div className="inner flex items-baseline">
              <b className="counter text-4xl font-bold">
                <CountUp end={100} duration={5} />
              </b>
              <span className="text-xl font-semibold">%</span>
            </div>
            <p className="mt-2 text-center text-gray-700">Satisfied Clients</p>
          </div>
        </div>
      </section> */}

<section
      className="section-counter py-12 bg-gray-100"
      ref={sectionRef}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          className="single-counter flex flex-col items-center bg-white p-6 rounded-lg shadow-md"
          data-aos="fade-up"
        >
          <div className="inner flex items-baseline">
            <b className="counter text-4xl font-bold">
              {isVisible && (
                <CountUp end={20} duration={5} />
              )}
            </b>
            <span className="text-xl font-semibold">+</span>
          </div>
          <p className="mt-2 text-center text-gray-700">Years of Excellence</p>
        </div>

        <div
          className="single-counter flex flex-col items-center bg-white p-6 rounded-lg shadow-md"
          data-aos="fade-up"
        >
          <div className="inner flex items-baseline">
            <b className="counter text-4xl font-bold">
              {isVisible && (
                <CountUp end={19} duration={5} />
              )}
            </b>
            <span className="text-xl font-semibold">k+</span>
          </div>
          <p className="mt-2 text-center text-gray-700">Products</p>
        </div>

        <div
          className="single-counter flex flex-col items-center bg-white p-6 rounded-lg shadow-md"
          data-aos="fade-up"
        >
          <div className="inner flex items-baseline">
            <b className="counter text-4xl font-bold">
              {isVisible && (
                <CountUp end={100} duration={5} />
              )}
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