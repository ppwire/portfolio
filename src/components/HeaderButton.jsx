import { Link } from 'react-scroll'
const HeaderButton = ({ value, target }) => {
   return (
      <Link to={target} spy={true} smooth={true}>
         <button className="card-solid-shadow p-1 transition duration-300
      hover:translate-y-1"
         >
            <h5> {value}</h5>
         </button>
      </Link>

   )
}
export default HeaderButton