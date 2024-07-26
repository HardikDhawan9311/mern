import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Carasouel from './Componets/HomePage/Carasouel';
import Navbar from './Componets/HomePage/Navbar';
import Footer from './Componets/HomePage/Footer';
import Contact_us from './Componets/HomePage/Contact_us';
import Main from './Componets/HomePage/Main';
import Contactus from './Componets/Contactus';



function App() {
  

  return (
    <>
    <div>
      
    <Navbar/>
    
      <Carasouel/>
       <Contactus/>
       <Main/>
      <Footer/>
      
    </div>
    </>
  )
}

export default App
