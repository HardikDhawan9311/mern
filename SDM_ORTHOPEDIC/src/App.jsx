import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Carasouel from './Componets/HomePage/Carasouel'
import Header from './Componets/HomePage/Header'
import Footer from './Componets/HomePage/Footer'
import Contact_us from './Componets/HomePage/Contact_us';
import Main from './Componets/Main'

function App() {
  

  return (
    <>
    <div>
      
      <Header/>
      <Carasouel/>
      {/* <Contact_us/> */}
       <Main/>
      <Footer/>
      
    </div>
    </>
  )
}

export default App
