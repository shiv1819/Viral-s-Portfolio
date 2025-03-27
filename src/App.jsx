import './App.css'
import Footer from './Components/Footer'
import AnimatedHeader from './Components/Header'
import SmoothScroll from './Components/SmoothScroll'
import Experince from './Home/Experince'
import Hero from './Home/Hero'

function App() {

  return (
    <>
      <SmoothScroll>
        <AnimatedHeader />
        <Hero />
        <Experince />
        <Footer />
      </SmoothScroll>
    </>
  )
}

export default App
