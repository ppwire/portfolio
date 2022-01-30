const Button = ({ value, onClick, addOnStyle }) => {

   let btnStyle = "card-solid-shadow p-1 transition duration-300 hover:translate-y-1"

   if(addOnStyle){
      btnStyle+= ` ${addOnStyle}`
   }

   return (
      <button className={btnStyle}
         onClick={onClick}
      >
         <p> {value}</p>
      </button>
   )
}
export default Button