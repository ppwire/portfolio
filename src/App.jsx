import './App.css'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Project from './components/Project'
import Timeline from './components/Timeline'
import Slidein from './components/Slidein'
import FadeIn from './components/FadeIn'

function App() {
  return (
    <div >
      <main >
        <Hero></Hero>
        <FadeIn>
          <Timeline></Timeline>
        </FadeIn>
        <Slidein>
          <Project></Project>
        </Slidein>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default App
