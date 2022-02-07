import './App.css'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Project from './components/Project'
import Timeline from './components/Timeline'
import Header from './components/Header'


function App() {
  return (
    <div >
      <main >
        <Header></Header>
        <Hero></Hero>
        <Timeline></Timeline>
        <Project></Project>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default App
