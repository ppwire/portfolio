import HeaderButton from './HeaderButton'
const Header = () => {
   return (
      <header className="flex justify-between align-middle p-4 mb-8">
         <div className="flex">
            <img className="inline self-baseline" src="/assets/fav-icon.svg" alt="" />
            <h4 className="inline self-baseline">POBPOOM</h4>
         </div>
         <div className="flex gap-4">
            <HeaderButton value="<Project />"></HeaderButton>
            <HeaderButton value="<Experience />"></HeaderButton>
            <HeaderButton value="<Contact />" target="contact"></HeaderButton>
         </div>
      </header>
   )
}
export default Header