import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Carasouel from './Hero/Carasouel';
import Navbar from './Hero/Navbar';
import Footer from './Footer';
import Contact_us from './Contact_us/Contact_us';
import Main from './Main';
import Contactus from './Contact_us/Contactus';
import ContactIcon from './Contact_us/ContactIcon';

function Home() {
  return (
    <>
      <div>
        <Navbar />
        <Carasouel />
        <ContactIcon/>
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default Home;
