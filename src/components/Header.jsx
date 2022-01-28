import Button from './Button'
const Header = () => {
   return (
      <header className="flex justify-between align-middle p-4 mb-8">
         <div className="flex">
            <img className="inline self-baseline" src="/assets/fav-icon.svg" alt="" />
            <h4 className="inline self-baseline">POBPOOM</h4>
         </div>
         <div className="flex gap-4">
            <Button value="<Project />"></Button>
            <Button value="<Experience />"></Button>
            <Button value="<Contact />"></Button>
         </div>
      </header>
   )
}
export default Header