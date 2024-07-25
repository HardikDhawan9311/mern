import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Carasouel from './Componets/HomePage/Carasouel'
import Header from './Componets/HomePage/Header'
import Footer from './Componets/HomePage/Footer'
import Contact_us from './Componets/HomePage/Contact_us';


function App() {
  

  return (
    <>
    <div>
      
      <Header/>
      <Carasouel/>
      {/* <Contact_us/> */}
      <Footer/>
      
    </div>
    </>
  )
}

export default App
