const Button = ({ value, onClick, addOnStyle }) => {

   let btnStyle = "card-solid-shadow btn"

   if (addOnStyle) {
      btnStyle += ` ${addOnStyle}`
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