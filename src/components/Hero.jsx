import './Hero.css'
const Hero = () => {
   return (
      <div className="flex flex-wrap gap-10 ">
         <div className="hero-img">
            <img src="/assets/profile-pic-lg.png" alt="" className="card-shadow " />
         </div>
         <div className="self-center hero-text hero">
            <h1>Hi, I'm Poom Muangthai</h1>
            <h2 className="font-extralight">just a normal programmer guy</h2>
         </div>
      </div>
   )
}

export default Hero