import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skill from './components/Skill'
import Footer from './components/Footer'

function App() {
  return (
    <div >
      <main className="2xl:px-80 xl:px-60 lg:px-32 md:px-16 mt-5 mb-20">
        <Header></Header>
        <Hero></Hero>
        <br />
        <About></About>
        <br />
        <Skill></Skill>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default App
