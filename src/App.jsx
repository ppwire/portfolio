import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Project from './components/Project'
import Timeline from './components/Timeline'

function App() {
  return (
    <div >
      <main >
        <Hero></Hero>
        <Timeline></Timeline>
        <Project></Project>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default App
