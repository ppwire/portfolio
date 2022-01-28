const Button = ({ value, onClick }) => {
   return (
      <button className="card-solid-shadow p-1 transition duration-300
      hover:translate-y-1"
         onClick={onClick}
      >
         <h5> {value}</h5>
      </button>
   )
}
export default Button