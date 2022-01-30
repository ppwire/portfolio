import { useEffect, useState } from 'react'
import HeaderButton from './HeaderButton'
import SidebarButton from './SideBarButton'
import NavIcon from '/assets/nav-icon.svg'
import './Header.css'
const Header = () => {
   const [windowWidth, setWindowWidth] = useState(window.innerWidth)
   const [showSideBar, setShowSideBar] = useState(false)

   useEffect(() => {
      function watchWidth() {
         setWindowWidth(window.innerWidth)
      }
      window.addEventListener("resize", watchWidth)

      return function () {
         window.removeEventListener("resize", watchWidth)
      }
   }, [])

   const navData = [
      {
         value: '<Project />',
         target: 'project'
      },
      {
         value: '<Experiences />',
         target: 'experiences'
      },
      {
         value: '<Contact />',
         target: 'contact'
      }
   ]

   return (
      <header className="flex justify-between align-middle p-4 mb-8">
         <div className="flex">
            <img className="inline self-baseline" src="/assets/fav-icon.svg" alt="" />
            <h4 className="inline self-baseline">POBPOOM</h4>
         </div>

         {
            windowWidth > 1024 ? <div className="flex gap-4">
               {
                  navData.map((el, index) => {
                     return <HeaderButton key={index} value={el.value} target={el.target}></HeaderButton>
                  })
               }
            </div>
               :
               <img className="cursor-pointer" src={NavIcon} alt="" onClick={() => setShowSideBar(true)} />
         }

         {
            windowWidth < 1024 && <nav className={showSideBar ? 'sidebar active' : 'sidebar'}>

               <ul className="sidebar-list">
                  <div className="flex justify-between">
                     <img src="/assets/fav-icon.svg" className="small" alt="" />
                     <img src="/assets/close-icon.svg" className="small cursor-pointer" alt="" onClick={() => setShowSideBar(false)} />
                  </div>
                  <br />
                  {
                     navData.map((el, index) => {
                        return <SidebarButton  key={index} 
                        value={el.value} target={el.target}></SidebarButton>
                     })
                  }
               </ul>
            </nav>
         }
      </header>
   )
}
export default Header