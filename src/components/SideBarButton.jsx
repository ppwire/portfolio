import { Link } from 'react-scroll'
const SideBarButton = ({ value, target }) => {
   return (
      <Link to={target} spy={true} smooth={true}>
         <button className="card-solid-shadow cursor-pointer transition duration-300 hover:translate-y-1 text-center w-full mb-4"
         >
            <h5> {value}</h5>
         </button>
      </Link>

   )
}
export default SideBarButton