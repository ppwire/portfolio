import './About.css'
import Button from './Button'
const About = () => {

   const onClick = () => {
      window.open('https://docs.google.com/document/d/1rqtkpJWKlk8ksRUuLhszJFgZd441fWpu/edit?usp=sharing&ouid=114866621988823577924&rtpof=true&sd=true', "_blank");
   }
   return (
      <div className="section mb-4">
         <h3 className="font-semibold">Who am I ?</h3>
         <h4 className="font-extralight mb-2">I’m a full stack developer for Thai Health Insurance PCL, I mostly work with Node and Javascript. The thing that I have passion most is game.</h4>
         <Button value="<Resume />" onClick={onClick} ></Button>
      </div>
   )
}

export default About