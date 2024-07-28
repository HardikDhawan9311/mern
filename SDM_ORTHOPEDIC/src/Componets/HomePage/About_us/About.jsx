import React from 'react';
import 'animate.css';
import Navbar from '../Hero/Navbar'
import Footer from '../Footer'
import CountUp from 'react-countup';

function About() {
  return (
    <>
      <Navbar />
        <section className="relative bg-blueGray-50">
          <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
            <div
              className="absolute top-0 w-full h-full bg-center bg-cover"
              // style={{
              //   backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1267&amp;q=80')",
              // }}
            >
              <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
            </div>
            <div className="container relative mx-auto">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                  <div className="pr-12 ">
                    <h1 id='heading' className="text-white font-semibold text-5xl">
                      ABOUT US
                    </h1>
                    <div className="w-full h-15 px-4 text-center">
                     <div className="relative flex flex-col min-w-0 break-words bg-pink z-28 w-full mb-8 shadow-lg rounded-lg">
                     <div className="px-4 py-5 flex-auto">
                       <p className="mt-2 mb-4 text-blueGray-500">
                       Welcome to SDM Orthopaedic, a leading name in the manufacturing of high-quality orthopedic implants and instruments. With a strong commitment to innovation, precision, and excellence, we cater to the needs of healthcare professionals and institutions across India.
                       </p>
                       </div>
                       </div>
                      </div>

                    
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="pb-10 bg-blueGray-200 -mt-24">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap">

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                      <h6 className="text-xl font-semibold">Our Mission</h6>
                      <p className="mt-2 mb-4 text-blueGray-500">
                       At SDM Orthopaedic, our mission is to enhance the quality of life for patients by providing advanced orthopedic solutions. We strive to deliver products that meet the highest standards of safety, efficacy, and reliability.
                      </p>
                    </div>
                  </div>
                </div> 

                <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                      <h6 className="text-xl font-semibold">Our Vision</h6>
                      <p className="mt-2 mb-4 text-blueGray-500">
                      We envision a future where everyone has access to state-of-the-art orthopedic care. Through continuous research, development, and collaboration with the medical community, we aim to set new benchmarks in orthopedic manufacturing.
                      </p>
                    </div>
                  </div>
                </div> 

                <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                      <h6 className="text-xl font-semibold">Verified Company</h6>
                      <p className="mt-2 mb-4 text-blueGray-500">
                      We envision a future where everyone has access to state-of-the-art orthopedic care. Through continuous research, development, and collaboration with the medical community, we aim to set new benchmarks in orthopedic manufacturing.
                      </p>
                    </div>
                  </div>
                </div>
            
              <div className="w-full md:w-4/12 px-4 text-center">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                      <h6 className="text-xl font-semibold">Quality Assurance</h6>
                      <p className="mt-2 mb-4 text-blueGray-500">
                      Quality is at the heart of everything we do. Our manufacturing unit is equipped with the latest technology and adheres to stringent quality control processes. Each product undergoes rigorous testing to ensure it meets international standards.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-4/12 px-4 text-center">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                      <h6 className="text-xl font-semibold">Our Products</h6>
                      <p className="mt-2 mb-4 text-blueGray-500">
                      We offer a comprehensive range of orthopedic implants and instruments:<br/>
                       <b>Joint Replacement Implants</b><br/>
                       <b>Trauma Implants</b><br/>
                       <b>Spinal Implants</b><br/>
                       <b>Orthopedic Surgical Instruments</b><br/>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-4/12 px-4 text-center">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                      <h6 className="text-xl font-semibold">Pan India Presence</h6>
                      <p className="mt-2 mb-4 text-blueGray-500">
                      With a robust distribution network, we supply our products to hospitals, clinics, and medical institutions across the length and breadth of India. Our dedicated team ensures timely delivery and exceptional after-sales support.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-4/12 px-4 text-center">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                      <h6 className="text-xl font-semibold">Innovation and Research</h6>
                      <p className="mt-2 mb-4 text-blueGray-500">
                      Innovation drives us forward. Our research and development team works tirelessly to bring cutting-edge solutions to the market, keeping pace with the evolving needs of the orthopedic industry.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-4/12 px-4 text-center">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                      <h6 className="text-xl font-semibold">Commitment to Sustainability</h6>
                      <p className="mt-2 mb-4 text-blueGray-500">
                      We are committed to sustainable practices in our manufacturing processes. By minimizing waste and optimizing resource use, we contribute to a healthier planet while delivering top-notch products to our customers.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-4/12 px-4 text-center">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                      <h6 className="text-xl font-semibold">Our Team</h6>
                      <p className="mt-2 mb-4 text-blueGray-500">
                       Our success is driven by a talented team of professionals, including engineers, scientists, and healthcare experts. Their dedication and expertise enable us to maintain our reputation as a trusted partner in orthopedic care.
                      </p>
                    </div>
                  </div>
                </div>      
                </div>
                </div>
          </section>
        </section>

        <section className="section-counter py-12 bg-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="single-counter animate__animated animate__fadeInUp flex flex-col items-center bg-white p-6  shadow-md">
            <div className="inner flex items-baseline">
              <b className="counter text-4xl font-bold">
                <CountUp end={20} duration={5} />
              </b>
              <span className="text-xl font-semibold">+</span>
            </div>
            <p className="mt-2 text-center text-gray-700">Years of Experience</p>
          </div>

          <div className="single-counter animate__animated animate__fadeInUp flex flex-col items-center bg-white p-6 rounded-lg shadow-md" >
            <div className="inner flex items-baseline">
              <b className="counter text-4xl font-bold">
                <CountUp end={2} duration={5} />
              </b>
              <span className="text-xl font-semibold">k+</span>
            </div>
            <p className="mt-2 text-center text-gray-700">Products</p>
          </div>

          <div className="single-counter animate__animated animate__fadeInUp flex flex-col items-center bg-white p-6 rounded-lg shadow-md" >
            <div className="inner flex items-baseline">
              <b className="counter text-4xl font-bold">
                <CountUp end={100} duration={5} />
              </b>
              <span className="text-xl font-semibold">%</span>
            </div>
            <p className="mt-2 text-center text-gray-700">Satisfied Clients</p>
          </div>

        </div>
      </div>
    </section>


    <Footer />
    </>
  );
}

export default About;
