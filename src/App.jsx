import './App.css'
import Footer from './Components/Footer'
import AnimatedHeader from './Components/Header'
import ScrollProgressBar from './Components/ScrollProgres'
import Experince from './Home/Experince'
import Hero from './Home/Hero'

function App() {

  return (
    <>
      <ScrollProgressBar />
      <AnimatedHeader />
      <Hero />
      <Experince />
      <Footer />
    </>
  )
}

export default App
