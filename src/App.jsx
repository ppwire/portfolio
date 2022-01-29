import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skill from './components/Skill'
import Footer from './components/Footer'
import Project from './components/Project'

function App() {
  return (
    <div >

      <main className="lg:px-36 md:px-16 px-10 mt-5 mb-20">
        <Header></Header>
        <Hero></Hero>
        <br />
        <About></About>
        <Skill></Skill>
        <br />
        <Project></Project>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default App
