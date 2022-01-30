import './Hero.css'
import About from './About'
import Header from './Header'
const Hero = () => {
   return (
      <section>
         <Header></Header>
         <div className="flex flex-wrap gap-10 ">
            <div className="hero-img">
               <img src="/assets/profile-pic-lg.png" alt="pobpoom-hero" className="thick-shadow " />
            </div>
            <div className="self-center hero-text hero">
               <h1>Hi, I'm Poom Muangthai</h1>
               <h2 className="font-extralight">just a normal programmer guy</h2>
            </div>
            <About></About>
         </div>
      </section>
   )
}

export default Hero