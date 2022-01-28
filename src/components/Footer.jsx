import FooterIcon from './FooterIcon'
const Footer = () => {
   const footerItem = [
      {
         link: 'https://github.com/ppwire',
         img: '/assets/github-icon.svg'
      },
      {
         link: 'https://www.facebook.com/pobpoom',
         img: '/assets/facebook-footer.svg'
      },
      {
         link: 'https://www.instagram.com/ppoom_mt',
         img: '/assets/ig-footer.svg'
      },
      {
         link: 'https://www.linkedin.com/in/poom-muangthai-717957216',
         img: '/assets/linkin-footer.svg'
      },
   ]
   return (
      <div className="footer bg-secondary p-8" id="contact">
         <h4 className="font-light">Contact</h4>
         <span >
            {footerItem.map((el, index) => {
               return <FooterIcon key={index} img={el.img} link={el.link}></FooterIcon>
            })}
         </span>
         <h5>poom.mth@gmail.com</h5>
      </div>
   )
}

export default Footer