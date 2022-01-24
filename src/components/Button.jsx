const Button = ({ value }) => {
   return (
      <button className="border-2 
      border-black px-1 solid-shadow 
      bg-white transition duration-300
      hover:translate-y-1">
         <h5> {value}</h5>
      </button>
   )
}
export default Button