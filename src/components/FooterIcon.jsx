const FooterIcon = ({ img, link }) => {

   const onClickHandler = () => {
      window.open(link, "_blank")
   }
   return (
      <img src={img} alt="footer-icon" className="cursor-pointer inline mr-4 " onClick={onClickHandler} />
   )
}
export default FooterIcon